import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navigation from "./components/Navigation";

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
      <body className={`${inter.className} bg-gray-100 dark:bg-slate-700`}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
