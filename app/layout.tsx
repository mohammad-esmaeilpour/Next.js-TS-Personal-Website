import Header from "./components/layout/Header";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

// global styles
import "./globals.css";
import "aos/dist/aos.css";
import Footer from "./components/layout/Footer";
import Aos from "./components/global/Aos";
import Head from "next/head";
import { homeSeo } from "@/public/data/home";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <Aos />
      <body className="overflow-x-hidden">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
