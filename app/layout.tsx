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
      <Head>
        <meta name="description" content={homeSeo.metadescription} />
        <meta property="og:title" content={homeSeo.title} />
        <meta property="og:description" content={homeSeo.metadescription} />
        <meta property="og:image" content="../public/img/ui/logo.png" />
        <meta property="og:url" content="https://esmaeilpour.site" />
        <meta property="og:type" content="website" />
        <meta
          property="og:site_name"
          content="Mohammad Esmaeilpour portfolio"
        />
      </Head>
      ;
      <Aos />
      <body className="overflow-x-hidden">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
