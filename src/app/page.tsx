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

        {/* ARKA PLAN RESMİ (Silinmedi, burada) */}
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

        {/* 3. ANA METİN (relative ve z-20 ile en üste alındı) */}
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

      <hr className="border-slate-100 max-w-4xl mx-auto" />

      {/* 2. ÖZGEÇMİŞ VE DENEYİM BÖLÜMÜ */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h3 className="text-2xl font-light text-slate-900 mb-6">Özgeçmiş & Klinik Deneyim</h3>
        <p className="text-lg text-slate-600 leading-relaxed">
          {veri.ozgecmis}
        </p>
      </section>

    </main>
  );
}