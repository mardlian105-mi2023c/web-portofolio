import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Import font variable
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Mardlian Portfolio",
  description:
    "Fullstack Web Developer Portfolio with Next.js and Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-900 text-gray-100`}
      >
        {children}
      </body>
    </html>
  );
}
