# DORA AI Guide (한국어·日本語)

[DORA (dora.dev)](https://dora.dev/ai/)의 AI 관련 리서치를 한국어와 일본어로 요약·정리한 비공식 학습 가이드입니다.

- 사이트: <https://roboco.io/dora-ai-guide/>
- 원문: <https://dora.dev/ai/>
- 스택: [VitePress](https://vitepress.dev/) (한국어 루트 + `/ja/` 일본어)

## 구성

| 섹션 | 내용 |
|---|---|
| 개요 | DORA AI 연구 지도 |
| 4대 리포트 | ROI of AI · AI Capabilities Model · State of AI-assisted SD 2025 · Impact of Gen AI 2024 |
| 7대 역량 | AI Capabilities Model의 7개 핵심 역량 |
| 인사이트 | 12편의 DORA AI 인사이트 요약 |
| 가이드 | 생성형 AI로 소프트웨어 딜리버리 혁신하기 |

## 개발

```bash
npm install
npm run docs:dev      # http://localhost:5173
npm run docs:build    # 산출물: docs/.vitepress/dist
npm run docs:preview
```

## 배포

GitHub Actions가 `main` 브랜치 push 시 `docs/.vitepress/dist`를 GitHub Pages로 배포합니다.
조직 GitHub Pages 도메인(`roboco.io`) 하위 경로로 서비스되므로 `base`는 `/dora-ai-guide/`입니다.
`dora-ai.roboco.io` 같은 전용 서브도메인을 쓰려면 `docs/public/CNAME`에 도메인을 추가하고 DNS CNAME을 설정한 뒤 `base`를 `/`로 수정하세요.

## 저작권 및 라이선스

- **원문 저작권**: DORA는 Google Cloud가 운영하는 프로그램이며, 사이트의 모든 콘텐츠는 별도 표기가 없는 한 **Google LLC**가 **CC BY 4.0**으로 라이선스합니다.
- 이 저장소의 한국어·일본어 요약은 원문을 **CC BY 4.0** 조건에 따라 2차적 저작물로 작성한 것입니다. 각 페이지에 원문 출처 링크와 저작권 고지를 명시했습니다.
- 원문을 임의로 수정·발췌·재구성한 요약이며, DORA·Google과 공식 제휴 관계가 없는 **비공식** 문서입니다. 정확한 내용은 반드시 원문을 확인하세요.
- 이 저장소의 사이트 구성·코드(설정, 스크립트)는 MIT 라이선스를 따릅니다.
