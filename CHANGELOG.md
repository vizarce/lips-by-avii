# Changelog — ᯓ𝄞LIPS⋆by⋆AVIIˎˊ˗

All notable changes to this project are documented here.

---

## [v5.5.3] — 2026-06-10

### 🧬 DNA Differentiation & Multi-Select Vocal
- **Vocal DNA**: тепер описує лише характеристики голосу артиста (тембр, манера співу) — без жанру/стилю
- **Sound DNA**: тепер лише текстура продакшну — без жанру і темпу артиста
- Нова кнопка **⊕ Комбінувати з 5-param** (`combineVocalDNA()`) — об'єднує базу з Vocal DNA зі специфікою обраних 5-параметрів
- 5-Parameter Vocal Builder: мульти-вибір до 2 опцій на групу
- AI lyrics: відновлено щільність 3-5 директив на tag-prompt (попередня версія була занадто розрідженою)
- AI style-prompt: явне правило — використовувати ЖАНР користувача, DNA лише для збагачення текстури
- Дует-вокал: обидва голоси описуються окремо, кожен зі своїм 5-параметровим профілем

---

## [v5.5.2] — 2026-06-10

### 🐛 Bug Fixes & Bass Budget
- Виправлено баг мета-відповідей у style-prompt (AI інколи ставив питання/пояснення замість промпту)
- `[Female Vocal]` / `[Male Vocal]` більше не дублюється в кожній секції — встановлюється один раз на початку
- **Bass Budget**: контекстна таблиця за типом секції (Drop = повні 5 шарів ОК, Verse = 1 простий шар, Build-up = послідовний re-entry тощо)

---

## [v5.5.1] — 2026-06-09

### 🐛 Bug Fix
- Виправлено TDZ-помилку (`vocalDesc5` використовувався до оголошення) — функцію переміщено перед `lR`

---

## [v5.5.0] — 2026-06-09

### 🎙️ Vocal-First Standard & New Production Tags
- AI style-prompt: вокал тепер ставиться ПЕРШИМ (перед жанром) — максимальна вага токенізатора
- AI lyrics: правило `()` = заспіваний/проговорений контент, `[]` = технічна директива (ніколи не співається)
- Гендер вокалу вказується один раз на пісню, далі — лише зміни подачі
- Chorus: мінімум 4 рядки (AI більше не скорочує приспіви)
- Лічильник тегів у полі Style-prompt (зелений 4-7 / жовтий 8-10 / червоний >10)
- **Extend Protocol** — підказка під кнопками збереження для розширення треків у Suno
- 14 нових продакшн-тегів: `swirling reverb`, `hazy reverb`, `tube-amp warmth`, `chest-rattling pulse`, `bass drives rhythm`, `sub heartbeat`, `808 sub floor`, `polished studio mix`, `vocal-forward mix`, `broadcast-ready`, `deep reverb tails`, `stadium reverb`, `dusty vinyl texture`, `white noise risers`

---

## [v5.4.1] — 2026-06-09

### 🗄️ Song Vault
- Кнопка **↓ JSON** на Кроці 4 (`exportCurrentSongJson()`) — експорт поточної пісні у `.json` без попереднього збереження у Vault

---

## [v5.4.0] — 2026-06-08

### 🎙️ 5-Parameter Vocal Builder
- Triple-Stack Builder (3 параметри) → **5-Parameter Builder**: Register + Texture + Style + Delivery + Effects
- 8 пресетів одним кліком: Bell-like Future House, Smoky Alto Lo-Fi, Breathy Bedroom Pop, Powerful Soul Belt, Raspy Indie Rock, Ethereal Cinematic, Warm Baritone Jazz, Dark Trip-Hop
- 40+ нових опцій вокалу у всіх 5 категоріях
- Новий артистичний стандарт style-prompt: описовий жанр + епоха, BPM з прикметником-настроєм, 5-параметровий вокал, наративна бас-прогресія
- **Bass Budget**: максимум 1-2 директиви по басу на секцію в lyrics-prompt; повна архітектура — у style-prompt
- `vocalDesc5()` — формує вокальний рядок нового стандарту для AI-контексту

---

## [v5.3.1] — 2026-06-08

### ☁️ Supabase
- Додано credentials проєкту Supabase (URL + publishable anon key) для синхронізації Song Vault

---

## [v5.3.0] — 2026-06-08

### 🗄️ Song Vault — JSON Export/Import & Supabase Sync
- Бібліотека перейменована на **Song Vault** з оновленим заголовком і кнопками 📂 Імпорт JSON / ☁️ Sync
- `buildSongJson()` — повна структурована JSON-схема v1.0 (meta, structure/sequence, prompts, versions)
- **↓ JSON** — експорт будь-якої пісні з Vault у `.json` файл
- Імпорт `.json` → модальне вікно з прев'ю (мета-дані, lyrics, style, пілюлі структури)
- Збереження імпортованого JSON у локальний Vault (`loadJsonIntoVault()`)
- `prefillFromJson()` — заповнює Кроки 1-4 з JSON і відкриває Крок 4 готовим до перегенерації
- `syncToSupabase()` — авто-upsert при збереженні в Vault (fire & forget)
- `syncVaultFromSupabase()` — підтягує пісні з Supabase у локальний Vault

---

## [v5.2.0] — 2026-06-06

### 🎤 Artist DNA System
- **Vocal DNA**: 32 artists across 5 tabs (Vocal/Soul/R&B/Pop/Indie/World) with full triple-stack descriptions
- **Sound DNA**: 32 artists across 5 tabs (Electronic/Hip-Hop/EDM/Cinematic/Rock) with BPM, genre and production formula per artist
- Optional BPM+genre auto-fill checkbox when applying Sound DNA
- Both DNA systems feed into AI generation as vocal/production references

### 🎛️ Triple-Stack Vocal Builder
- HookGenius methodology: Character + Delivery + Effects with Tier 1/2/3 indicators

### 🎼 Style Formula Builder
- 25 genre presets (Deep/Tech/Bass House, Future Bass, Dubstep, DnB, Trance, Hardstyle, Trap, Lo-Fi, Neo-Soul, Cinematic etc.)

### 🚫 Negative Prompting
- 47 tags across 3 groups (Vocal / Instruments / Production)

### 🏆 Tier-List AI Prompts
- TIER_RULES injected into all 7 AI functions — bans placebo tags `[Reverb:XX%]` `[Bass:XX%]` `[Stereo:Wide]`

### 📋 Expanded Content
- Structure tags: 60+ sections with descriptions and 5 grouped categories in dropdown
- Production tags: 90+ tags across 11 named sections with section headers in UI
- BPM presets: 19 → 40+ values with genre labels and grouped optgroups
- New EDM subgenres: Future Bass, Dubstep, Liquid DnB, Trance, Hardstyle, Big Room, Tech House, Minimal Techno
- Vocal Delivery metatags added to structure selector (26 tags)

---

## [v5.0.1] — 2026-06-06

### 🐛 Bug Fix
- Fixed `[Section]` tags not displaying in amber in HTML export — were being overwritten by second regex in `highlightLyrics()`

### 🎨 Color Enhancement
- tag-prompts in HTML export now have 4 semantic color categories:
  - 🟣 **violet** — bass layers (L1–L5, sub bass, polymorphic, 808 sub)
  - 🟢 **green** — instruments (piano, saxophone, choir, strings, sopilka…)
  - 🟡 **gold** — mood/atmosphere (romantic, ethereal, euphoric, cinematic…)
  - 🔵 **blue** — production/tech (sidechain, reverb, glitch, groove, bars…)
  - 🩵 **teal** — other tag-prompts (fallback)
- Legend in exported HTML updated with all 5 color categories

---

## [v5.0.0] — 2026-06-02

### 🔊 Bass Architecture
- 5-layer polymorphic bass (L1–L5) with dedicated "✦ Повний (5 шарів)" mode button
- New **Infinite Embrace** cosmic album presets: IE Cosmic, IE Stellar, IE Orbital (all 5-layer)
- New **Zifferblatt UA** presets: (Z) UA① and (Z) UA② with sopilka + choir overtone layers
- Named bass preset pills panel for instant bass preset switching

### 🎹 New Content
- **Instrumental genre group**: Cinematic Instrumental, Ambient Instrumental, Electronic Instrumental, Jazz Instrumental, Orchestral, Lo-Fi Instrumental
- **Infinite Embrace genre group**: 4 cosmic album variants
- **Artist Reference field** with 30 quick-pick artist pills (Massive Attack, Daft Punk, Bonobo, Portishead, etc.)
- **Instrumental mode** in lyric-mode select — hides lyrics textarea and vocal block

### 🏷️ Expanded Tags (+54 total)
- **Production (+12)**: spectral layering, cosmic production, breathing sidechain, motorik groove, granular synthesis, harmonic saturation, tape echo, shimmer reverb, stereo width, polyrhythmic, drone texture, frequency shift
- **Vocal (+14)**: mezzo-soprano, lyric soprano, bel canto, Ukrainian folk vocal, cosmic vocal, spoken poetry, vocal pad, ethereal whisper, throat singing, overtone singing, modal voice, chest voice, head voice, glottal texture
- **SFX (+16)**: cosmic breath, stellar pulse, clock tick SFX, sopilka breath, tik-tak vocal chop, nebula sweep, church bells, ocean waves, forest ambience, vinyl warmup, crowd murmur, bass impact bloom, harmonic overtone, quantum glitch, gravitational wave, clock tick SFX
- **Instruments (+12)**: sopilka, bandura, cajon, pad synth, arp synth, cosmic synth, tabla, shakuhachi, bouzouki, hammered dulcimer, jaw harp, glass harmonica

### 📄 HTML Export Redesign
- Full Zifferblatt visual style with JetBrains Mono dark theme
- Syntax highlighting in lyrics block: `[Section]` → amber bold, `[tag-prompt]` → teal italic
- 3 style-prompt tabs (supports `|||` separator for variant switching)
- Ukrainian accent block with one-click copy per character (data-char approach)
- Char counters for lyrics and style prompts
- `lang` field saved in library entries

### 🐛 Bug Fix
- Fixed SyntaxError in exported HTML accent cells — migrated from inline `copyChar('value')` to `data-char` attribute to avoid nested quote parsing errors

---

## [v4.0.0] — 2026-05-XX

### New Features
- **📚 Song Library** — save, browse, and load prompt entries (localStorage + Netlify Storage)
- **↓ HTML Export** — download a standalone HTML file with both prompts from Step 4 or Library
- **🌐 Bilingual UI (UA/EN)** — toggle in header; ~80 translated strings covering all labels, buttons, card titles, placeholders
- **🇫🇷 French lyrics language** — added `Français` option to lyrics language selector
- **v4.0.0 version badge** in header next to brand name

### Technical
- Comprehensive I18N object with `_t(key)` helper for nested key resolution
- `data-i18n`, `data-i18n-prefix`, `data-i18n-ph` attributes on translatable elements
- `exportAsHtml()` function with standalone dark-theme HTML template
- UI language persisted to `localStorage`

---

## [v3.5] — 2026-04-XX

- Fixed genre analysis AI call
- New v3.5 improvements to prompt generation
- Expanded list of style tags

---

## [v3.0] — 2026-03-XX

- Netlify serverless proxy architecture for CORS-free API calls
- New tag lists added
- Fixed style-description fetching
- Vocal presets

---

## [v2.0] — 2026-02-XX

- 4-step wizard UI
- Drag-and-drop song structure editor
- AI genre analysis (Step 2)
- 3-Layer Polymorphic Bass system

---

## [v1.0] — 2026-01-XX

- Initial release
- Basic lyrics + style prompt generation via Claude Sonnet 4
- Single-file HTML architecture
