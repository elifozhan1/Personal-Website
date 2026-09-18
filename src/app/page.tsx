import Image from "next/image";
import veri from '../data/isletme.json';

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans text-slate-800">
      
      {/* 1. ANA SAYFA / KİMLİK BÖLÜMÜ */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-light text-slate-900 mb-2">
          {veri.ad}
        </h1>
        <h2 className="text-xl text-blue-600 font-medium mb-4">
          {veri.unvan} <span className="text-slate-400">|</span> {veri.kurum}
        </h2>
        
        {/* Sosyal Medya Linkleri */}
        <div className="flex justify-center gap-4 mt-6">
          {veri.sosyal.map((sosyal, index) => (
            <a key={index} href={sosyal.url} target="_blank" rel="noreferrer" className="text-sm text-slate-500 hover:text-blue-600 transition uppercase tracking-widest">
              {sosyal.platform}
            </a>
          ))}
        </div>
      </section>

      <hr className="border-slate-100 max-w-4xl mx-auto" />

      {/* 2. ÖZGEÇMİŞ VE DENEYİM BÖLÜMÜ */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h3 className="text-2xl font-light text-slate-900 mb-6">Özgeçmiş & Klinik Deneyim</h3>
        <p className="text-lg text-slate-600 leading-relaxed">
          {veri.ozgecmis}
        </p>
      </section>

      <hr className="border-slate-100 max-w-4xl mx-auto" />

      {/* 3. İLETİŞİM, FORM VE HARİTA BÖLÜMÜ */}
      <section className="max-w-4xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Sol Taraf: İletişim Formu (Backend olmadan Web3Forms ile çalışır) */}
        <div>
          <h3 className="text-2xl font-light text-slate-900 mb-6">İletişime Geçin</h3>
          <form action="https://api.web3forms.com/submit" method="POST" className="space-y-4">
            {/* Buradaki value kısmına Web3Forms'tan aldığınız kendi anahtarınızı yazacaksınız */}
            <input type="hidden" name="access_key" value="SİZİN_WEB3FORMS_ANAHTARINIZ" />
            
            <div>
              <label className="block text-sm text-slate-500 mb-1">Adınız Soyadınız</label>
              <input type="text" name="isim" required className="w-full border border-slate-200 p-3 rounded bg-slate-50 focus:outline-none focus:border-blue-500" />
            </div>
            <div>
              <label className="block text-sm text-slate-500 mb-1">E-posta Adresiniz</label>
              <input type="email" name="email" required className="w-full border border-slate-200 p-3 rounded bg-slate-50 focus:outline-none focus:border-blue-500" />
            </div>
            <div>
              <label className="block text-sm text-slate-500 mb-1">Mesajınız</label>
              <textarea name="mesaj" rows={4} required className="w-full border border-slate-200 p-3 rounded bg-slate-50 focus:outline-none focus:border-blue-500"></textarea>
            </div>
            <button type="submit" className="w-full bg-slate-900 text-white p-3 rounded hover:bg-blue-600 transition">
              Mesajı Gönder
            </button>
          </form>
        </div>

        {/* Sağ Taraf: Google Haritalar ve Adres */}
        <div>
          <h3 className="text-2xl font-light text-slate-900 mb-6">Konum</h3>
          <p className="text-slate-600 mb-4">{veri.iletisim.adres}</p>
          
          {/* Google Maps İframe */}
          <div className="w-full h-64 rounded bg-slate-100 overflow-hidden border border-slate-200">
            <iframe 
              src={veri.iletisim.haritaLink} 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>

      </section>

      {/* FOOTER */}
      <footer className="bg-slate-50 py-8 text-center text-sm text-slate-400">
        <p>© {new Date().getFullYear()} {veri.ad}. Tüm hakları saklıdır.</p>
      </footer>

    </main>
  );
}