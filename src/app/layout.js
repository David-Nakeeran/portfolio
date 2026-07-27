import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "David Nakeeran | Junior Fullstack Developer",
  description:
    "Portfolio of David Nakeeran, a junior fullstack developer building applications with Laravel, Next.js, Node.js and modern web technologies.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased min-h-dvh`}>
        {children}
      </body>
    </html>
  );
}
