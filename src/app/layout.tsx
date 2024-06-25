import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/pages/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wonosobo Wisata",
  description: "Cari tempat wisata di Wonosobo dengan mudah!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative`}>
        <section className="max-w-5xl px-2 mx-auto overflow-x-hidden  -z-10">
          <main className="z-50">{children}</main>
          <Footer />
        </section>
      </body>
    </html>
  );
}
