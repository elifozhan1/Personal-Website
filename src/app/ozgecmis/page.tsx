import Image from 'next/image';
import veri from '../../data/isletme.json';

export default function OzgecmisSayfasi() {
    return (
        <main className="min-h-screen font-sans text-slate-800 bg-[#faf8f4] pt-32 pb-24">
            <div className="max-w-6xl mx-auto px-6">

                {/* --- 1. ÜST BÖLÜM: Profil Kartı --- */}
                {/* bg-white, shadow-sm ve border kısımlarını kaldırdık, daha ferah bir yapı kurduk */}
                <section className="flex flex-col md:flex-row gap-10 md:gap-16 items-start mb-20 p-4 md:p-0">

                    {/* Sol Taraf: Kare Fotoğraf */}
                    <div className="w-48 h-48 md:w-64 md:h-64 shrink-0 relative rounded-2xl overflow-hidden shadow-lg border-4 border-[#e9eff6] mx-auto md:mx-0">
                        <Image
                            src="/doktor_resim.png"
                            alt={veri.ad}
                            fill
                            className="object-cover object-top"
                        />
                    </div>

                    {/* Sağ Taraf: Metinler */}
                    <div className="flex-1 text-center md:text-left pt-2 md:pt-4">
                        <h1 className="text-3xl md:text-5xl font-bold text-black mb-2">
                            {veri.ad}
                        </h1>
                        <h2 className="text-xl md:text-2xl font-semibold text-[#164371] mb-1">
                            {veri.unvan}
                        </h2>
                        <h3 className="text-lg text-slate-600 font-medium mb-6">
                            {veri.kurum}
                        </h3>
                        <p className="text-black text-justify leading-relaxed">
                            {veri.ozgecmis}
                        </p>
                    </div>
                </section>


                {/* --- 2. ALT BÖLÜM: Eğitim ve İş Deneyimi (Timeline) --- */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">

                    {/* SOL KOLON: Eğitim */}
                    <div>
                        <div className="mb-8">
                            <h3 className="text-3xl font-bold text-black flex items-center gap-3 mb-2">
                                <svg className="w-8 h-8 text-[#1f60a2]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
                                Eğitim
                            </h3>
                            {/* Eğitim Alt Başlığı İkonun hizasından başlıyor (ml-11) */}
                            <p className="text-slate-500 font-medium ml-11">Akademik geçmiş ve unvanlar</p>
                        </div>

                        {/* Timeline Çizgisi */}
                        <div className="border-l-2 border-[#1f60a2]/20 ml-4">
                            {veri.egitim.map((item, index) => (
                                <div key={index} className="relative pl-8 pb-8 last:pb-0">
                                    {/* Nokta */}
                                    <div className="absolute w-4 h-4 rounded-full bg-[#1f60a2] -left-[9px] top-1.5 border-4 border-[#faf8f4]"></div>

                                    {/* İçerik */}
                                    <span className="text-[#1f60a2] font-semibold text-sm tracking-wide bg-[#e9eff6] px-3 py-1 rounded-full inline-block mb-2">
                                        {item.yil}
                                    </span>
                                    <h4 className="text-black font-bold text-xl mb-0.5">{item.baslik}</h4>
                                    <h5 className="text-black font-medium text-sm mb-1">{item.kurum}</h5>
                                    {item.aciklama && (
                                        <p className="text-slate-500 text-sm leading-relaxed mt-0.5">{item.aciklama}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* SAĞ KOLON: İş Deneyimi */}
                    <div>
                        <div className="mb-8">
                            <h3 className="text-3xl font-bold text-black flex items-center gap-3 mb-2">
                                <svg className="w-8 h-8 text-[#1f60a2]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"></rect><path d="M9 22v-4h6v4"></path><path d="M8 6h.01"></path><path d="M16 6h.01"></path><path d="M12 6h.01"></path><path d="M12 10h.01"></path><path d="M12 14h.01"></path><path d="M16 10h.01"></path><path d="M16 14h.01"></path><path d="M8 10h.01"></path><path d="M8 14h.01"></path></svg>
                                İş Deneyimi
                            </h3>
                            {/* İş Deneyimi Alt Başlığı */}
                            <p className="text-slate-500 font-medium ml-11">Akademik ve klinik tecrübeler</p>
                        </div>

                        {/* Timeline Çizgisi */}
                        <div className="border-l-2 border-[#1f60a2]/20 ml-4">
                            {veri.isDeneyimi.map((item, index) => (
                                <div key={index} className="relative pl-8 pb-8 last:pb-0">
                                    {/* Nokta */}
                                    <div className="absolute w-4 h-4 rounded-full bg-[#1f60a2] -left-[9px] top-1.5 border-4 border-[#faf8f4]"></div>

                                    {/* İçerik */}
                                    <span className="text-[#1f60a2] font-semibold text-sm tracking-wide bg-[#e9eff6] px-3 py-1 rounded-full inline-block mb-2">
                                        {item.yil}
                                    </span>
                                    <h4 className="text-black font-bold text-xl mb-0.5">{item.baslik}</h4>
                                    <h5 className="text-black font-medium text-sm">{item.kurum}</h5>
                                </div>
                            ))}
                        </div>
                    </div>

                </section>

                {/* --- 3. YENİ BÖLÜM: Yayınlar --- */}
                {/* Önceki bölümle arayı açmak için "mt-32" eklendi */}
                <section className="mt-32">

                    {/* Yayınlar Başlık */}
                    <div className="mb-10">
                        <h3 className="text-3xl font-bold text-black flex items-center gap-3 mb-3">
                            <svg className="w-8 h-8 text-[#1f60a2]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                            </svg>
                            Yayınlar
                        </h3>
                        <p className="text-slate-500 font-medium ml-11 max-w-3xl leading-relaxed">
                            Prof. Dr. Hakan Özhan, ulusal/uluslararası alanda pek çok akademik yayına, makaleye ve araştırmaya imza atmıştır. Yayınlarından bazılarına buradan erişebilirsiniz.
                        </p>
                    </div>

                    {/* Yayınlar Listesi (Kutucuklar) */}
                    <div className="flex flex-col gap-5">
                        {veri.yayinlar?.map((yayin, index) => (
                            <div
                                key={index}
                                className={`bg-gradient-to-r from-white to-[#f6f9fc] border border-[#e9eff6] rounded-2xl p-6 flex flex-col shadow-sm hover:shadow-md transition-shadow ${yayin.resim
                                    ? 'md:flex-row md:p-8 gap-6 md:gap-8' // Kitap tasarımı (resimliyse)
                                    : 'md:flex-row md:items-center justify-between gap-4' // Makale tasarımı (buton en sağda)
                                    }`}
                            >

                                {/* 1. Resim (Kitap İçin) Göster */}
                                {yayin.resim && (
                                    <div className="w-32 h-44 shrink-0 relative rounded-lg overflow-hidden border border-slate-200 shadow-sm mx-auto md:mx-0">
                                        <Image src={yayin.resim} alt={yayin.baslik} fill className="object-cover" />
                                    </div>
                                )}

                                {/* 2. Yayın Metin İçerikleri */}
                                <div className={`flex-1 flex flex-col justify-center ${!yayin.resim ? 'pr-0 md:pr-4' : ''}`}>

                                    {/* Yıl Rozeti */}
                                    {yayin.yil && (
                                        <span className="text-[#1f60a2] font-semibold text-xs tracking-wide bg-[#e9eff6] px-3 py-1 rounded-full w-fit mb-2">
                                            {yayin.yil}
                                        </span>
                                    )}

                                    {/* Ana Başlık (Kitap için büyük, makale için bir tık küçük) */}
                                    <h4 className={`${yayin.resim ? 'text-xl font-bold' : 'text-base font-semibold'} text-black mb-1`}>
                                        {yayin.baslik}
                                    </h4>

                                    {/* Alt Başlık */}
                                    {yayin.altBaslik && (
                                        <p className="text-black font-semibold text-sm mb-2 mt-1">
                                            {yayin.altBaslik}
                                        </p>
                                    )}

                                    {/* Açıklama */}
                                    {yayin.aciklama && (
                                        <p className="text-slate-500 text-sm leading-relaxed mb-2 mt-1">
                                            {yayin.aciklama}
                                        </p>
                                    )}
                                </div>

                                {/* 3. Link/Buton Varsa Göster */}
                                {yayin.link && (
                                    <div className={`${yayin.resim ? 'mt-4 md:mt-auto' : 'mt-3 md:mt-0 shrink-0'}`}>
                                        <a
                                            href={yayin.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`inline-flex items-center gap-2 px-5 py-2.5 bg-[#164371] text-white font-semibold rounded-full hover:bg-[#1f60a2] transition-colors shadow-sm whitespace-nowrap ${yayin.resim ? 'text-sm' : 'text-xs md:text-sm'}`}
                                        >
                                            Yayını Görüntüle
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                                <polyline points="15 3 21 3 21 9"></polyline>
                                                <line x1="10" y1="14" x2="21" y2="3"></line>
                                            </svg>
                                        </a>
                                    </div>
                                )}

                            </div>
                        ))}
                    </div>
                </section>

                {/* --- 4. BÖLÜM: Mesleki Üyelikler --- */}
                <section className="mt-32">
                    <div className="mb-8">
                        <h3 className="text-3xl font-bold text-black flex items-center gap-3 mb-3">
                            {/* Topluluk/Üyelik İkonu */}
                            <svg className="w-8 h-8 text-[#1f60a2]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                <circle cx="9" cy="7" r="4"></circle>
                                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                            </svg>
                            Mesleki Üyelikler
                        </h3>
                         <p className="text-slate-500 font-medium ml-11 max-w-3xl leading-relaxed">
                            Üyesi olduğu dernek ve kuruluşlar
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {/* Üyelik 1 */}
                        <div className="bg-white border border-[#e9eff6] shadow-sm hover:shadow-md transition-shadow rounded-2xl p-6 flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-[#e9eff6] text-[#1f60a2] flex items-center justify-center shrink-0">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                </svg>
                            </div>
                            <h4 className="font-bold text-[#164371] text-lg">Türk Tabipleri Birliği</h4>
                        </div>

                        {/* Üyelik 2 */}
                        <div className="bg-white border border-[#e9eff6] shadow-sm hover:shadow-md transition-shadow rounded-2xl p-6 flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-[#e9eff6] text-[#1f60a2] flex items-center justify-center shrink-0">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                </svg>
                            </div>
                            <h4 className="font-bold text-[#164371] text-lg">European Society of Cardiology (ESC)</h4>
                        </div>
                    </div>
                </section>

                {/* --- 5. BÖLÜM: Lisanslar ve Sertifikalar --- */}
                <section className="mt-32">
                    <div className="mb-10">
                        <h3 className="text-3xl font-bold text-black flex items-center gap-3 mb-3">
                            {/* Sertifika / Lisans İkonu */}
                            <svg className="w-8 h-8 text-[#1f60a2]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="8" r="6"></circle>
                                <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path>
                            </svg>
                            Lisanslar ve Sertifikalar
                        </h3>
                         <p className="text-slate-500 font-medium ml-11 max-w-3xl leading-relaxed">
                            Avrupa Kardiyoloji Derneği standartlarında kardiyoloji uzmanlığını ve Amerika Birleşik Devletleri normlarında uluslararası hekimlik yetkinliğini tescilleyen belgeler
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* Sertifika 1 */}
                        <div className="bg-white border border-[#e9eff6] shadow-sm hover:shadow-md transition-shadow rounded-2xl p-6 md:p-8 relative overflow-hidden">
                            {/* Sol tarafta estetik mavi bir çizgi */}
                            <div className="absolute top-0 left-0 w-1.5 h-full bg-[#1f60a2]"></div>

                            <h4 className="text-xl font-bold text-black mb-1">Cardiologist Diploma</h4>
                            <p className="text-slate-500 font-medium">European Society of Cardiology</p>
                        </div>

                        {/* Sertifika 2 */}
                        <div className="bg-white border border-[#e9eff6] shadow-sm hover:shadow-md transition-shadow rounded-2xl p-6 md:p-8 relative overflow-hidden">
                            {/* Sol tarafta estetik mavi bir çizgi */}
                            <div className="absolute top-0 left-0 w-1.5 h-full bg-[#1f60a2]"></div>

                            <h4 className="text-xl font-bold text-black mb-1">ECFMG</h4>
                            <p className="text-slate-500 font-medium mb-4">USMLE (United States Medical Licensing Examination)</p>

                            {/* Yeterlilik Kimliği için şık bir rozet (badge) tasarımı */}
                            <span className="inline-flex items-center gap-2 bg-[#e9eff6] text-[#164371] font-semibold text-xs px-3 py-1.5 rounded-full">
                                Yeterlilik Kimliği: 058171109
                            </span>
                        </div>

                    </div>
                </section>
            </div>
        </main>
    );
}