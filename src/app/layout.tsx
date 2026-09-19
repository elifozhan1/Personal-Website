import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import veri from "../data/isletme.json";

export const metadata: Metadata = {
  title: "Prof. Dr. Hakan Özhan | Kardiyoloji Uzmanı",
  description: "Sakarya Tıp Merkezi - Kalp Sağlığı ve Güncel Tıbbi Yaklaşımlar",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  // Google'ın okuyacağı SEO (Structured Data) Yapısı
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Physician", 
    "name": "Prof. Dr. Hakan Özhan",
    "url": "https://www.sitenizinadi.com", // Siteniz yayına girince burayı güncellersiniz
    "image": "https://www.sitenizinadi.com/profil.jpg",
    "jobTitle": "Kardiyoloji Uzmanı",
    "worksFor": {
      "@type": "MedicalOrganization",
      "name": "Sakarya Tıp Merkezi"
    },
    // İŞTE BURASI: Google'a bu hesapların doktora ait olduğunu söylüyoruz
    "sameAs": [
      "https://instagram.com/prof.dr.hakanozhan",
      "https://tr.linkedin.com/in/prof-dr-hakan-%C3%B6zhan-72943525"
    ]
  };

  return (
    <html lang="tr" className="scroll-smooth">
      <head>
        {/* JSON-LD kodunu sayfaya gizlice (sadece botlar için) gömüyoruz */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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