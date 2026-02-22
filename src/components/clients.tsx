import Image from "next/image";
import { CLIENTS } from "@/lib/constants";

export function Clients() {
  return (
    <section id="klien" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-brand-600 dark:text-brand-400 text-sm font-semibold tracking-widest uppercase">
            Klien & Mitra
          </span>
          <h3 className="mt-3 text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
            Dipercaya Berbagai Institusi
          </h3>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-5">
          {CLIENTS.map((client) => (
            <div
              key={client.name}
              className="group flex items-center justify-center p-5 rounded-2xl bg-white dark:bg-white border border-gray-100 dark:border-white/10 hover:border-brand-500/30 hover:shadow-lg hover:shadow-brand-600/10 transition-all duration-300 aspect-[3/2]"
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={100}
                height={56}
                className="max-h-14 max-w-[100px] object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                title={client.name}
              />
            </div>
          ))}

          <div className="group flex flex-col items-center justify-center p-5 rounded-2xl bg-brand-50 dark:bg-brand-600/10 border border-brand-200 dark:border-brand-500/20 hover:bg-brand-100 dark:hover:bg-brand-600/20 transition-all duration-300 aspect-[3/2]">
            <span className="text-2xl sm:text-3xl font-bold text-brand-600 dark:text-brand-400">
              30+
            </span>
            <span className="mt-1 text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-medium text-center leading-tight">
              Klien & Mitra
              <br />
              Lainnya
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
