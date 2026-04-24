"use client";
import css from "./PageLayoutHandler.module.css";

import { usePathname } from "next/navigation";
import Header from "../Header/Header";

export default function PageLayoutHandler({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <div className={isHome ? css.pageWrapper : css.standardWrapper}>
      <Header />
      <main>{children}</main>
    </div>
  );
}
