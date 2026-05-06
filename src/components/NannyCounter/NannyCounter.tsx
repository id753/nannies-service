"use client";

import { motion } from "framer-motion";
import { useCounter } from "../../hooks/Counter";
interface CounterProps {
  start?: number;
  to: number;
  duration?: number;
}
export const NannyCounter = ({ start = 0, to, duration = 4 }: CounterProps) => {
  const rounded = useCounter(start, to, duration);
  return <motion.span>{rounded}</motion.span>;
};
