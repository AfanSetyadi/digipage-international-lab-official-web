import { COMPANY_NAME } from "@/lib/constants";

export function Hero() {
  return (
    <section
      id="hero"
      className="gradient-hero relative min-h-screen flex items-center overflow-hidden"
    >
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-brand-600/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-400/5 rounded-full blur-3xl animate-float-delay" />
      <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-indigo-500/5 rounded-full blur-2xl animate-float-delay-2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-600/10 border border-brand-500/20 mb-8">
            <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse" />
            <span className="text-brand-600 dark:text-brand-300 text-sm font-medium">
              Research · Innovation · Investment
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight tracking-tight">
            Membangun Masa Depan
            <span className="bg-gradient-to-r from-brand-600 via-brand-500 to-cyan-500 dark:from-brand-400 dark:via-brand-300 dark:to-cyan-400 bg-clip-text text-transparent">
              {" "}Melalui Riset & Teknologi
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl">
            {COMPANY_NAME} menghadirkan solusi riset teknologi mutakhir di bidang
            software, data, dan AI — mengakselerasi transformasi bisnis digital
            lintas industri.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#layanan"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-600 hover:bg-brand-700 text-white font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-brand-600/25"
            >
              Jelajahi Layanan
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#tentang"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-gray-300 dark:border-white/10 hover:border-gray-400 dark:hover:border-white/25 text-gray-900 dark:text-white font-semibold rounded-xl transition-all hover:bg-gray-50 dark:hover:bg-white/5"
            >
              Pelajari Lebih Lanjut
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 dark:text-gray-500">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-gray-400 dark:from-gray-500 to-transparent" />
      </div>
    </section>
  );
}
