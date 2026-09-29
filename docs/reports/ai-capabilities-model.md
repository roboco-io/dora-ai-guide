# DORA AI Capabilities Model (2025)

> 발간: 2025년 12월(근거: [DORA 2025 Year in Review](https://dora.dev/insights/dora-2025-year-in-review/)). dora.dev 리포트 소개 페이지에 표시된 2025년 11월 25일은 발간일이 아니라 페이지의 최종 갱신일(Last updated)입니다. · 원문: <https://dora.dev/ai/capabilities-model/>

## 한 줄 요약

*State of AI-assisted Software Development 2025*의 동반 가이드로, **AI의 이득을 증폭시키는 7개 역량**과 각 역량의 실행 전략·시작 전술·진척 측정법을 제시합니다.

## 연구 방법과 한계

이 모델은 [State of AI-assisted Software Development 2025](/reports/state-of-ai-assisted-sd-2025)와 같은 2025년 DORA 연구(기술 전문가 약 5,000명 설문과 100시간 이상의 정성 데이터)를 바탕으로 한 동반 가이드입니다. 다만 dora.dev 소개 페이지에는 역량을 선별한 구체적인 통계 모델, 역량별 표본 크기, 효과 크기가 나와 있지 않으며, 이 요약에서도 리포트 PDF로 확인하지 못했습니다. 아래 "증폭한다"는 표현은 설문 데이터에서 역량 수준에 따라 AI 도입과 성과의 연관 관계가 달라진 것(관찰)을 뜻하며, 역량을 도입하면 같은 효과가 난다고 보장하는 것은 아닙니다. 각 역량 페이지의 실행 방법은 DORA의 권고입니다.

## 7대 역량

| # | 역량 | 핵심 |
|---|---|---|
| 1 | [AI가 접근 가능한 내부 데이터](/capabilities/ai-accessible-internal-data) | 코드·문서·지표를 AI에 안전하게 연결해 범용 도구를 '사내 전문가'로 바꾼다 |
| 2 | [명확하게 공유된 AI 입장](/capabilities/clear-and-communicated-ai-stance) | 모호함이 만드는 리스크를 제거하고 심리적 안전을 제공한다 |
| 3 | [건강한 데이터 생태계](/capabilities/healthy-data-ecosystems) | 고품질·접근 가능·통합된 데이터가 AI 효과를 증폭한다 |
| 4 | [플랫폼 엔지니어링](/capabilities/platform-engineering) | 하류 병목을 없애 AI의 속도를 시스템 성과로 전환한다 |
| 5 | [사용자 중심](/capabilities/user-centric-focus) | 증폭의 방향을 잡는 북극성. 없으면 더 빠르게 잘못된 곳으로 간다 |
| 6 | [버전 관리](/capabilities/version-control) | AI가 만든 비결정성에 대한 안전망. 프롬프트·에이전트 설정까지 버전 관리 |
| 7 | [작은 배치로 작업하기](/capabilities/working-in-small-batches) | 불안정성에 대한 핵심 대응. 속도를 가치로 바꾼다 |

## 왜 이 7개인가

DORA는 대규모 정량 연구에서 **AI 도입의 긍정적 효과를 통계적으로 유의하게 증폭시키는** 역량을 선별했습니다. *(편집자 해석)* 이 가이드는 역량 1-4를 AI 시대에 새로 부각된 역량으로, 역량 5-7을 기존 핵심 역량이 AI로 인해 **더 중요해진** 경우로 나눠 읽습니다. 이 분류는 원문에서 확인되지 않은 요약자의 해석이며, 예컨대 플랫폼 엔지니어링(4)은 2024 DORA 리포트에서도 이미 다뤄졌습니다.

특히 리포트는 다음 관계를 강조합니다(관찰된 조절 효과. 조절 효과란 한 요인의 수준에 따라 AI 도입과 성과 사이의 관계 강도가 달라지는 현상을 말합니다).

- **플랫폼 품질이 높을 때** AI 도입이 조직 성과에 강한 긍정 효과를 준다.
- **플랫폼 품질이 낮을 때** AI 도입의 조직 성과 효과는 거의 무시할 수준이다.
- **데이터 건강도가 높을 때** AI의 조직 성과 긍정 효과가 유의하게 증폭된다.
- **명확한 AI 입장**은 개인 효과성·조직 성과를 증폭하고, 마찰을 줄인다.
- **버전 관리**는 개인 효과성과 팀 성과에 대한 AI의 긍정 효과를 증폭한다.
- **작은 배치**는 제품 성과에 대한 AI의 긍정 효과를 증폭한다.

## 각 역량 문서의 구성

각 역량 페이지는 동일한 구조를 따릅니다.

1. 역량 정의와 AI 관점
2. **구현 방법**(단계별) 또는 실행 전술
3. 흔한 함정(Common pitfalls)과 완화책
4. 측정 방법(설문 + 시스템 지표)

## 읽는 법

- **빠르게 훑기**: [7대 역량 개요](/capabilities/)
- **하나씩 실행하기**: 각 역량 페이지의 "구현 방법" 절
- **진척 측정**: 각 역량의 "측정" 절에 있는 설문 문항과 시스템 지표

## 함께 볼 자료

- [State of AI-assisted Software Development 2025](/reports/state-of-ai-assisted-sd-2025)
- [토큰맥싱의 시대, 균형 찾기](/insights/tokenmaxxing) — 7대 역량을 대안으로 제시

::: info 출처
이 글은 DORA의 [AI Capabilities Model](https://dora.dev/ai/capabilities-model/)을 요약한 것입니다. 원문 © Google LLC, [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).
:::
