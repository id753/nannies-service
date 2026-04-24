import css from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import { ArrowIcon, CheckIcon } from "@/src/components/Icons/Icons";

export default function Home() {
  return (
    <section className={css.hero}>
      {/* Левая часть с текстом */}
      <div className={css.leftSide}>
        <div className={css.content}>
          <h1 className={css.title}>Make Life Easier for the Family:</h1>
          <p className={css.text}>Find Babysitters Online for All Occasions</p>

          <Link href="/nannies" className={css.button}>
            Get started
            <span className={css.arrow}>
              <ArrowIcon />
            </span>
          </Link>
        </div>
      </div>

      {/* Правая часть с картинкой */}
      <div className={css.rightSide}>
        {/* Здесь bg image */}
        <div className={css.statsBadge}>
          <div className={css.checkIcon}>
            <CheckIcon />
          </div>
          <div>
            <p className={css.statsLabel}>Experienced nannies</p>
            <p className={css.statsCount}>15,000</p>
          </div>
        </div>
      </div>
    </section>
  );
}
