import type { Metadata, Viewport } from "next";
import { Newsreader, Public_Sans } from "next/font/google";
import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
  display: "swap",
  adjustFontFallback: false,
});

const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-public",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Enjoy Eba, Rice & Pounded Yam Again Without Spiking Your Blood Sugar",
  description:
    "A Nigerian doctor shows you the quiet way to keep your blood sugar calm and steady while you still enjoy your own food, using the same food already in your kitchen. No special diabetic food. No new drugs.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#008DC9",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${newsreader.variable} ${publicSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
