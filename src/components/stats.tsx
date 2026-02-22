"use client";

import { useRef } from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import { STATS } from "@/lib/constants";

function AnimatedNumber({ value, suffix = "" }: { value: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const numericPart = parseInt(value.replace(/[^0-9]/g, ""), 10);
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => Math.round(latest));

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(motionValue, numericPart, {
      duration: 1.5,
      ease: [0.22, 1, 0.36, 1],
    });
    return controls.stop;
  }, [isInView, motionValue, numericPart]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = `${latest}${suffix}`;
      }
    });
    return unsubscribe;
  }, [rounded, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

function parseStat(value: string): { num: string; suffix: string } {
  const match = value.match(/^(\d+)(.*)$/);
  if (!match) return { num: value, suffix: "" };
  return { num: match[1], suffix: match[2] };
}

export function Stats() {
  return (
    <section className="relative border-y border-gray-200 dark:border-white/5 bg-gray-50 dark:bg-[#0d1325]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
        >
          {STATS.map((stat) => {
            const { suffix } = parseStat(stat.value);
            return (
              <motion.div
                key={stat.label}
                className="text-center"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
                }}
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
                  <AnimatedNumber value={stat.value} suffix={suffix} />
                </div>
                <div className="mt-2 text-sm text-gray-500 font-medium tracking-wide">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
