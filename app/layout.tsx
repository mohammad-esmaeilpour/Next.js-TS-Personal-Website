import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navigation from "./components/Navigation";
import { navData } from "@/public/data/layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const darkMode = false;
  return (
    <html className={darkMode ? "dark" : "light"} lang="en">
      <body
        className={`${inter.className} bg-white dark:bg-slate-900 text-[#050505] scrollbar-hide text-[15px]`}
      >
        <Navigation data={navData} />
        {children}
      </body>
    </html>
  );
}
