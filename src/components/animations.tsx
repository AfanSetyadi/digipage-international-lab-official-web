"use client";

import { type ReactNode } from "react";
import { motion, type Variant } from "framer-motion";

const VIEWPORT_CONFIG = { once: true, margin: "-80px" } as const;
const DURATION = 0.6;
const EASE = [0.22, 1, 0.36, 1] as const;

type AnimationVariants = { hidden: Variant; visible: Variant };

const fadeUp: AnimationVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: DURATION, ease: EASE } },
};

const fadeDown: AnimationVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0, transition: { duration: DURATION, ease: EASE } },
};

const fadeLeft: AnimationVariants = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: EASE } },
};

const fadeRight: AnimationVariants = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: EASE } },
};

const scaleUp: AnimationVariants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: DURATION, ease: EASE } },
};

const VARIANT_MAP = {
  fadeUp,
  fadeDown,
  fadeLeft,
  fadeRight,
  scaleUp,
} as const;

type VariantName = keyof typeof VARIANT_MAP;

interface AnimateProps {
  children: ReactNode;
  variant?: VariantName;
  delay?: number;
  className?: string;
}

export function Animate({
  children,
  variant = "fadeUp",
  delay = 0,
  className,
}: AnimateProps) {
  const variants = VARIANT_MAP[variant];
  const withDelay: AnimationVariants = {
    hidden: variants.hidden,
    visible: {
      ...variants.visible,
      transition: {
        ...(variants.visible as Record<string, unknown>).transition as object,
        delay,
      },
    },
  };

  return (
    <motion.div
      variants={withDelay}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT_CONFIG}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface StaggerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  delay?: number;
}

export function StaggerContainer({
  children,
  className,
  staggerDelay = 0.1,
  delay = 0,
}: StaggerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT_CONFIG}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: staggerDelay, delayChildren: delay },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div variants={fadeUp} className={className}>
      {children}
    </motion.div>
  );
}
