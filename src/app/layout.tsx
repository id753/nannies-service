import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import css from "./layout.module.css";

import Header from "@/src/components/Header/Header";
import Footer from "@/src/components/Footer/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nanny Services",
  description: "Find Babysitters Online for All Occasions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>
        {/* Обертка, создающая эффект карточки */}
        <div className={css.pageWrapper}>
          <Header />
          <main style={{ flex: 1, display: "flex", flexDirection: "column" }}>
            {children}
          </main>
          {/* <Footer /> */}
        </div>
      </body>
    </html>
  );
}
