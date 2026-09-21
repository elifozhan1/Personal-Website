'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const [isSolid, setIsSolid] = useState(false);

  useEffect(() => {
    // Ana sayfa değilse her zaman solid olsun
    if (pathname !== '/') {
      setIsSolid(true);
      return;
    }

    // Ana sayfadaysak scroll'a göre karar ver
    const handleScroll = () => {
      setIsSolid(window.scrollY > 50);
    };

    // İlk yüklemede kontrol et
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pathname]);

  // Aktif sayfaya tıklanınca yumuşakça yukarı kaydır
  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    path: string
  ) => {
    if (pathname === path) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Link stillerini belirle
  const getLinkClasses = (path: string) => {
    const isActive = pathname === path;

    return `mr-2 md:mr-4 px-4 py-2 rounded-full font-medium transition-all duration-300 ${
      isActive
        ? 'bg-[#e9eff6] text-[#164371] shadow-sm'
        : isSolid
          ? 'hover:text-[#007587]'
          : 'hover:text-blue-300'
    }`;
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isSolid
          ? 'bg-[#faf8f4]/95 backdrop-blur-md shadow-md text-slate-900'
          : 'bg-transparent text-white'
      }`}
    >
      <div className="max-w-6xl mx-auto flex flex-wrap p-4 md:p-5 flex-col md:flex-row items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          onClick={(e) => handleSmoothScroll(e, '/')}
          className="flex title-font font-medium items-center mb-4 md:mb-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`w-8 h-8 mr-2 transition-colors duration-300 ${
              isSolid ? 'text-[#164371]' : 'text-white'
            }`}
          >
            <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />
            <path d="M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27" />
          </svg>
          <span className="text-xl font-bold tracking-wider uppercase">
            Prof. Dr. Hakan Özhan
          </span>
        </Link>

        {/* Menü */}
        <nav className="md:ml-auto flex flex-wrap items-center text-sm md:text-base justify-center">
          <Link
            href="/"
            onClick={(e) => handleSmoothScroll(e, '/')}
            className={getLinkClasses('/')}
          >
            Ana Sayfa
          </Link>

          <Link
            href="/ozgecmis"
            onClick={(e) => handleSmoothScroll(e, '/ozgecmis')}
            className={getLinkClasses('/ozgecmis')}
          >
            Özgeçmiş
          </Link>

          <Link
            href="/iletisim"
            onClick={(e) => handleSmoothScroll(e, '/iletisim')}
            className={getLinkClasses('/iletisim')}
          >
            İletişim
          </Link>

          <Link
            href="/randevu"
            className="px-8 py-3 bg-[#164371] text-white font-semibold rounded-full hover:opacity-85 transition-opacity shadow-lg ml-2"
          >
            Randevu Al
          </Link>
        </nav>
      </div>
    </header>
  );
}