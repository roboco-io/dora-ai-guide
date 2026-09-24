import { defineConfig, type DefaultTheme, type HeadConfig } from "vitepress";

// ── 페이지 슬러그 (ko/ja 공통) ──────────────────────────────────────────────
const reportSlugs = [
  "roi-of-ai",
  "ai-capabilities-model",
  "state-of-ai-assisted-sd-2025",
  "impact-of-gen-ai-2024",
];
const capabilitySlugs = [
  "ai-accessible-internal-data",
  "clear-and-communicated-ai-stance",
  "healthy-data-ecosystems",
  "platform-engineering",
  "user-centric-focus",
  "version-control",
  "working-in-small-batches",
];
const insightSlugs = [
  "tokenmaxxing",
  "balancing-ai-tensions",
  "ai-dependency",
  "ai-as-a-tutor",
  "builder-intent",
  "measurement-frameworks",
  "concerns-beyond-accuracy",
  "adopting-gen-ai",
  "value-of-development-work",
  "trust-in-ai",
  "customization-ide",
  "year-in-review-2025",
];

interface Labels {
  overview: string;
  reports: string;
  capabilities: string;
  insights: string;
  guide: string;
  home: string;
  reportsIndex: string;
  capabilitiesIndex: string;
  insightsIndex: string;
  innovate: string;
  license: string;
  reportTitles: string[];
  capabilityTitles: string[];
  insightTitles: string[];
  nav: DefaultTheme.NavItem[];
  outline: string;
  footerMsg: string;
  footerCopy: string;
}

function makeSidebar(base: string, L: Labels): DefaultTheme.SidebarItem[] {
  const link = (p: string) => (base ? `${base}${p}` : p || "/");
  return [
    {
      text: L.overview,
      items: [
        { text: L.home, link: link("/") },
        { text: L.reportsIndex, link: link("/reports/") },
      ],
    },
    {
      text: L.reports,
      items: reportSlugs.map((s, i) => ({
        text: L.reportTitles[i],
        link: link(`/reports/${s}`),
      })),
    },
    {
      text: L.capabilities,
      items: [
        { text: L.capabilitiesIndex, link: link("/capabilities/") },
        ...capabilitySlugs.map((s, i) => ({
          text: L.capabilityTitles[i],
          link: link(`/capabilities/${s}`),
        })),
      ],
    },
    {
      text: L.insights,
      items: [
        { text: L.insightsIndex, link: link("/insights/") },
        ...insightSlugs.map((s, i) => ({
          text: L.insightTitles[i],
          link: link(`/insights/${s}`),
        })),
      ],
    },
    {
      text: L.guide,
      items: [
        { text: L.innovate, link: link("/guide/innovate-with-gen-ai") },
        { text: L.license, link: link("/about") },
      ],
    },
  ];
}

const koLabels: Labels = {
  overview: "개요",
  reports: "4대 리포트",
  capabilities: "7대 역량 (AI Capabilities Model)",
  insights: "인사이트",
  guide: "가이드 · 고지",
  home: "DORA AI 연구 지도",
  reportsIndex: "리포트 총람",
  capabilitiesIndex: "7대 역량 개요",
  insightsIndex: "인사이트 한눈에 보기",
  innovate: "생성형 AI로 혁신하기",
  license: "출처와 라이선스",
  reportTitles: [
    "ROI of AI-assisted Software Development",
    "AI Capabilities Model",
    "State of AI-assisted Software Development 2025",
    "Impact of Generative AI 2024",
  ],
  capabilityTitles: [
    "1. AI가 접근 가능한 내부 데이터",
    "2. 명확하게 공유된 AI 입장",
    "3. 건강한 데이터 생태계",
    "4. 플랫폼 엔지니어링",
    "5. 사용자 중심",
    "6. 버전 관리",
    "7. 작은 배치로 작업하기",
  ],
  insightTitles: [
    "토큰맥싱의 시대, 균형 찾기",
    "AI 도입에서 효과적 SDLC 활용으로",
    "AI 의존성 관리: 학생들의 가드레일",
    "교사로서의 AI",
    "AI 시대의 빌더 의도",
    "조직 목표에 맞는 측정 프레임워크",
    "AI 출력 정확성 너머의 우려",
    "개발자의 생성형 AI 도입: 4가지 전략",
    "생성형 AI가 개발 업무의 가치에 미치는 영향",
    "생성형 AI에 대한 개발자의 신뢰 형성",
    "커스터마이징이 개발자 몰입을 돕는 방법",
    "DORA 2025: 한 해 돌아보기",
  ],
  nav: [
    { text: "개요", link: "/" },
    { text: "리포트", link: "/reports/" },
    { text: "7대 역량", link: "/capabilities/" },
    { text: "인사이트", link: "/insights/" },
    { text: "원문(dora.dev)", link: "https://dora.dev/ai/" },
  ],
  outline: "이 페이지",
  footerMsg:
    'DORA의 AI 리서치(<a href="https://dora.dev/ai/">dora.dev/ai</a>)를 한국어로 요약한 비공식 가이드입니다. 원문은 CC BY 4.0.',
  footerCopy: "© 2026 ROBOCO · 원문 © Google LLC (CC BY 4.0)",
};

const jaLabels: Labels = {
  overview: "概要",
  reports: "4大レポート",
  capabilities: "7つのケイパビリティ (AI Capabilities Model)",
  insights: "インサイト",
  guide: "ガイド · ライセンス",
  home: "DORA AI リサーチマップ",
  reportsIndex: "レポート一覧",
  capabilitiesIndex: "7つのケイパビリティ概要",
  insightsIndex: "インサイト一覧",
  innovate: "生成AIでソフトウェアデリバリーを革新する",
  license: "出典とライセンス",
  reportTitles: [
    "ROI of AI-assisted Software Development",
    "AI Capabilities Model",
    "State of AI-assisted Software Development 2025",
    "Impact of Generative AI 2024",
  ],
  capabilityTitles: [
    "1. AIがアクセスできる社内データ",
    "2. 明確で共有されたAIスタンス",
    "3. 健全なデータエコシステム",
    "4. プラットフォームエンジニアリング",
    "5. ユーザー中心",
    "6. バージョン管理",
    "7. 小さなバッチで作業する",
  ],
  insightTitles: [
    "トークンマキシング時代のバランス",
    "AI導入から効果的なSDLC活用へ",
    "AI依存のマネジメント: 学生たちのガードレール",
    "家庭教師としてのAI",
    "AI時代のビルダーインテント",
    "組織目標に合った測定フレームワーク",
    "AI出力の正確性を超えた懸念",
    "開発者の生成AI導入: 4つの実践的戦略",
    "生成AIが開発作業の価値に与える影響",
    "生成AIに対する開発者の信頼の育み方",
    "カスタマイズが開発者のエンゲージメントを支える",
    "DORA 2025: 1年の振り返り",
  ],
  nav: [
    { text: "概要", link: "/ja/" },
    { text: "レポート", link: "/ja/reports/" },
    { text: "7つのケイパビリティ", link: "/ja/capabilities/" },
    { text: "インサイト", link: "/ja/insights/" },
    { text: "原文(dora.dev)", link: "https://dora.dev/ai/" },
  ],
  outline: "このページ",
  footerMsg:
    'DORAのAIリサーチ(<a href="https://dora.dev/ai/">dora.dev/ai</a>)を日本語で要約した非公式ガイドです。原文はCC BY 4.0。',
  footerCopy: "© 2026 ROBOCO · 原文 © Google LLC (CC BY 4.0)",
};

const SITE_URL = "https://roboco.io/dora-ai-guide/";

function ogHead(o: {
  locale: string;
  siteName: string;
  image: string;
  alt: string;
  title: string;
  description: string;
}): HeadConfig[] {
  return [
    ["meta", { property: "og:locale", content: o.locale }],
    ["meta", { property: "og:site_name", content: o.siteName }],
    ["meta", { property: "og:image", content: SITE_URL + o.image }],
    ["meta", { property: "og:image:width", content: "1200" }],
    ["meta", { property: "og:image:height", content: "630" }],
    ["meta", { property: "og:image:alt", content: o.alt }],
    ["meta", { property: "og:title", content: o.title }],
    ["meta", { property: "og:description", content: o.description }],
    ["meta", { name: "twitter:card", content: "summary_large_image" }],
    ["meta", { name: "twitter:image", content: SITE_URL + o.image }],
    ["meta", { name: "twitter:title", content: o.title }],
    ["meta", { name: "twitter:description", content: o.description }],
  ];
}

export default defineConfig({
  base: "/dora-ai-guide/",
  title: "DORA AI Guide",
  description:
    "DORA의 AI 리서치를 한국어·일본어로 요약한 비공식 학습 가이드 — 한국어 / 日本語",
  head: [
    ["link", { rel: "icon", type: "image/svg+xml", href: "/dora-ai-guide/logo.svg" }],
    ["meta", { property: "og:type", content: "website" }],
  ],
  cleanUrls: true,
  lastUpdated: true,
  markdown: {
    theme: { light: "github-light", dark: "github-dark" },
  },
  themeConfig: {
    logo: "/logo.svg",
    socialLinks: [
      { icon: "github", link: "https://github.com/roboco-io/dora-ai-guide" },
    ],
    search: { provider: "local" },
    docFooter: { prev: "이전", next: "다음" },
  },
  locales: {
    root: {
      label: "한국어",
      lang: "ko-KR",
      title: "DORA AI Guide (비공식)",
      description:
        "DORA의 AI 리서치를 한국어로 요약한 비공식 가이드. 원문은 CC BY 4.0.",
      head: ogHead({
        locale: "ko_KR",
        siteName: "DORA AI Guide (비공식)",
        image: "og.png",
        alt: "DORA AI Guide (비공식) — AI는 증폭기다",
        title: "DORA AI Guide (비공식) — AI는 증폭기다",
        description:
          "DORA의 AI 리포트·7대 역량·인사이트를 한국어로 요약한 비공식 가이드. 원문 CC BY 4.0.",
      }),
      themeConfig: {
        nav: koLabels.nav,
        sidebar: makeSidebar("", koLabels),
        outline: { label: koLabels.outline, level: [2, 3] },
        lastUpdated: { text: "최종 수정" },
        docFooter: { prev: "이전", next: "다음" },
        footer: {
          message: koLabels.footerMsg,
          copyright: koLabels.footerCopy,
        },
      },
    },
    ja: {
      label: "日本語",
      lang: "ja",
      title: "DORA AI Guide（非公式）",
      description:
        "DORAのAIリサーチを日本語で要約した非公式ガイド。原文はCC BY 4.0。",
      head: ogHead({
        locale: "ja_JP",
        siteName: "DORA AI Guide（非公式）",
        image: "og.ja.png",
        alt: "DORA AI Guide（非公式） — AIは増幅器である",
        title: "DORA AI Guide（非公式） — AIは増幅器である",
        description:
          "DORAのAIレポート・7つのケイパビリティ・インサイトを日本語で要約した非公式ガイド。原文はCC BY 4.0。",
      }),
      themeConfig: {
        nav: jaLabels.nav,
        sidebar: makeSidebar("/ja", jaLabels),
        outline: { label: jaLabels.outline, level: [2, 3] },
        lastUpdated: { text: "最終更新" },
        docFooter: { prev: "前へ", next: "次へ" },
        footer: {
          message: jaLabels.footerMsg,
          copyright: jaLabels.footerCopy,
        },
      },
    },
  },
});
