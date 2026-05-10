import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import css from "./layout.module.css";
import PageLayoutHandler from "./../components/PageLayoutHandler/PageLayoutHandler";
import { AuthProvider } from "../context/AuthContext";
import ToasterProvider from "../providers/ToasterProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Manny.Services | Find Professional Male Nannies & Childcare",
    template: "%s | Manny.Services",
  },
  description:
    "Find trusted and verified mannies for professional childcare services. Browse experienced mannies, compare profiles, and hire the right match for your family.",

  keywords: [
    "male nanny",
    "manny",
    "babysitter",
    "hire a manny",
    "professional childcare",
    "manny services online",
  ],
  alternates: {
    canonical: "https://manny-service.id753.workers.dev",
  },
  openGraph: {
    title: "Manny.Services | Find Verified Mannies Online",
    description:
      "Find trusted and verified mannies for professional childcare services. Browse experienced male nannies, compare profiles, and hire the right match for your family.",
    url: "https://manny-service.id753.workers.dev/",
    siteName: "Manny.Services",
    images: [
      {
        url: "https://manny-service.id753.workers.dev/og-image.png",
        width: 1200,
        height: 630,
        alt: "Manny.Services - Professional Male Nannies",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Manny.Services | Trusted Male Nannies",
    description:
      "Find qualified and verified babysitters online. Active care and mentorship for your children.",
    images: ["https://manny-service.id753.workers.dev/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>
        <AuthProvider>
          <PageLayoutHandler>
            <main>{children}</main>
          </PageLayoutHandler>
        </AuthProvider>
        <ToasterProvider />
      </body>
    </html>
  );
}
