import { STATS } from "@/lib/constants";

export function Stats() {
  return (
    <section className="relative border-y border-gray-200 dark:border-white/5 bg-gray-50 dark:bg-[#0d1325]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
                {stat.value}
              </div>
              <div className="mt-2 text-sm text-gray-500 font-medium tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
