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
          <p className="font-body text-slate-500 text-xs">© {new Date().getFullYear()} Srichand Classes, Mumbai. All rights reserved.</p>
          <p className="font-body text-slate-600 text-xs">Sion · Kurla · Matunga · Chembur</p>
        </div>
      </div>
    </footer>
  )
}
