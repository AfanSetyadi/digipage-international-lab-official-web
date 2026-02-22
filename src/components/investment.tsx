const BENEFITS = [
  {
    title: "Akselerasi",
    desc: "Pendampingan intensif untuk pertumbuhan cepat",
    color: "green",
    icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
  },
  {
    title: "Kolaborasi",
    desc: "Ekosistem mitra strategis yang kuat",
    color: "purple",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
    offset: true,
  },
  {
    title: "Inovasi",
    desc: "Riset mendalam untuk solusi masa depan",
    color: "amber",
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
  },
  {
    title: "Ekspansi",
    desc: "Peluang pasar nasional & internasional",
    color: "cyan",
    icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9",
    offset: true,
  },
] as const;

const COLOR_MAP: Record<string, { bg: string; text: string }> = {
  green: { bg: "bg-green-50 dark:bg-green-500/10", text: "text-green-600 dark:text-green-400" },
  purple: { bg: "bg-purple-50 dark:bg-purple-500/10", text: "text-purple-600 dark:text-purple-400" },
  amber: { bg: "bg-amber-50 dark:bg-amber-500/10", text: "text-amber-600 dark:text-amber-400" },
  cyan: { bg: "bg-cyan-50 dark:bg-cyan-500/10", text: "text-cyan-600 dark:text-cyan-400" },
};

export function Investment() {
  return (
    <section id="investasi" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-brand-50 dark:from-brand-600/5 to-transparent" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              {BENEFITS.map((b) => {
                const colors = COLOR_MAP[b.color];
                return (
                  <div
                    key={b.title}
                    className={`p-6 rounded-2xl bg-white dark:bg-white/[0.03] border border-gray-100 dark:border-white/5 space-y-3 shadow-sm dark:shadow-none ${"offset" in b && b.offset ? "mt-8" : ""}`}
                  >
                    <div className={`w-10 h-10 rounded-lg ${colors.bg} flex items-center justify-center`}>
                      <svg className={`w-5 h-5 ${colors.text}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={b.icon} />
                      </svg>
                    </div>
                    <div className="text-gray-900 dark:text-white font-semibold">{b.title}</div>
                    <p className="text-gray-500 text-sm">{b.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="text-brand-600 dark:text-brand-400 text-sm font-semibold tracking-widest uppercase">
              Investasi & Kemitraan
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
              Investasi pada Projek Berpotensi Besar
            </h2>
            <p className="mt-6 text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
              Selain sebagai pusat riset, Digipage International Lab juga
              menginisiasi program investasi pada projek bisnis yang memiliki
              potensi besar di masa depan.
            </p>
            <p className="mt-4 text-gray-600 dark:text-gray-400 leading-relaxed">
              Melalui pendekatan kolaboratif dan dukungan strategis, kami
              berkomitmen membangun ekosistem inovasi yang berkelanjutan,
              mengakselerasi pertumbuhan projek, serta membuka peluang kemitraan
              dan pengembangan bisnis berbasis riset unggulan.
            </p>
            <a
              href="#kontak"
              className="mt-8 inline-flex items-center gap-2 text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300 font-medium transition-colors group"
            >
              Diskusikan Peluang Investasi
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
