import Link from 'next/link';

export default function RandevuSayfasi() {
  return (
    <main className="min-h-screen bg-slate-50 py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-blue-900 mb-6">Randevu Alın</h1>
        <p className="text-slate-600 mb-8">Bu sayfada randevu formu veya iletişim bilgileri yer alacak.</p>
        
        {/* Ana sayfaya dönmek için bir buton */}
        <Link href="/" className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
          Ana Sayfaya Dön
        </Link>
      </div>
    </main>
  );
}