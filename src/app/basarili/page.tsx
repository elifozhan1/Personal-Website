import Link from 'next/link';

export default function BasariliSayfasi() {
  return (
    <main className="min-h-screen flex items-center justify-center font-sans bg-[#faf8f4] pt-32 pb-24">
      <div className="max-w-xl mx-auto px-6 text-center">
        
        {/* Yeşil Büyütülmüş Tik İkonu */}
        <div className="w-24 h-24 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-sm">
          <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-[#164371] mb-4">
          Mesajınız İletilmiştir
        </h1>
        
        <p className="text-lg text-slate-600 mb-10 leading-relaxed">
          İletişim formunuz tarafımıza başarıyla ulaştı. İlginiz için teşekkür ederiz, size en kısa sürede dönüş yapacağız.
        </p>

        <Link 
          href="/" 
          className="inline-flex items-center gap-2 px-8 py-4 bg-[#164371] text-white font-bold text-lg rounded-full hover:bg-[#1f60a2] transition-colors shadow-lg group"
        >
          Ana Sayfaya Dön
          <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5"></path>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
        </Link>
        
      </div>
    </main>
  );
}