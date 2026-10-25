# 자유낙하 시간 계산기

정지 상태에서 일정 중력으로 낙하하는 시간 계산

- Plan ID: E061
- App: https://nanalab.kr/eng-free-fall-time/
- Repository: https://github.com/NaNaCompany/eng-free-fall-time
- Formula: `t = √(2h/g)`
- Output: 정지 출발 낙하시간 t

## Model

h≥0, g>0. 초기 수직속도 0, 일정한 중력, 공기저항 없는 점입자 모델이다. 큰 고도에서의 중력 변화·초기속도·부력은 제외한다.

Inputs are normalized to SI. Only one scalar is returned. Model conditions, finite numbers, physical boundaries, overflow and underflow are checked. External solver APIs and property databases are not used.

## Verification

Run `node --test tests/*.test.mjs` with Node.js 22 or later. Independent 70-digit Decimal example result: `2`. Source and license notices are in [SOURCES.md](SOURCES.md) and [LICENSE](LICENSE).

## Hosting

GitHub Pages uses `main` and `/`, with the NaNaCompany domain inherited. Google GTM, GA4, AdSense, Cloudflare analytics and the gray More Apps link are included. All code, descriptions and graphics are original.

## Static languages

Korean (existing root), English (`en/`), Spanish (`es/`), Simplified Chinese (`zh/`), Japanese (`ja/`) and German (`de/`). Each page has its own canonical URL, reciprocal hreflang, localized metadata, interface, validation messages and preview image. The language links work without JavaScript. Calculation code is shared and no runtime translation API is used.

Edit `localization/*.json` for text, `src/template.html` for the shared page, and run `python scripts/build-locales.py`. Run `python scripts/build-locales.py --check` and `npm test` before publishing. Decimal commas are accepted in Spanish and German; thousands separators are not supported.
