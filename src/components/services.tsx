"use client";

import { motion } from "framer-motion";
import { SERVICES, ICON_PATHS } from "@/lib/constants";

const EASE = [0.22, 1, 0.36, 1] as const;
const VIEWPORT = { once: true, margin: "-80px" } as const;

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

function ServiceIcon({ icon }: { icon: string }) {
  const path = ICON_PATHS[icon];
  if (!path) return null;

  return (
    <svg className="w-6 h-6 text-brand-600 dark:text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={path} />
    </svg>
  );
}

export function Services() {
  return (
    <section id="layanan" className="relative py-24 lg:py-32 bg-gray-50/80 dark:bg-[#0d1325]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.6, ease: EASE }}
        >
          <span className="text-brand-600 dark:text-brand-400 text-sm font-semibold tracking-widest uppercase">
            Layanan Kami
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
            Solusi Teknologi Terintegrasi
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 text-lg">
            Kami menyediakan layanan end-to-end mulai dari riset, pengembangan,
            hingga investasi untuk mendukung pertumbuhan bisnis Anda.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {SERVICES.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="group relative p-8 rounded-2xl bg-white dark:bg-white/[0.02] border border-gray-100 dark:border-white/5 hover:border-brand-500/30 transition-all duration-300 gradient-card shadow-sm dark:shadow-none"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-50 dark:bg-brand-600/10 border border-brand-200 dark:border-brand-500/20 flex items-center justify-center mb-6 group-hover:bg-brand-100 dark:group-hover:bg-brand-600/20 transition-colors">
                <ServiceIcon icon={service.icon} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
