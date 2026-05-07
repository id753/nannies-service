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
    default: "Manny.Services | Find Your Perfect Manny",
    template: "Manny.Services",
  },
  description:
    "Reliable babysitting services. Find and hire experienced mannies for your children with ease. Safety and trust first.",
  keywords: [
    "nanny",
    "manny",
    "babysitter",
    "hire manny",
    "child care",
    "manny services",
  ],
  openGraph: {
    title: "Manny.Services | Trusted Child Care",
    description:
      "Find qualified and verified babysitters online for all occasions.",
    url: "https://nannies-service.netlify.app/",
    siteName: "Manny.Services",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Manny.Services",
    images: ["https://nannies-service.netlify.app/og-image.png"],
    description: "Find qualified and verified babysitters online.",
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
