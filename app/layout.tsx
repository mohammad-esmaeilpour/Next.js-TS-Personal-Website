import "./globals.css";
import type { Metadata } from "next";
import Navigation from "./components/Navigation";
import { navData } from "@/public/data/layout";

export const metadata: Metadata = {};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navigation data={navData} />
        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}
