import Image from "next/image";
import { ACHIEVEMENTS, TIER_BADGE_CLASSES } from "@/lib/constants";

function LocationIcon() {
  return (
    <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

export function Achievements() {
  return (
    <div className="text-center max-w-2xl mx-auto mb-16">
      <span className="text-brand-600 dark:text-brand-400 text-sm font-semibold tracking-widest uppercase">
        Prestasi Founder
      </span>
      <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
        Pengakuan Internasional
      </h2>
      <p className="mt-4 text-gray-600 dark:text-gray-400 text-lg">
        Deretan pencapaian yang membuktikan komitmen kami terhadap inovasi dan
        keunggulan di kancah nasional maupun internasional.
      </p>
    </div>
  );
}

export function AchievementList() {
  return (
    <div className="grid md:grid-cols-2 gap-5">
      {ACHIEVEMENTS.map((a) => (
        <div
          key={a.title}
          className="group relative flex items-start gap-5 p-6 rounded-2xl bg-white dark:bg-white/[0.02] border border-gray-100 dark:border-white/5 hover:border-brand-500/20 transition-all duration-300 gradient-card shadow-sm dark:shadow-none"
        >
          <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gray-50 dark:bg-white/[0.03] border border-gray-200 dark:border-white/10 flex items-center justify-center overflow-hidden">
            <Image
              src={`https://flagcdn.com/w80/${a.flag}.png`}
              alt={a.location}
              width={32}
              height={24}
              className="w-8 h-6 object-cover rounded-sm"
            />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 mb-2">
              <span
                className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${TIER_BADGE_CLASSES[a.tier]}`}
              >
                {a.rank}
              </span>
            </div>
            <h3 className="text-gray-900 dark:text-white font-semibold leading-snug">
              {a.title}
            </h3>
            <div className="mt-2 flex items-center gap-1.5 text-gray-500 text-sm">
              <LocationIcon />
              {a.location}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
