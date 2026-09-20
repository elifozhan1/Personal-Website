import Link from "next/link";
import { notFound } from "next/navigation";
import veri from "../../../data/isletme.json"; 

export default async function HizmetDetaySayfasi({ params }: any) {
  
  const { slug } = await params;
  const hizmet = veri.hizmetler.find((h) => h.slug === slug);

  if (!hizmet) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#faf8f4] py-16 px-4">
      <div className="max-w-4xl mx-auto">
        
        <Link 
          href="/" 
          className="inline-flex items-center text-[#1f60a2] font-semibold hover:text-[#164371] mb-8 transition-colors"
        >
          ← Anasayfaya Dön
        </Link>

        <article className="bg-white rounded-3xl shadow-sm border border-[#1f60a2]/10 overflow-hidden">
          
          <div className="w-full h-64 md:h-96 bg-[#e9eff6] relative">
            {/* HATA VEREN KISIM BURADAN SİLİNDİ */}
            <img 
              src={hizmet.resim} 
              alt={hizmet.baslik} 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-8 md:p-12">
            <span className="text-sm font-bold tracking-wider text-[#1f60a2] uppercase">
              Kardiyoloji Uzmanlığı
            </span>
            
            <h1 className="text-3xl md:text-4xl font-extrabold text-[#164371] mt-3 mb-6">
              {hizmet.baslik}
            </h1>
            
            <p className="text-xl text-[#1f60a2] font-medium leading-relaxed mb-8 pb-8 border-b border-slate-100">
              {hizmet.detay}
            </p>

            <div className="text-slate-700 leading-relaxed text-lg">
              <p>{hizmet.icerik}</p>
            </div>

            <div className="mt-12 pt-8 border-t border-slate-100">
              <Link
                href="/iletisim"
                className="inline-flex justify-center items-center px-8 py-4 bg-[#164371] text-white rounded-xl font-bold hover:bg-[#1f60a2] transition-colors w-full md:w-auto shadow-md"
              >
                Randevu Alın
              </Link>
            </div>
            
          </div>
        </article>
      </div>
    </main>
  );
}