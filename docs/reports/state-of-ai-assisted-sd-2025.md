# State of AI-assisted Software Development (2025)

> 발표: 2025년 9월 · 원문: <https://dora.dev/research/2025/dora-report/>

## 한 줄 요약

**AI의 주된 역할은 증폭기(amplifier)** 다. 즉 AI는 조직이 이미 가진 강점은 물론 약점까지도 확대한다. AI 투자의 최대 수익은 도구가 아니라 **그 아래 조직 시스템**에 대한 전략적 집중에서 나온다.

## 배경: "트릴로지"의 중심

2025년 DORA 리포트는 이전까지 쓰던 "Accelerate State of DevOps" 대신 **State of AI-assisted Software Development**라는 제목으로 발표되었습니다. 이 리포트는 2025년 3월에 나온 Impact of Gen AI 리포트를 잇는 트릴로지의 중심축으로, 2025 AI Capabilities Model의 모체가 됩니다.

## 연구 방법과 한계

이 리포트는 전 세계 기술 전문가 5,000명 가까이(nearly 5,000)의 설문 응답과 100시간이 넘는 정성 데이터(인터뷰 등)를 바탕으로 합니다(근거: [Google Cloud 발표 블로그](https://cloud.google.com/blog/products/ai-machine-learning/announcing-the-2025-dora-report)). 리포트 본문에 따르면 설문은 2025년 6월 13일부터 7월 21일까지 진행되었습니다. 설문은 응답자의 자기 보고에 기반하고 한 시점의 데이터를 분석하므로, 아래 수치는 AI 도입과 성과 사이의 **연관 관계**를 보여 줄 뿐 인과관계를 입증하지 않습니다. 표본의 지역·직군 구성과 통계 모델의 세부 사항은 이 요약에서 확인하지 못했으므로 원문 PDF를 참고하세요.

이 페이지에서는 데이터로 확인된 내용은 "관찰", 결과를 설명하려는 가설은 "설명 가능성", 조직에 대한 제안은 "권고"로 구분해 적습니다.

## 핵심 수치(관찰)

| 지표 | 값 |
|---|---|
| 직장에서 AI를 사용하는 기술 전문가 | **90%** |
| AI가 생산성을 높였다고 답한 비율 | **80% 이상** |
| AI 출력을 '조금' 신뢰하거나 '전혀' 신뢰하지 않는다 | **약 30%** |
| AI 도입↑ → 딜리버리 처리량 | **증가** |
| AI 도입↑ → 딜리버리 안정성 | **감소(불안정 증가)** |

## 핵심 명제

### 1. AI는 증폭기다
조직의 기존 역량 수준에 따라 AI 도입과 성과의 관계가 달라진다는 것이 이 리포트의 중심 해석입니다.

- 내부 플랫폼 품질이 높고, API·워크플로·테스트가 탄탄하면 AI는 강력한 협업자다.
- 도구가 파편화되고 데이터가 사일로화되며 인프라가 취약하면 AI는 **기술 부채를 더 빨리 생성**하게 돕는다.

### 2. 처리량과 안정성의 트레이드오프
AI 도입 수준이 높을수록 **처리량과 불안정성이 함께 높게 나타납니다**(인과가 아닌 연관 관계). 2024년 연구는 AI가 코드 생성 속도를 높이면서 배치가 커지고 리뷰·검증 부담이 커진다는 점을 설명 가능성으로 제시했습니다([Impact of Gen AI 요약](/reports/impact-of-gen-ai-2024)). DORA는 이 긴장에 대한 대응으로 [AI Capabilities Model](/reports/ai-capabilities-model)의 7대 역량을 권고합니다.

### 3. J-커브(생산성 침체)
새 기술을 도입하면 학습·프로세스 조정으로 **일시적으로 생산성이 떨어지는 구간**이 생깁니다. DORA는 이 침체를 실패로 판단하지 말고 계획에 반영해 전략적으로 실행하라고 권고합니다. J-커브는 이 리포트가 제시하는 해석 틀이며, 침체의 폭과 기간은 조직마다 다를 수 있습니다.

### 4. 4개에서 5개로 진화한 딜리버리 지표
DORA는 전통적 "4 keys"를 **5개 지표**로 확장했습니다.

DORA는 앞의 세 지표를 **처리량(throughput)**, 즉 변경이 얼마나 빠르게 흐르는지를 보는 지표로, 뒤의 두 지표를 **불안정성(instability)**, 즉 배포가 얼마나 자주 문제를 일으키는지를 보는 지표로 분류합니다(근거: [DORA 지표 가이드](https://dora.dev/guides/dora-metrics/), [DORA 지표 연혁](https://dora.dev/insights/dora-metrics-history/)).

1. 변경 리드 타임(Change lead time) — 처리량. 변경이 버전 관리에 커밋된 뒤 운영 환경에 배포되기까지 걸리는 시간.
2. 배포 빈도(Deployment frequency) — 처리량. 일정 기간의 배포 횟수 또는 배포 사이의 간격.
3. 실패 배포 복구 시간(Failed deployment recovery time) — 처리량. 즉시 개입이 필요한 실패 배포에서 복구하는 데 걸리는 시간.
4. 변경 실패율(Change fail rate) — 불안정성. 전체 배포 중 배포 직후 롤백이나 핫픽스 같은 즉시 개입이 필요했던 배포의 비율.
5. 배포 재작업률(Deployment rework rate) — 불안정성. 전체 배포 중 운영 장애 때문에 계획 없이 수행된 배포의 비율. *2024년 리포트에서 도입*

## 이 리포트가 남긴 것

- **측정은 결과 중심으로.** 활동량이 아니라 성과를 본다.
- **문화와 시스템이 기술보다 앞선다.** 심리적 안전, 학습 문화, 사용자 중심.
- **"AI 도입률"이 아니라 "AI 효과"를 목표로.** 도입은 필요조건이고, 효과는 시스템이 만든다.

## 함께 볼 자료

- [DORA AI Capabilities Model 리포트](/reports/ai-capabilities-model) — 이 리포트의 동반 가이드
- [AI 도입에서 효과적 SDLC 활용으로](/insights/balancing-ai-tensions) — 1,110명 엔지니어 정성 분석
- [7대 역량 개요](/capabilities/)

::: info 출처
이 글은 DORA의 [State of AI-assisted Software Development 2025](https://dora.dev/research/2025/dora-report/)를 요약한 것입니다. 원문 © Google LLC, [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).
:::
