import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import PageLayoutHandler from "./../components/PageLayoutHandler/PageLayoutHandler";
import { AuthProvider } from "../context/AuthContext";
import ToasterProvider from "../providers/ToasterProvider";

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
        <AuthProvider>
          <PageLayoutHandler>{children}</PageLayoutHandler>
        </AuthProvider>
        <ToasterProvider />
      </body>
    </html>
  );
}
