import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
});

export const metadata: Metadata = {
  title: "FitLog — Workout Library",
  description: "Train with intent. Log every set.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={oswald.variable}>
        <Navbar/>
       <main> {children} </main>
        {/* <Footer /> */}
        <Toaster position="top-right" />
      </body>
    </html>
  );
}