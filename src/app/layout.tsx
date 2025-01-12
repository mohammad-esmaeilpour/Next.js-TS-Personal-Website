import Header from "./layout/Header";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import "./global.css";
import Footer from "./layout/Footer";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="overflow-x-hidden">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
