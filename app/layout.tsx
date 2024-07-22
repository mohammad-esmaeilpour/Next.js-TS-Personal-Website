import Navigation from "./components/Navigation";
import { navData } from "@/public/data/layout";
import localFont from "next/font/local";

// global styles
import "./globals.css";
import "aos/dist/aos.css";

// fonts
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
        className={`${customeLight.variable} ${customeBold.variable} overflow-x-hidden`}
      >
        <Navigation data={navData} />
        <main className="container mx-auto">{children}</main>
      </body>
    </html>
  );
}
