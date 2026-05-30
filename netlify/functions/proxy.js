// netlify/functions/proxy.js
// Node.js 18+ має вбудований fetch, але для сумісності використовуємо node-fetch

const https = require('https');

exports.handler = async (event) => {
  const cors = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json',
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers: cors, body: '' };
  }

  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, headers: cors, body: JSON.stringify({ error: { message: 'Method not allowed' } }) };
  }

  try {
    const { apiKey, body } = JSON.parse(event.body);

    if (!apiKey || !apiKey.startsWith('sk-ant-')) {
      return {
        statusCode: 401,
        headers: cors,
        body: JSON.stringify({ error: { message: 'Invalid or missing API key' } }),
      };
    }

    const payload = JSON.stringify(body);

    const result = await new Promise((resolve, reject) => {
      const options = {
        hostname: 'api.anthropic.com',
        path: '/v1/messages',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': Buffer.byteLength(payload),
          'x-api-key': apiKey,
          'anthropic-version': '2023-06-01',
        },
      };

      const req = https.request(options, (res) => {
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => {
          try {
            resolve({ status: res.statusCode, body: JSON.parse(data) });
          } catch (e) {
            resolve({ status: res.statusCode, body: { error: { message: data } } });
          }
        });
      });

      req.on('error', reject);
      req.setTimeout(55000, () => { req.destroy(new Error('Timeout')); });
      req.write(payload);
      req.end();
    });

    return {
      statusCode: result.status,
      headers: cors,
      body: JSON.stringify(result.body),
    };

  } catch (error) {
    return {
      statusCode: 500,
      headers: cors,
      body: JSON.stringify({ error: { message: error.message || 'Internal server error' } }),
    };
  }
};
