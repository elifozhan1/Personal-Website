import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Prof. Dr. Hakan Özhan | Kardiyoloji Uzmanı",
  description: "Sakarya Tıp Merkezi - Kalp Sağlığı ve Güncel Tıbbi Yaklaşımlar",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className="antialiased flex flex-col min-h-screen bg-[#faf8f4]">
        
        <Navbar />
        
        <main className="flex-grow">
          {children}
        </main>

        <Footer />

      </body>
    </html>
  );
}