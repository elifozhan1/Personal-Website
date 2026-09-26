import Link from 'next/link';
import veri from '../../data/isletme.json';

export default function IletisimSayfasi() {
    return (
         <main className="min-h-screen bg-[#faf8f4] pt-40 md:pt-36 pb-24 px-6">

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">

                {/* --- SOL TARAF: İletişim Bilgileri ve Harita --- */}
                <div className="flex flex-col">
                    <h3 className="text-3xl font-bold text-[#164371] mb-8">İletişim Bilgileri</h3>

                    <div className="space-y-4 mb-10">
                        {/* Kutucuk 1: Telefon */}
                        <div className="flex items-center gap-5 p-5 bg-white rounded-xl shadow-sm border border-slate-100">
                            <div className="w-12 h-12 flex items-center justify-center bg-[#e9eff6] rounded-full text-[#1f60a2] shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                            </div>
                            <div>
                                <h4 className="font-bold text-[#164371]">Telefon</h4>
                                {/* JSON'dan gelen telefon */}
                                <p className="text-slate-600 mt-1">{veri.iletisim.telefon}</p>
                            </div>
                        </div>

                        {/* Kutucuk 2: E-Posta */}
                        <div className="flex items-center gap-5 p-5 bg-white rounded-xl shadow-sm border border-slate-100">
                            <div className="w-12 h-12 flex items-center justify-center bg-[#e9eff6] rounded-full text-[#1f60a2] shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                            </div>
                            <div>
                                <h4 className="font-bold text-[#164371]">E-Posta</h4>
                                {/* JSON'dan gelen e-posta */}
                                <p className="text-slate-600 mt-1">{veri.iletisim.eposta}</p>
                            </div>
                        </div>

                        {/* Kutucuk 3: Adres */}
                        <div className="flex items-center gap-5 p-5 bg-white rounded-xl shadow-sm border border-slate-100">
                            <div className="w-12 h-12 flex items-center justify-center bg-[#e9eff6] rounded-full text-[#1f60a2] shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                            </div>
                            <div>
                                <h4 className="font-bold text-[#164371]">Adres</h4>
                                {/* JSON'dan gelen adres */}
                                <p className="text-slate-600 mt-1">{veri.iletisim.adres}</p>
                            </div>
                        </div>

                        {/* Kutucuk 4: Sosyal Medya */}
                        <div className="flex items-center gap-5 p-5 bg-white rounded-xl shadow-sm border border-slate-100">
                            <div className="w-12 h-12 flex items-center justify-center bg-[#e9eff6] rounded-full text-[#1f60a2] shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="10" />
                                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                                    <path d="M2 12h20" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="font-bold text-[#164371]">Sosyal Medya</h4>
                                <div className="flex gap-4 mt-2">
                                    {/* JSON'dan gelen sosyal medya hesapları */}
                                    {veri.sosyal?.map((hesap, index) => (
                                        <a key={index} href={hesap.url} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-[#1f60a2] transition-colors" aria-label={hesap.platform}>
                                            {hesap.platform.toLowerCase() === 'instagram' && (
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                                            )}
                                            {hesap.platform.toLowerCase() === 'linkedin' && (
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                                            )}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Google Haritalar İframe */}
                    <div className="w-full h-80 rounded-2xl overflow-hidden shadow-sm border border-slate-100 bg-white">
                        <iframe
                            // JSON'dan gelen harita linki
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

                {/* --- SAĞ TARAF: İletişim Formu --- */}
                <div className="flex flex-col h-full">

                    <h3 className="text-3xl font-bold text-[#164371] mb-3">İletişim Formu</h3>
                    <p className="text-slate-600 mb-8">Mesajınızı bırakın, en kısa sürede size dönüş yapalım.</p>

                    <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-slate-100 flex-1">

                        <form action="https://api.web3forms.com/submit" method="POST" className="space-y-6">
                            <input type="hidden" name="access_key" value="9dc622ac-c6ae-4002-84a0-6d55d042487b" />
                            <input type="hidden" name="redirect" value="https://profdrhakanozhan.com/basarili" />

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-semibold text-[#164371] mb-2">Ad Soyad</label>
                                    <input type="text" name="isim" required className="w-full p-3.5 rounded-xl bg-[#e9eff6] border-transparent focus:border-[#1f60a2] focus:ring-2 focus:ring-[#1f60a2]/20 transition-all outline-none text-slate-700" />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-[#164371] mb-2">E-Posta</label>
                                    <input type="email" name="email" required className="w-full p-3.5 rounded-xl bg-[#e9eff6] border-transparent focus:border-[#1f60a2] focus:ring-2 focus:ring-[#1f60a2]/20 transition-all outline-none text-slate-700" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-semibold text-[#164371] mb-2">Telefon</label>
                                    <input type="tel" name="telefon" className="w-full p-3.5 rounded-xl bg-[#e9eff6] border-transparent focus:border-[#1f60a2] focus:ring-2 focus:ring-[#1f60a2]/20 transition-all outline-none text-slate-700" />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-[#164371] mb-2">Konu</label>
                                    <input type="text" name="konu" required className="w-full p-3.5 rounded-xl bg-[#e9eff6] border-transparent focus:border-[#1f60a2] focus:ring-2 focus:ring-[#1f60a2]/20 transition-all outline-none text-slate-700" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-[#164371] mb-2">Mesajınız</label>
                                <textarea name="mesaj" rows={5} required className="w-full p-3.5 rounded-xl bg-[#e9eff6] border-transparent focus:border-[#1f60a2] focus:ring-2 focus:ring-[#1f60a2]/20 transition-all outline-none text-slate-700 resize-none"></textarea>
                            </div>

                            <button type="submit" className="w-full py-4 mt-2 bg-[#164371] hover:bg-[#1f60a2] text-white font-bold text-lg rounded-xl transition-colors shadow-md">
                                Mesaj gönder
                            </button>
                        </form>
                    </div>
                </div>

            </div>
        </main>
    );
}