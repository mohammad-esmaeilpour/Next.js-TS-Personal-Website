import Header from "./components/Header";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

// global styles
import "./globals.css";
import "aos/dist/aos.css";
import Footer from "./components/Footer";
import Aos from "./components/Aos";

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
