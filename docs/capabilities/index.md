# 7대 역량 개요 (AI Capabilities Model)

DORA *AI Capabilities Model*은 **AI 도입의 긍정 효과를 유의하게 증폭시키는 7개 역량**을 제시합니다. 이 섹션은 각 역량을 정의·실행·측정 관점에서 요약합니다.

## 전체 지도

```
              [5] 사용자 중심  ← 방향(북극성)
                     │
   [1] AI 접근 가능한 내부 데이터 ─┐
   [3] 건강한 데이터 생태계 ───────┤  입력·맥락
   [2] 명확하게 공유된 AI 입장 ────┘
                     │
              [4] 플랫폼 엔지니어링  ← 전달·안전
                     │
        [6] 버전 관리 · [7] 작은 배치  ← 안전망·규율
```

## 7개 역량

| # | 역량 | 한 줄 정의 | AI 관점 |
|---|---|---|---|
| 1 | [AI가 접근 가능한 내부 데이터](/capabilities/ai-accessible-internal-data) | 사내 코드·문서·지표를 AI에 안전하게 연결 | 범용 AI를 사내 전문가로 전환 |
| 2 | [명확하게 공유된 AI 입장](/capabilities/clear-and-communicated-ai-stance) | 무엇을·왜·어떻게 쓸지 명확히 소통 | 심리적 안전 → 실험 촉진 |
| 3 | [건강한 데이터 생태계](/capabilities/healthy-data-ecosystems) | 고품질·접근 가능·통합된 내부 데이터 | 증폭의 전제 조건 |
| 4 | [플랫폼 엔지니어링](/capabilities/platform-engineering) | 셀프서비스·골든패스 내부 플랫폼 | 하류 병목 제거 |
| 5 | [사용자 중심](/capabilities/user-centric-focus) | 사용자 니즈·경험·피드백을 우선 | 증폭의 방향타 |
| 6 | [버전 관리](/capabilities/version-control) | 재현성·추적성 확보 | AI의 안전망 |
| 7 | [작은 배치로 작업하기](/capabilities/working-in-small-batches) | 작고 잦은 변경 | 불안정성 대응 |

## DORA가 확인한 증폭 관계

- **플랫폼 품질 높음** → AI 도입의 조직 성과 효과가 강한 긍정. **낮음** → 효과 미미.
- **데이터 건강도 높음** → AI의 조직 성과 효과 유의하게 증폭.
- **명확한 AI 입장** → 개인 효과성·조직 성과 증폭, 마찰 감소.
- **버전 관리** → 개인 효과성·팀 성과에 대한 AI 효과 증폭.
- **작은 배치** → 제품 성과에 대한 AI 효과 증폭.

## 신규 역량 vs. 강화된 역량

| 구분 | 역량 |
|---|---|
| AI 시대에 **새로 부각** | 1, 2, 3, 4 |
| AI로 인해 **더 중요해짐** | 5, 6, 7 |

## 실행 원칙

1. **한 번에 하나.** "바다를 끓이지 말 것" — 고가치 유스케이스 하나에서 파일럿.
2. **측정 없이 개선 없음.** 각 역량의 설문 문항과 시스템 지표를 함께 본다.
3. **문화와 기술을 함께.** 데이터를 '제품'으로, 플랫폼을 '내부 제품'으로 다룬다.
4. **결과 중심.** 도입률이 아니라 성과로 성공을 정의한다.

::: info 출처
DORA [AI Capabilities Model](https://dora.dev/ai/capabilities-model/) 및 각 역량 문서([dora.dev/capabilities](https://dora.dev/capabilities/))를 요약한 것입니다. 원문 © Google LLC, [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).
:::
