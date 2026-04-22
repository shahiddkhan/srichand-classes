import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <div className="font-heading font-black text-2xl text-white mb-1">Srichand Classes</div>
            <div className="font-body text-secondary text-xs tracking-widest uppercase mb-4">Est. 1958 · Mumbai</div>
            <p className="font-body text-slate-400 text-sm leading-relaxed">
              68 years of academic excellence. Expert coaching for school, junior college and degree students across Mumbai.
            </p>
            <a
              href="https://instagram.com/srichandclassesofficial"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 font-body text-sm text-slate-400 hover:text-white transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              @srichandclassesofficial
            </a>
          </div>

          {/* Pages */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4 text-slate-300">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                ['/', 'Home'], ['/courses', 'Courses'], ['/faculty', 'Faculty'],
                ['/gallery', 'Gallery'], ['/rankers', 'Rankers'], ['/movie', 'Movie'],
                ['/branches', 'Branches'], ['/about', 'About'], ['/contact', 'Contact'],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="font-body text-slate-400 hover:text-white text-sm transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4 text-slate-300">Courses</h4>
            <ul className="space-y-2.5">
              {['School (VIII–X)', 'Jr. College Commerce', 'Jr. College Science', 'CA Foundation', 'ACCA', 'JEE / NEET / MHTCET'].map(c => (
                <li key={c}>
                  <Link href="/courses" className="font-body text-slate-400 hover:text-white text-sm transition-colors">{c}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Branches */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4 text-slate-300">Our Branches</h4>
            <div className="space-y-3">
              {[
                { name: 'Sion',     phone: '9820146010' },
                { name: 'Kurla',    phone: '9920352980' },
                { name: 'Matunga',  phone: '9820352980' },
                { name: 'Chembur',  phone: '9820352975' },
              ].map(b => (
                <div key={b.name}>
                  <div className="font-body text-slate-500 text-xs">{b.name}</div>
                  <a href={`tel:+91${b.phone}`} className="font-heading font-semibold text-white hover:text-secondary text-sm transition-colors">
                    +91 {b.phone.slice(0, 5)} {b.phone.slice(5)}
                  </a>
                </div>
              ))}
            </div>
            <div className="mt-5 pt-4 border-t border-white/10">
              <div className="font-body text-slate-500 text-xs mb-1">Office Hours</div>
              <div className="font-body text-slate-300 text-xs leading-relaxed">
                Mon – Sat: 11:00 AM – 8:00 PM
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between gap-2">
          <p className="font-body text-slate-500 text-xs">© Srichand Classes, Mumbai. All rights reserved.</p>
          <p className="font-body text-slate-600 text-xs">Sion · Kurla · Matunga · Chembur</p>
        </div>
      </div>
    </footer>
  )
}
