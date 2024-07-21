import Navigation from "./components/Navigation";
import { navData } from "@/public/data/layout";
import localFont from "next/font/local";
import "./globals.css";

const customeLight = localFont({
  src: "../public/fonts/light.otf",
  variable: "--font-customeLight",
});

const customeBold = localFont({
  src: "../public/fonts/bold.otf",
  variable: "--font-customeBold",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${customeLight.variable} ${customeBold.variable} overflow-x-hidden bg-gray-800`}
      >
        <Navigation data={navData} />
        <main className="container mx-auto">{children}</main>
      </body>
    </html>
  );
}
