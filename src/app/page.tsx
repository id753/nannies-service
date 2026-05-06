import css from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import { ArrowIcon, CheckIcon } from "@/src/components/Icons/Icons";
import HeroSection from "../components/HeroSection/HeroSection";
import { useCounter } from "../hooks/Counter";
import { motion } from "framer-motion";
import { NannyCounter } from "../components/NannyCounter/NannyCounter";

export default function Home() {
  return (
    <section className={css.hero}>
      <div className={css.leftSide}>
        <div className={css.container}>
          <div className={css.content}>
            <h1 className={css.title}>Make Life Easier for the Family:</h1>
            <p className={css.text}>
              Find Babysitters Online for All Occasions
            </p>

            <Link href="/nannies" className={css.button}>
              Get started
              <span className={css.arrow}>
                <ArrowIcon />
              </span>
            </Link>
          </div>
        </div>
      </div>

      <HeroSection className={css.rightSide}>
        <div className={css.statsBadge}>
          <div className={css.checkIcon}>
            <CheckIcon />
          </div>
          <div>
            <p className={css.statsLabel}>Experienced nannies</p>
            <p className={css.statsCount}>
              <NannyCounter start={14621} to={15000} />+
            </p>
          </div>
        </div>
      </HeroSection>
    </section>
  );
}
