import type { Metadata } from "next";
import { Anton } from "next/font/google";
import "./globals.css";
import Navbar from "./ui/navbar/Navbar";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Crypto Now",
  description: "Crypto Now is a web application that provides real-time cryptocurrency data and analytics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${anton.className}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
