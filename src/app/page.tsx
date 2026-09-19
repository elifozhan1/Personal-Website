'use client';

import { useState, useEffect } from 'react';
import Image from "next/image";
import Link from 'next/link';
import veri from '../data/isletme.json';

export default function Home() {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 50 pikselden fazla aşağı kaydırıldıysa true yap
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="font-sans text-slate-800 bg-[#faf8f4]">

      {/* 1. TAM EKRAN HERO BÖLÜMÜ (Resimli Kısım) */}
      <div className="relative min-h-screen flex flex-col">

        {/* ARKA PLAN RESMİ */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/arkaplan.jpg"
            alt="Klinik Arka Plan"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        {/* KARARTMA FİLTRESİ */}
        <div className="absolute inset-0 bg-blue-900/70 z-10"></div>

        {/* ANA METİN (relative ve z-20 ile en üste alındı) */}
        <section className="relative z-20 flex-1 flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            {veri.ad}
          </h1>

          <h2 className="text-2xl md:text-3xl text-blue-100 font-light mb-8 drop-shadow-md">
            {veri.unvan}
          </h2>

          <p className="text-lg md:text-xl text-slate-200 max-w-2xl leading-relaxed drop-shadow">
            Kalp sağlığınız için güncel tıbbi yaklaşımlar, bilimsel altyapı ve yılların getirdiği klinik tecrübe ile yanınızdayız.
          </p>

          {/* Buton Kapsayıcısı: Mobilde alt alta (flex-col), ekran büyüyünce yan yana (sm:flex-row) */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">

            {/* 1. Buton: İletişime Geçin (Beyaz, içi dolu) */}
            <a href="/iletisim" className="px-8 py-3 bg-white text-blue-900 font-semibold rounded-full hover:bg-blue-50 transition-colors shadow-lg text-center">
              İletişime Geçin
            </a>

            {/* 2. Buton: Sakarya Tıp Merkezi (Şeffaf, beyaz çerçeveli, konum ikonlu) */}
            <a
              href="https://sakaryatipmerkezi.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-blue-900 transition-colors shadow-lg flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              {veri.kurum}
            </a>

          </div>
        </section>

      </div>

      {/* --- YENİ ÖZGEÇMİŞ VE PROFİL BÖLÜMÜ --- */}
      <section id="ozgecmis" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Sol Taraf: Yazılar ve Maddeler */}
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-[#164371] mb-6 leading-tight">
              Kalp Sağlığınız İçin Güvenilir ve Deneyimli Bakım
            </h3>
            
            {/* text-justify sınıfı ile metin sağa ve sola tam yaslandı */}
            <p className="text-lg text-slate-700 leading-relaxed mb-8 text-justify">
              {veri.ozgecmis}
            </p>
            
            <ul className="space-y-4">
              {[
                "Koroner anjiyografi ve girişimsel işlemlerde uzman",
                "100'ün üzerinde ulusal ve uluslararası akademik yayın",
                "Kardiyoloji alanında profesör unvanı",
                "Kişiye özel yaklaşım"
              ].map((madde, index) => (
                <li key={index} className="flex items-start gap-3 text-slate-700 font-medium">
                  {/* Onay (Tik) İkonu */}
                  <svg className="w-6 h-6 text-[#1f60a2] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>{madde}</span>
                </li>
              ))}
            </ul>

            {/* YENİ: Özgeçmişi Görüntüle Butonu */}
            <div className="mt-10">
              <Link 
                href="/ozgecmis" 
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#164371] text-white font-semibold rounded-full hover:bg-[#1f60a2] transition-colors shadow-lg group"
              >
                Özgeçmişi Görüntüle
                {/* Ok İşareti (Üzerine gelindiğinde hafif sağa kayar) */}
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>

          {/* Sağ Taraf: Fotoğraf */}
          <div className="relative w-[90%] sm:w-4/5 md:w-full max-w-md mx-auto lg:ml-auto lg:mr-0 mt-12 lg:mt-0 z-10">
            
            {/* Estetik Arka Plan Kutusu (#e9eff6) - Hizalamayı bozmayacak şekilde ayarlandı */}
            <div className="absolute top-5 -right-5 w-full h-full bg-[#e9eff6] rounded-3xl -z-10"></div>
            
            {/* Fotoğraf Alanı (Biraz daha büyük ve tam hizalı) */}
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-8 border-white bg-white">
              <Image 
                src="/doktor_resim.png" 
                alt="Prof. Dr. Hakan Özhan" 
                fill
                className="object-cover"
              />
            </div>
            
          </div>

        </div>
      </section>

      {/* --- HİZMETLER BÖLÜMÜ --- */}
      <section className="w-full #faf8f4  py-24 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-[#164371] mb-4">Kardiyoloji Hizmetleri</h3>
            <div className="w-24 h-1 bg-[#1f60a2] mx-auto rounded-full"></div>
          </div>

          {/* 6 Kutucuklu Grid Sistemi */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {veri.hizmetler.map((hizmet, index) => (

              // İleride sayfaları oluşturduğumuzda href="/hizmetler/ilgili-hizmet" yapacağız
              <Link
                key={index}
                href="#"
                className="block p-8 bg-[#e9eff6] rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-[#1f60a2]/10 group"
              >
                <h4 className="text-xl font-bold text-[#164371] mb-3 group-hover:text-[#1f60a2] transition-colors">
                  {hizmet.baslik}
                </h4>
                <p className="text-slate-700 leading-relaxed mb-6">
                  {hizmet.detay}
                </p>

                {/* Ok işaretli "Detaylı Bilgi" yazısı */}
                <span className="inline-flex items-center text-[#1f60a2] font-semibold text-sm group-hover:translate-x-2 transition-transform">
                  Detaylı Bilgi
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </span>
              </Link>

            ))}
          </div>

        </div>
      </section>

      {/* --- RANDEVU BÖLÜMÜ --- */}
      {/* Arka plan tamamen beyaz */}
      <section className="w-full #faf8f4  pb-24">
        
        {/* Üstteki 6'lı hizmet kutularıyla aynı sağ/sol hizasını sağlayan kapsayıcı */}
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Lacivert Kutucuk */}
          <div className="bg-[#164371] rounded-3xl p-10 md:p-16 text-center shadow-xl">
            
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Kalp Sağlığınız İçin İlk Adımı Atın
            </h3>
            
            <p className="text-lg text-[#e9eff6] max-w-2xl mx-auto mb-10">
              Randevu talebiniz ve sorularınız için bize ulaşın. Size en uygun zamanda yanınızdayız.
            </p>
            
            <Link 
              href="/randevu" 
              className="inline-block px-10 py-4 bg-white text-[#164371] font-bold text-lg rounded-full hover:bg-slate-100 transition-colors shadow-lg"
            >
              Randevu Al
            </Link>
            
          </div>
          
        </div>
      </section>
    </main>
  );
}