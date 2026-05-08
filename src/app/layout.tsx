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
    default: "Manny.Services | Professional Male Nannies & Childcare",
    template: "%s | Manny.Services",
  },
  description:
    "Find and hire verified male nannies (mannies). Professional, active, and reliable childcare services tailored for your family. Book your perfect match today!",
  keywords: [
    "male nanny",
    "manny",
    "babysitter",
    "hire a manny",
    "professional childcare",
    "manny services online",
  ],
  openGraph: {
    title: "Manny.Services | Reliable Care for Your Kids",
    description:
      "Discover verified mannies who provide active mentorship and professional care. Safety and trust first.",
    url: "",
    siteName: "Manny.Services",
    images: [
      {
        url: "https://nannies-service.netlify.app/og-image.png",
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
    title: "Manny.Services | Hire a Professional Manny",
    description:
      "Find qualified and verified babysitters online. Active care and mentorship for your children.",
    images: ["https://nannies-service.netlify.app/og-image.png"],
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
