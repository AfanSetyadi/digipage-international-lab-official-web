import { COMPANY_NAME, LEGAL_NAME } from "@/lib/constants";

function CheckIcon() {
  return (
    <svg className="w-5 h-5 text-brand-600 dark:text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );
}

function SparklesIcon() {
  return (
    <svg className="w-12 h-12 text-brand-600 dark:text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
      />
    </svg>
  );
}

const HIGHLIGHTS = [
  {
    title: "Berbasis Riset",
    desc: "Solusi yang didukung data dan penelitian mendalam",
  },
  {
    title: "Skala Global",
    desc: "Telah menjangkau project dan prestasi di lebih dari 5 negara",
  },
] as const;

export function About() {
  return (
    <section id="tentang" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-brand-600 dark:text-brand-400 text-sm font-semibold tracking-widest uppercase">
              Tentang Kami
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
              Pusat Riset &<br />Inovasi Teknologi
            </h2>
            <p className="mt-6 text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
              <strong className="text-gray-900 dark:text-gray-200">{COMPANY_NAME}</strong>{" "}
              ({LEGAL_NAME}) merupakan startup inovatif yang berfokus pada riset
              dan pengembangan bisnis mutakhir di berbagai sektor, dengan
              keunggulan utama pada penguasaan teknologi software, data, dan
              kecerdasan buatan (AI).
            </p>
            <p className="mt-4 text-gray-600 dark:text-gray-400 leading-relaxed">
              Didukung oleh jejaring relasi nasional dan internasional yang
              solid, kami menghadirkan solusi riset teknologi yang relevan
              terhadap tantangan global dan kebutuhan transformasi bisnis digital
              lintas industri.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-6">
              {HIGHLIGHTS.map((h) => (
                <div key={h.title} className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-brand-50 dark:bg-brand-600/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckIcon />
                  </div>
                  <div>
                    <div className="text-gray-900 dark:text-white font-medium">{h.title}</div>
                    <div className="text-gray-500 text-sm mt-1">{h.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-brand-100 via-brand-50 to-transparent dark:from-brand-600/20 dark:via-brand-800/10 dark:to-transparent border border-gray-200 dark:border-white/5 glow flex items-center justify-center">
              <div className="text-center p-8">
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-brand-100 dark:bg-brand-600/20 border border-brand-200 dark:border-brand-500/20 mb-6">
                  <SparklesIcon />
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  Software · Data · AI
                </div>
                <p className="mt-3 text-gray-500 dark:text-gray-400 text-sm max-w-xs mx-auto">
                  Tiga pilar utama yang menjadi fondasi setiap solusi dan inovasi kami
                </p>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[radial-gradient(circle,_rgba(51,120,255,0.15)_1px,_transparent_1px)] bg-[size:8px_8px]" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[radial-gradient(circle,_rgba(51,120,255,0.15)_1px,_transparent_1px)] bg-[size:8px_8px]" />
          </div>
        </div>
      </div>
    </section>
  );
}
