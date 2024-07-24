import Navigation from "./components/Navigation";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

// global styles
import "./globals.css";
import "aos/dist/aos.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="overflow-x-hidden">
        <Navigation />
        <main className="container mx-auto">{children}</main>
      </body>
    </html>
  );
}
