"use client";

import React, { useEffect, useState } from "react";
import css from "./HeroSection.module.css";

interface HeroSectionProps {
  children: React.ReactNode;
  className?: string;
}

const HeroSection = ({ children, className }: HeroSectionProps) => {
  const images = [
    "/images/manny-hero-1.jpg",
    "/images/manny-hero-2.jpg",
    "/images/manny-hero-3.jpg",
    "/images/manny-hero-4.jpg",
    "/images/manny-hero-6.jpg",
  ];
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className={`${css.hero} ${className || ""}`}>
      {images.map((img, index) => (
        <div
          key={img}
          className={css.imageLayer}
          style={{
            backgroundImage: `url('${img}')`,
            opacity: index === currentIdx ? 1 : 0,
          }}
        />
      ))}
      <div className={css.overlay} />
      <div className={css.content}>{children}</div>
    </section>
  );
};

export default HeroSection;
