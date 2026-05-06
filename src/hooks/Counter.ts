"use client";

import { useEffect } from "react";
import { animate, useMotionValue, useTransform } from "framer-motion";

export const useCounter = (start: number, to: number, duration: number = 1) => {
  const count = useMotionValue(start);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(count, to, {
      duration: duration,
      ease: [0.22, 1, 0.36, 1],
    });

    return () => controls.stop();
  }, [count, to, duration]);

  return rounded;
};
