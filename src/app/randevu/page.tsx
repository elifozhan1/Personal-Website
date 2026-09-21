import Link from 'next/link';
import veri from '../../data/isletme.json';

export default function RandevuSayfasi() {
  return (
    <main className="min-h-screen bg-[#faf8f4] pt-32 pb-24 px-6">
      {/* pt-32 ile yukarıdan ekstra boşluk bırakarak mobilde menünün altında ezilmesini önledik */}
      <div className="max-w-5xl mx-auto">
        
        {/* Üst Başlık Kısmı */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#164371] mb-4">
            Randevu Alın
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Polikliniğimizde muayene olmak için çalışma saatlerimiz içerisinde telefonla bize ulaşabilir veya online sistemimizden hızlıca randevu oluşturabilirsiniz.
          </p>
        </div>
        
        {/* Ana İçerik: İki Kolonlu Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* SOL KOLON: Çalışma Saatleri */}
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-[#1f60a2]/10">
            <div className="flex items-center mb-8">
              <svg className="w-8 h-8 text-[#1f60a2] mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h2 className="text-2xl font-bold text-[#164371]">Çalışma Saatleri</h2>
            </div>
            
            <ul className="space-y-4">
              {['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma'].map((gun, i) => (
                <li key={i} className="flex justify-between items-center pb-4 border-b border-slate-100">
                  <span className="font-medium text-slate-700">{gun}</span>
                  <span className="text-[#1f60a2] font-semibold bg-[#e9eff6] px-3 py-1 rounded-lg">09:00 - 17:00</span>
                </li>
              ))}
              <li className="flex justify-between items-center pt-2">
                <span className="font-medium text-slate-700">Hafta Sonu</span>
                <span className="text-red-500 font-semibold bg-red-50 px-3 py-1 rounded-lg">Hizmet Verilmemektedir</span>
              </li>
            </ul>
          </div>

          {/* SAĞ KOLON: Butonlar */}
          <div className="flex flex-col gap-6 justify-center">
            
            {/* Telefon Butonu */}
            <a 
              // JSON'dan gelen telefon numarasının boşluklarını kaldırıp "tel:" linkine çeviriyoruz
              href={`tel:${veri.iletisim.telefon.replace(/\s/g, '')}`} 
              className="group flex items-center p-6 md:p-8 bg-white rounded-3xl shadow-sm border border-[#1f60a2]/10 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-[#e9eff6] rounded-2xl flex items-center justify-center text-[#1f60a2] mr-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#164371] mb-1">Telefon ile Randevu</h3>
                {/* Numara doğrudan JSON'dan yazdırılıyor */}
                <p className="text-slate-600 font-medium text-lg">{veri.iletisim.telefon}</p>
              </div>
            </a>

            {/* Online Randevu Butonu */}
            <a 
              href="http://78.189.159.185/webrandevu/Giris.aspx"
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center p-6 md:p-8 bg-[#164371] rounded-3xl shadow-md hover:bg-[#1f60a2] hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-white mr-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">Online Randevu Sistemi</h3>
                <p className="text-blue-100 text-sm">Hemen randevunuzu oluşturun →</p>
              </div>
            </a>

          </div>
        </div>

        {/* Ana Sayfaya Dön Linki */}
        <div className="mt-16 text-center">
          <Link 
            href="/" 
            className="inline-flex items-center text-[#1f60a2] font-semibold hover:text-[#164371] transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Anasayfaya Dön
          </Link>
        </div>

      </div>
    </main>
  );
}