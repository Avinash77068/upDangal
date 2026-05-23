import Link from 'next/link'
import { navCategories } from '@/data/categories'

const footerLinks = {
  Company: ['About Us', 'Careers', 'Press Room', 'Contact'],
  Support: ['Help Center', 'Privacy Policy', 'Terms of Service', 'Cookie Policy'],
  Products: ['UpDangal TV', 'E-Paper', 'Mobile App', 'Newsletters'],
  Follow: ['Facebook', 'Twitter/X', 'Instagram', 'YouTube'],
}

export default function Footer() {
  return (
    <footer style={{ background: 'var(--nav-bg)' }} className="mt-12">
      {/* Top footer */}
      <div className="max-w-screen-xl mx-auto px-4 lg:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center font-black text-white text-xl"
                style={{ background: 'var(--primary)' }}
              >
                उ
              </div>
              <div className="text-white">
                <div className="text-xl font-black">UpDangal</div>
                <div className="text-[10px] text-white/40 tracking-widest uppercase">भारत की आवाज़</div>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-4">
              भारत का सबसे विश्वसनीय डिजिटल समाचार मंच। ताज़ा खबरें, विश्लेषण और सच्ची पत्रकारिता।
            </p>
            <div className="flex gap-3">
              {['f', 'X', 'in', 'YT'].map((s) => (
                <div
                  key={s}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white/80 hover:text-white cursor-pointer transition-colors"
                  style={{ background: 'rgba(255,255,255,0.08)' }}
                >
                  {s}
                </div>
              ))}
            </div>
          </div>

          {/* Category links */}
          <div>
            <h4 className="text-white font-bold text-sm mb-3 uppercase tracking-wide">विषय</h4>
            <ul className="space-y-2">
              {navCategories.slice(0, 6).map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={`/${cat.slug}`}
                    className="text-white/50 hover:text-white text-sm transition-colors flex items-center gap-1.5"
                  >
                    <span className="w-1 h-1 rounded-full" style={{ background: cat.color }} />
                    {cat.nameHindi}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Other link columns */}
          {Object.entries(footerLinks).slice(0, 3).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-bold text-sm mb-3 uppercase tracking-wide">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-white/50 hover:text-white text-sm transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="border-t px-4 lg:px-6 py-4"
        style={{ borderColor: 'rgba(255,255,255,0.08)' }}
      >
        <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-white/40 text-xs">
          <span>© 2026 UpDangal. All rights reserved. | भारत में निर्मित 🇮🇳</span>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-white/70 transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-white/70 transition-colors">Terms</Link>
            <Link href="#" className="hover:text-white/70 transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
