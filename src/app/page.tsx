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
            <h1 className={css.title}>Trusted Care. Happy Kids.</h1>
            <h2 className={css.subTitle}>
              <strong>Manny</strong> — a fusion of “male” and “nanny” —
              introduces a fresh standard of dependable childcare and active
              mentorship.
            </h2>
            <p className={css.text}>
              More than just a sitter. Find a Manny who can turn an ordinary
              evening into an exciting adventure for your child.
            </p>

            <Link href="/mannies" className={css.button}>
              Explore Our Team
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
            <p className={css.statsLabel}>Experienced mannies</p>
            <p className={css.statsCount}>
              <NannyCounter start={14621} to={15000} />+
            </p>
          </div>
        </div>
      </HeroSection>
    </section>
  );
}
