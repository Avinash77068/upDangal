import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <div
        className="text-7xl font-black mb-4"
        style={{ color: 'var(--primary, #E8541A)' }}
      >
        404
      </div>
      <h1 className="text-2xl font-extrabold text-gray-800 mb-2">
        पेज नहीं मिला
      </h1>
      <p className="text-gray-500 mb-8 max-w-sm">
        आप जिस पेज को ढूंढ रहे हैं वह उपलब्ध नहीं है। शायद लिंक बदल गया हो या पेज हटा दिया गया हो।
      </p>
      <Link
        href="/"
        className="px-6 py-3 rounded-full text-white font-bold text-sm transition-opacity hover:opacity-90"
        style={{ background: 'var(--primary, #E8541A)' }}
      >
        ← होमपेज पर जाएं
      </Link>
    </div>
  )
}
