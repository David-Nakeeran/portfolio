import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "David Nakeeran",
  description:
    "Full Stack Web Developer, specialising in modern JavaScript and PHP applications with a focus on accessibility and performance.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased flex flex-col min-h-dvh`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
