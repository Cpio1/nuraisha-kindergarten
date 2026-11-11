"use client";

import { motion, type HTMLMotionProps } from "framer-motion";

type Common = { delay?: number; y?: number; x?: number };

const anim = (delay: number, y: number, x: number) => ({
  initial: { opacity: 0, y, x },
  whileInView: { opacity: 1, y: 0, x: 0 },
  viewport: { once: true, margin: "0px 0px -12% 0px" },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
});

/** Плавное появление при прокрутке. */
export function Reveal({ delay = 0, y = 28, x = 0, children, ...rest }: HTMLMotionProps<"div"> & Common) {
  return (
    <motion.div {...anim(delay, y, x)} {...rest}>
      {children}
    </motion.div>
  );
}

/** То же самое для элементов списка (сохраняет корректную разметку ul > li). */
export function RevealItem({ delay = 0, y = 28, x = 0, children, ...rest }: HTMLMotionProps<"li"> & Common) {
  return (
    <motion.li {...anim(delay, y, x)} {...rest}>
      {children}
    </motion.li>
  );
}
