export const COMPANY_NAME = "Digipage International Lab";
export const LEGAL_NAME = "PT Digital Landing Teknologi";

export const EMAIL = "digitallandingteknologi@gmail.com";
export const WHATSAPP_URL = "https://wa.me/6282244731648";
export const LINKEDIN_URL =
  "https://www.linkedin.com/company/digipage-pt-digital-landing-teknologi";
export const DEALLS_URL =
  "https://dealls.com/karir/pt-digital-landing-teknologi";

export interface Service {
  icon: string;
  title: string;
  desc: string;
}

export const SERVICES: Service[] = [
  {
    icon: "software",
    title: "Software Engineering",
    desc: "Pengembangan solusi perangkat lunak modern yang skalabel, aman, dan dirancang untuk mendukung transformasi digital bisnis Anda.",
  },
  {
    icon: "data",
    title: "Data Science & Analytics",
    desc: "Mengubah data mentah menjadi insight strategis melalui analisis mendalam, visualisasi, dan pemodelan prediktif berbasis data.",
  },
  {
    icon: "ai",
    title: "Artificial Intelligence",
    desc: "Implementasi kecerdasan buatan mutakhir mulai dari machine learning, NLP, hingga computer vision untuk solusi bisnis cerdas.",
  },
  {
    icon: "research",
    title: "Riset & Inovasi",
    desc: "Pusat riset teknologi yang menghasilkan solusi inovatif dan relevan terhadap tantangan global dan kebutuhan industri.",
  },
  {
    icon: "invest",
    title: "Investasi & Inkubasi",
    desc: "Program investasi strategis pada projek bisnis berpotensi besar, dengan pendampingan dan akselerasi pertumbuhan.",
  },
  {
    icon: "network",
    title: "Kemitraan Global",
    desc: "Jejaring relasi nasional dan internasional yang membuka peluang kolaborasi dan pengembangan bisnis lintas batas.",
  },
];

export interface Stat {
  value: string;
  label: string;
}

export const STATS: Stat[] = [
  { value: "25+", label: "Projek Riset" },
  { value: "30+", label: "Klien & Mitra Bisnis" },
  { value: "5+", label: "Negara Terjangkau" },
  { value: "99%", label: "Kepuasan Klien" },
];

export type AchievementTier = "gold" | "silver" | "bronze" | "finalist";

export interface Achievement {
  rank: string;
  title: string;
  location: string;
  tier: AchievementTier;
  flag: string;
}

export const ACHIEVEMENTS: Achievement[] = [
  {
    rank: "Juara I",
    title: "World Invention and Innovation Forum 2018",
    location: "Foshan, China",
    tier: "gold",
    flag: "cn",
  },
  {
    rank: "Juara I",
    title: "Indonesian Hospital Association Award 2025",
    location: "Jakarta, Indonesia",
    tier: "gold",
    flag: "id",
  },
  {
    rank: "Juara I",
    title: "Sidoarjo Innovation Award 2025",
    location: "Sidoarjo, Indonesia",
    tier: "gold",
    flag: "id",
  },
  {
    rank: "Juara II",
    title: "Korea International Women's Invention Exposition 2025",
    location: "KINTEX, Korea Selatan",
    tier: "silver",
    flag: "kr",
  },
  {
    rank: "Juara II",
    title: "International Conference of Art and Design 2018",
    location: "Langkawi, Malaysia",
    tier: "silver",
    flag: "my",
  },
  {
    rank: "Juara III",
    title: "National Startup Competition 2019",
    location: "Surabaya, Indonesia",
    tier: "bronze",
    flag: "id",
  },
  {
    rank: "Finalis",
    title: "Global Competition on Systematic Innovation 2019 (GCSI)",
    location: "Liverpool, UK",
    tier: "finalist",
    flag: "gb",
  },
  {
    rank: "Finalis",
    title: "Poster International Health Conference 2019",
    location: "Mahidol University, Thailand",
    tier: "finalist",
    flag: "th",
  },
];

export const TIER_BADGE_CLASSES: Record<AchievementTier, string> = {
  gold: "bg-yellow-500/20 text-yellow-600 dark:text-yellow-300 border-yellow-500/30",
  silver:
    "bg-slate-400/20 text-slate-600 dark:text-slate-300 border-slate-400/30",
  bronze:
    "bg-amber-600/20 text-amber-700 dark:text-amber-400 border-amber-600/30",
  finalist:
    "bg-brand-600/20 text-brand-700 dark:text-brand-300 border-brand-500/30",
};

export interface Client {
  name: string;
  logo: string;
}

export const CLIENTS: Client[] = [
  { name: "Universitas Negeri Malang", logo: "/images/clients/UM.jpeg" },
  { name: "RSSA", logo: "/images/clients/RSSA.png" },
  { name: "PLN", logo: "/images/clients/PLN.png" },
  { name: "Universitas Brawijaya", logo: "/images/clients/UB.png" },
  { name: "Nafa Shrimp", logo: "/images/clients/Nafa Shrimp.png" },
  { name: "Hasfarm Holdings", logo: "/images/clients/Hasfarm.png" },
  { name: "Telkom Indonesia", logo: "/images/clients/Telkom.png" },
  { name: "Universitas Indonesia", logo: "/images/clients/UI.png" },
  { name: "Universitas Airlangga", logo: "/images/clients/Unair.png" },
];

export interface GalleryImage {
  src: string;
  alt: string;
}

export const GALLERY_IMAGES: GalleryImage[] = [
  { src: "/images/gallery/Activity-1.jpg", alt: "Dokumentasi Aktivitas Internasional 1" },
  { src: "/images/gallery/Activity-3.jpg", alt: "Dokumentasi Aktivitas Internasional 3" },
  { src: "/images/gallery/Activity-2.jpg", alt: "Dokumentasi Aktivitas Internasional 2" },
  { src: "/images/gallery/Activity-5.jpg", alt: "Dokumentasi Aktivitas Internasional 5" },
  { src: "/images/gallery/Activity-4.jpg", alt: "Dokumentasi Aktivitas Internasional 4" },
  { src: "/images/gallery/IMG_8977.JPG", alt: "Dokumentasi Prestasi Internasional 1" },
  { src: "/images/gallery/IMG_8966.JPG", alt: "Dokumentasi Prestasi Internasional 2" },
  { src: "/images/gallery/IMG_7804.JPG", alt: "Dokumentasi Prestasi Internasional 3" },
  { src: "/images/gallery/IMG_0034.JPG", alt: "Dokumentasi Prestasi Internasional 4" },
  { src: "/images/gallery/IMG_0036.JPG", alt: "Dokumentasi Prestasi Internasional 5" },
  { src: "/images/gallery/IMG_6275.JPG", alt: "Dokumentasi Prestasi Internasional 6" },
  { src: "/images/gallery/IMG_6272.JPG", alt: "Dokumentasi Prestasi Internasional 7" },
];

export const ICON_PATHS: Record<string, string> = {
  software:
    "M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5",
  data: "M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605",
  ai: "M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z",
  research:
    "M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19 14.5M14.25 3.104c.251.023.501.05.75.082M19 14.5l-1.299 4.887a1.5 1.5 0 01-1.45 1.113H7.749a1.5 1.5 0 01-1.45-1.113L5 14.5m14 0H5",
  invest:
    "M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941",
  network:
    "M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418",
};
