# Changelog — ᯓ𝄞LIPS⋆by⋆AVIIˎˊ˗

All notable changes to this project are documented here.

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
