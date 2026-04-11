import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <div className="font-heading font-black text-xl mb-1">Srichand Classes</div>
            <div className="font-body text-navy-300 text-xs tracking-widest uppercase mb-4">Est. 1958 · Mumbai</div>
            <p className="font-body text-slate-400 text-sm leading-relaxed">
              Trusted coaching for SSC, ICSE, CBSE and Commerce streams across Mumbai for over six decades.
            </p>
          </div>

          {/* Pages */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4 text-slate-300">Pages</h4>
            <ul className="space-y-2.5">
              {[['/', 'Home'], ['/courses', 'Courses'], ['/faculty', 'Faculty'],
                ['/branches', 'Branches'], ['/about', 'About Us'], ['/contact', 'Contact']].map(([to, label]) => (
                <li key={to}>
                  <Link to={to} className="font-body text-slate-400 hover:text-white text-sm transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4 text-slate-300">Courses</h4>
            <ul className="space-y-2.5">
              {['Class VIII–X (School)', 'XI & XII Commerce', 'BCom / BAF / BBI', 'ICSE Coaching', 'CBSE Coaching', 'SSC Coaching'].map(c => (
                <li key={c}>
                  <Link to="/courses" className="font-body text-slate-400 hover:text-white text-sm transition-colors">{c}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4 text-slate-300">Contact</h4>
            <div className="space-y-3">
              {[['Sion (Main)', '98197 73151'], ['Matunga East', '98201 46010'], ['Chembur', '98203 52980']].map(([loc, num]) => (
                <div key={loc}>
                  <div className="font-body text-slate-500 text-xs">{loc}</div>
                  <a href={`tel:+91${num.replace(/\s/g,'')}`}
                     className="font-heading font-semibold text-white hover:text-navy-300 text-sm transition-colors">
                    {num}
                  </a>
                </div>
              ))}
            </div>
            <Link to="/contact" className="inline-block mt-5 btn-white text-sm px-5 py-2.5 text-navy-800">
              Enquire Now
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-body text-slate-500 text-xs">© {new Date().getFullYear()} Srichand Classes, Mumbai. All rights reserved.</p>
          <p className="font-body text-slate-600 text-xs">Sion · Matunga East · Chembur</p>
        </div>
      </div>
    </footer>
  )
}
