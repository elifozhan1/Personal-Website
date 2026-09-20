import Link from 'next/link';
import veri from '../data/isletme.json';

export default function Footer() {
  return (
    <footer className="bg-[#164371] text-[#e9eff6] py-8 border-t border-[#1f60a2] mt-auto">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">

        {/* Sol Taraf: Telif Hakkı Yazısı */}
        <div className="text-sm">
          <p>© {new Date().getFullYear()} {veri.ad}. Tüm hakları saklıdır.</p>
        </div>

        {/* Sağ Taraf: Sosyal Medya İkonları */}
        <div className="flex items-center gap-4">

          {veri.sosyal?.map((hesap, index) => (
            <a
              key={index}
              href={hesap.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label={hesap.platform}
            >
              {/* Platform ismine göre doğru SVG ikonunu eşleştiriyoruz */}
              {hesap.platform.toLowerCase() === 'instagram' && (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              )}

              {hesap.platform.toLowerCase() === 'linkedin' && (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              )}
            </a>
          ))}

        </div>

      </div>
    </footer>
  );
}