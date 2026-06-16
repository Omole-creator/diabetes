import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-poppins",
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
    <html lang="en" className={poppins.variable}>
      <body>{children}</body>
    </html>
  );
}
