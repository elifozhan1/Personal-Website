import Link from 'next/link';

export default function IletisimSayfasi() {
    return (
        <main className="min-h-screen font-sans text-slate-800 bg-[#faf8f4] pt-32 pb-24">

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
                                <p className="text-slate-600 mt-1">0264 279 04 55</p>
                            </div>
                        </div>

                        {/* Kutucuk 2: E-Posta */}
                        <div className="flex items-center gap-5 p-5 bg-white rounded-xl shadow-sm border border-slate-100">
                            <div className="w-12 h-12 flex items-center justify-center bg-[#e9eff6] rounded-full text-[#1f60a2] shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                            </div>
                            <div>
                                <h4 className="font-bold text-[#164371]">E-Posta</h4>
                                <p className="text-slate-600 mt-1">drhakanozhan@gmail.com</p>
                            </div>
                        </div>

                        {/* Kutucuk 3: Adres */}
                        <div className="flex items-center gap-5 p-5 bg-white rounded-xl shadow-sm border border-slate-100">
                            <div className="w-12 h-12 flex items-center justify-center bg-[#e9eff6] rounded-full text-[#1f60a2] shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                            </div>
                            <div>
                                <h4 className="font-bold text-[#164371]">Adres</h4>
                                <p className="text-slate-600 mt-1">Yenidoğan, Milli Egemenlik Cd. NO : 89, 54100 Adapazarı/Sakarya</p>
                            </div>
                        </div>

                        {/* Kutucuk 4: Sosyal Medya */}
                        <div className="flex items-center gap-5 p-5 bg-white rounded-xl shadow-sm border border-slate-100">
                            <div className="w-12 h-12 flex items-center justify-center bg-[#e9eff6] rounded-full text-[#1f60a2] shrink-0">
                                {/* YENİ İKON: Küresel Ağ / Dünya */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="10" />
                                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                                    <path d="M2 12h20" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="font-bold text-[#164371]">Sosyal Medya</h4>
                                <div className="flex gap-4 mt-2">
                                    <a href="https://instagram.com/prof.dr.hakanozhan" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-[#1f60a2] transition-colors">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                                    </a>
                                    <a href="https://tr.linkedin.com/in/prof-dr-hakan-%C3%B6zhan-72943525" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-[#1f60a2] transition-colors">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Google Haritalar İframe */}
                    <div className="w-full h-80 rounded-2xl overflow-hidden shadow-sm border border-slate-100 bg-white">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.617451830356!2d30.391098600000003!3d40.7704379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ccb321a58244c7%3A0x69025aa364335fcb!2sProf%20Dr.%20Hakan%20%C3%96zhan!5e0!3m2!1str!2str!4v1789825794600!5m2!1str!2str"
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

                    {/* Başlıklar beyaz kutunun dışına, sol tarafın başlığıyla aynı hizaya alındı */}
                    <h3 className="text-3xl font-bold text-[#164371] mb-3">İletişim Formu</h3>
                    <p className="text-slate-600 mb-8">Mesajınızı bırakın, en kısa sürede size dönüş yapalım.</p>

                    {/* Beyaz form kutucuğu (Sol taraftaki Telefon kutusu ile aynı hizadan başlar) */}
                    <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-slate-100 flex-1">

                        <form action="https://api.web3forms.com/submit" method="POST" className="space-y-6">
                            <input type="hidden" name="access_key" value="SİZİN_WEB3FORMS_ANAHTARINIZ" />

                            {/* Satır 1: Ad Soyad & E-Posta Yan Yana */}
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

                            {/* Satır 2: Telefon & Konu Yan Yana */}
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

                            {/* Satır 3: Mesaj */}
                            <div>
                                <label className="block text-sm font-semibold text-[#164371] mb-2">Mesajınız</label>
                                <textarea name="mesaj" rows={5} required className="w-full p-3.5 rounded-xl bg-[#e9eff6] border-transparent focus:border-[#1f60a2] focus:ring-2 focus:ring-[#1f60a2]/20 transition-all outline-none text-slate-700 resize-none"></textarea>
                            </div>

                            {/* Gönder Butonu */}
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