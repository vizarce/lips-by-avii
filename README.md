# ᯓ𝄞LIPS⋆by⋆AVIIˎˊ˗ ⓒ 2026

**Lyrics & Instrumentation Prompt Synthesizer** — веб-застосунок для створення професійних промптів для AI-музичних генераторів (Suno та ін.) з допомогою Claude Sonnet 4.

> AVII = **A**rtificial + **V**italiy + **I**ryna **I**ntelligence

[![Netlify Status](https://api.netlify.com/api/v1/badges/69eabcc2-71e9-4c8f-940e-b260c187a112/deploy-status)](https://app.netlify.com/projects/lips-by-avii/deploys)

---

## 🌐 Живі версії

| Платформа | URL |
|-----------|-----|
| GitHub Pages | https://vizarce.github.io/lips-by-avii/ |
| Netlify | https://lips-by-avii.netlify.app/ |

---

## ✦ Що це таке

LIPS by AVII генерує два типи промптів:

- **Lyrics-Prompt** — структурований текст-підказка для пісенної лірики (≤ 5000 знаків)
- **Style-Prompt** — технічний опис стилю, продакшну та звуку (≤ 200 знаків)

Додатково AI може **написати лірику** з нуля або доопрацювати вашу.

---

## 🆕 Що нового у v5.0.0

- **🔊 5-шаровий бас (L1–L5)** — новий режим "✦ Повний (5 шарів)" + панель іменованих пресетів
- **∞ Infinite Embrace** — косміч. альбомні пресети (IE Cosmic / Stellar / Orbital)
- **🇺🇦 Zifferblatt UA** — нові UA-пресети з сопілкою і хоровим обертоном
- **🎸 Інструментальний режим** — ховає блоки лірики і вокалу для instrumental треків
- **🎹 Нові жанри** — Instrumental (6 варіантів) та Infinite Embrace (4 варіанти)
- **🎤 Поле Artist Reference** — посилання на 30 артистів (пілюлі швидкого вибору)
- **🏷️ +54 нові теги** — продакшн, вокал, SFX, інструменти
- **📄 HTML-експорт переосмислено** — JetBrains Mono, синтаксична підсвітка, 3 таби стилю, блок UA-акцентів
- **🐛 Виправлено SyntaxError** — accent cells через `data-char` (без проблем з лапками)

---

## 🎛️ Як це працює — 4-кроковий візард

### Крок 1 — Інпут (Концепція)
- Назва пісні
- Концепція, настрій, ідея (AI розширить автоматично)
- Режим лірики: своя / AI пише з нуля / обидва варіанти
- Мова лірики: English / Українська / Білінгвальна / Spanish / **Français**
- Власна лірика (необов'язково — AI оформить у формат Suno з тегами)
- Рима: точна / баланс / зміст пріоритет
- Жанр та піджанр
- BPM (від → до, або пресет)
- Тональність
- Тип і стиль вокалу

### Крок 2 — Жанр і Структура
- AI-аналіз жанру: опис, темп, продакшн, вокальні особливості
- AI-рекомендації для вибраного стилю
- Структура пісні з drag-and-drop секціями
- Автоматичне призначення тегів по жанру
- AI-генерація тегів секцій (кнопка ✦ AI теги)

### Крок 3 — Теги
Вибір тегів з хмар по категоріях: настрій, інструменти, продакшн, вокал, SFX.
Також: **3-Layer Polymorphic Bass** — налаштування бас-структури (L1 sub-bass / L2 mid groove / L3 stab).

### Крок 4 — Генерація
- AI формує обидва промпти
- Лічильники знаків з кольоровим індикатором (зелений / жовтий / червоний)
- Кнопка Копіювати для кожного блоку
- Кнопки: Регенерувати / Уточнити
- **💾 Зберегти в бібліотеку** — зберігає пісню в бібліотеку
- **↓ Зберегти HTML** — завантажує автономний HTML-файл з обома промптами

---

## 📚 Бібліотека пісень

Натисніть кнопку **📚 Бібліотека** у шапці застосунку, щоб:
- Переглянути всі збережені пісні
- Завантажити промпти збереженої пісні назад у Step 4
- Зберегти окрему пісню як HTML-файл (кнопка **↓ HTML** у кожній картці)
- Видалити окрему пісню або очистити всю бібліотеку

---

## 🌐 Двомовний інтерфейс

У правому верхньому куті є перемикач **UA | EN** — натисніть щоб переключити мову інтерфейсу між:
- **UA** — українська (за замовчуванням)
- **EN** — English

Налаштування мови зберігається в `localStorage`.

---

## 🎵 Жанри та стилі

### House
| Варіант | Опис |
|---------|------|
| Vocal Melodic House | Вокальний мелодійний хаус |
| Vocal House / Nu Disco / Lo-Fi | Мікс вокального хаусу, ну-діско та ло-фай |
| Deep House / Lo-Fi / Late Night | Глибокий хаус з ло-фай атмосферою |
| Bass House | Бас-орієнтований хаус |
| Slap House | Slap House |

### Electronic
| Варіант | Опис |
|---------|------|
| EDM | Загальна електронна танцювальна музика |
| Deep House / Melodic Techno | Глибокий хаус з мелодійним техно |
| Dreamy Synthwave / Chamber Pop | Атмосферний синтвейв і камерний поп |
| New Wave | Нью-вейв |
| Acid Reggaeton × Electro-Pop | Кислотний регетон з електропопом |
| Melodic Reggaeton / Pop | Мелодійний регетон |

### Pop / Indie
| Варіант | Опис |
|---------|------|
| Indie-Pop / Alt Indie-Pop | Інді-поп та альтернативний інді-поп |
| Modern Pop | Сучасний поп |
| Female / Male Confessional Indie ✦ | Жіночий/чоловічий відвертий інді |

### Chill / Lo-Fi
| Варіант | Опис |
|---------|------|
| Chill / Lo-Fi | Спокійна ло-фай музика |
| Electro-Orchestral / Neo-Classical | Електронно-оркестровий / нео-класичний |

### Soul / Hip-Hop
| Варіант | Опис |
|---------|------|
| R&B / Soul | Ар-ен-бі та соул |
| Hip-Hop / Rap | Хіп-хоп та реп |
| Trap | Треп |
| Funk / Neo-Soul | Фанк та нео-соул |

### Jazz / Rock
| Варіант | Опис |
|---------|------|
| Jazz | Джаз |
| Rock | Рок |
| Metal | Метал |

### World / Ambient
| Варіант | Опис |
|---------|------|
| Ethno / Folk | Етно та фолк |
| City Pop / J-Pop | Сіті-поп та j-pop |
| Ambient | Ембієнт |
| Phonk | Фонк |

### ⟨Z⟩ Zifferblatt (стилізовані по країнах)
| Код | Опис |
|-----|------|
| FR ①②③ | French Touch, Nu-Disco Deep House, Deep Trip-hop House |
| ES ①②③ | Trip-hop House, Flamenco Electronic, Iberian Cinematic |
| DE ①②③④ | Trip-hop House, Berlin Dark House, Cabaret Electronic, Krautrock |
| IT ①②③④ | Trip-hop House, Italian Cinematic, Italo House Deep, Mediterranean Deep |

> Також підтримується ввід жанру вручну.

---

## ⏱️ BPM пресети

| BPM | Стиль |
|-----|-------|
| 70 | Slow Ballad |
| 80 | Soul |
| 85 | Lo-Fi / Jazz |
| 88 | Boom Bap |
| 90 | Hip-Hop |
| 92 | Reggaeton |
| 95 | R&B |
| 98 | Indie-Pop |
| 105 | Chill House |
| 108 | Trap |
| 110 | Deep House |
| 115 | Nu Disco |
| 118 | Vocal House |
| 120 | House |
| 124 | Tech House |
| 128 | EDM |
| 138 | DnB |
| 140 | Dubstep |
| 174 | Hardstyle |

---

## 🎭 Теги настрою

`romantic` `melancholic` `dark` `energetic` `atmospheric` `passionate` `warm` `playful` `ethereal` `bittersweet` `introspective` `hypnotic` `uplifting` `mysterious` `epic` `calm` `dreamy` `soulful` `haunting` `triumphant` `sensual` `nostalgic` `euphoric` `tender` `raw` `intimate` `futuristic` `cinematic` `tense` `lonely`

---

## 🎹 Інструменти

`piano` `saxophone` `acoustic guitar` `electric guitar` `strings` `synthesizer` `bass guitar` `drums` `brass` `choir` `Rhodes` `flute` `cello` `trumpet` `harp` `organ` `vibraphone` `accordion` `marimba` `sitar` `Moog synthesizer` `mellotron` `theremin` `Wurlitzer` `clavinet` `contrabass` `bongo drums` `pan flute` `duduk`

---

## 🎚️ Продакшн-теги

`analog` `lo-fi` `layered` `sidechain` `wide stereo` `minimal` `reverb heavy` `distorted` `warm mix` `punchy` `cinematic` `vintage` `crisp` `atmospheric` `progressive build` `trap production` `orchestral` `compressed` `dry vocal` `tape saturation` `frequency modulation` `glitch processing` `spatial audio` `lo-fi drums` `parallel compression` `vinyl mastering` `hard clipping`

---

## 🎤 Вокальні характеристики

`raspy` `breathy` `falsetto` `spoken word` `whispered` `vibrato` `gospel runs` `ad-libs` `harmonies` `baritone` `soprano` `soulful` `confessional` `autotune` `call-and-response` `powerhouse` `growls` `layered vocals` `intimate delivery` `scatting`

---

## ⚡ SFX та спецефекти

`vinyl crackle` `tape hiss` `terminal boot-up` `binary whoosh` `digital glitch` `vocal chops` `UI ping` `server hum` `modem hiss` `rain ambience` `reverse reverb` `sub rumble` `bass impact` `orchestral riser` `crash cymbal` `spring birdsong` `808 sub` `white noise sweep` `matrix rain` `hard drive pulse` `error alert FX` `keyboard typing` `door creak` `crowd cheering` `heartbeat pulse` `thunder crack` `wind howl` `tape rewind` `needle drop`

---

## 🏗️ Структури пісні по жанру

| Жанр | Структура |
|------|-----------|
| **House / EDM / Pop** | Intro → Hook → Verse → Pre-Chorus → Chorus → Verse 2 → Chorus 2 → Drop → Bridge → Chorus Finale → Outro |
| **R&B / Soul** | Intro → Hook 1 → Verse 1 → Pre-Chorus 1 → Chorus 1 → Hook 2 → Verse 2 → Chorus 2 → Bridge → Chorus Finale → Outro |
| **Hip-Hop / Trap / Rap** | Intro → Rap Verse → Hook 1 → Rap Verse → Hook 2 → Bridge → Hook 3 → Outro |
| **Jazz** | Intro → Hook 1 → Verse 1 → Solo Section → Hook 2 → Bridge → Outro |
| **Rock / Metal** | Intro → Verse 1 → Pre-Chorus 1 → Chorus 1 → Verse 2 → Chorus 2 → Bridge → Guitar Solo → Chorus Finale → Outro |
| **Indie / Confessional** | Intro → Verse 1 → Chorus 1 → Verse 2 → Chorus 2 → Bridge → Chorus Finale → Outro 1 → Outro 2 |
| **Folk / Ethno** | Intro → Verse 1 → Chorus 1 → Instrumental Transition → Verse 2 → Chorus 2 → Bridge → Chorus Finale → Outro |
| **Ambient** | Intro → Build-up 1 → Hook 1 → Verse 1 → Drop 1 → Chorus 1 → Bridge → Chorus Finale → Outro 1 → Outro 2 |

Структуру можна редагувати вручну: додавати, видаляти та перетягувати секції.

---

## 🔊 3-Layer Polymorphic Bass

Система налаштування бас-структури з трьома шарами:

| Шар | Роль | За замовчуванням |
|-----|------|-----------------|
| L1 | Sub-bass floor | `deep sub-bass floor, chest-rattling` |
| L2 | Mid groove | `mid punchy walking groove, melodic drive` |
| L3 | High stab | `high syncopated percussive stab, dynamic` |

Режими: **Повний (3 шари)** / **Помірний (2 шари)** / **Мінімальний** / **Без басів**

Для жанрів без домінантного басу (Ambient, Folk, Jazz) застосовується автоматичне попередження.

---

## 🤖 AI-інтеграція

- **Модель:** Claude Sonnet 4 (`claude-sonnet-4-20250514`) від Anthropic
- **API ключ:** вводиться вручну у верхній панелі, зберігається в `localStorage`
- **Що робить AI:**
  - Аналізує жанр і дає рекомендації
  - Генерує теги для секцій пісні
  - Пише лірику з нуля або доопрацьовує вашу
  - Формує Lyrics-Prompt і Style-Prompt

### Архітектура запитів

На **Netlify** запити йдуть через серверну функцію-проксі (вирішує CORS):

```
Browser → /.netlify/functions/proxy → api.anthropic.com/v1/messages
```

Локально (відкрити `index.html` у браузері) — прямий виклик:

```
Browser → api.anthropic.com/v1/messages
```

Перемикання відбувається автоматично залежно від домену.

---

## 💾 Сесії та зберігання

- **Зберегти сесію** 💾 — зберігає всі налаштування в `localStorage`
- **Завантажити сесію** 📂 — відновлює попередній стан
- **📚 Бібліотека** — постійне сховище готових промптів (localStorage + Netlify Storage)
- Автозбереження при введенні

---

## 🛠️ Технічний стек

- Чистий HTML / CSS / JavaScript — без фреймворків і бандлерів
- Шрифти: IBM Plex Mono + Outfit (Google Fonts)
- Netlify Serverless Functions (Node.js) — проксі для Anthropic API
- GitHub → Netlify автодеплой при кожному `git push`

### Структура репозиторію

```
lips-by-avii/
├── index.html                  # Весь застосунок (HTML + CSS + JS)
├── netlify.toml                # Конфігурація Netlify (publish dir, functions dir)
├── netlify/
│   └── functions/
│       └── proxy.js            # Serverless proxy → Anthropic API
├── .gitignore
├── README.md
└── LICENSE
```

---

## 📋 Журнал версій

| Версія | Що нового |
|--------|-----------|
| **v5.0.0** | 5-шаровий бас, Infinite Embrace, Zifferblatt UA, інструментальний режим, Artist Reference, +54 теги, HTML-експорт redesign |
| **v4.0.0** | Бібліотека промптів, HTML-експорт, двомовний UI (UA/EN), французька мова лірики, версія в шапці |
| **v3.5** | Виправлення аналізу жанру, покращення стабільності |
| **v3.0** | Проксі-архітектура Netlify, нові теги, вокальні пресети |
| **v2.0** | 4-кроковий візард, drag-and-drop структура пісні |
| **v1.0** | Базова генерація промптів |

---

*ᯓ𝄞LIPS⋆by⋆AVIIˎˊ˗ ⓒ 2026 — by @AVII (Vitaliy + Iryna + AI)*
