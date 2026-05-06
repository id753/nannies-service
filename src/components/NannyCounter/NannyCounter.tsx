"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useCounter } from "../../hooks/Counter";

interface CounterProps {
  start?: number;
  to: number;
  duration?: number;
}

export const NannyCounter = ({
  start = 14621,
  to,
  duration = 4,
}: CounterProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (isInView) setHasStarted(true);
  }, [isInView]);

  const value = useCounter(start, hasStarted ? to : start, duration);

  return <motion.span ref={ref}>{value}</motion.span>;
};
