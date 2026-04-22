'use client'
import Link from 'next/link'
import { useLightbox } from './LightboxProvider'

const RESULT_IMGS = [
  { src: '/images/results/ssc-2025/WhatsApp Image 2026-04-17 at 2.33.12 PM.jpeg',                          title: 'SSC 2025' },
  { src: '/images/results/olgc/2025/WhatsApp Image 2026-04-17 at 2.33.12 PM.jpeg',                         title: 'OLGC 2025' },
  { src: '/images/results/account_toppers/WhatsApp Image 2026-04-22 at 9.09.58 AM.jpeg',                   title: 'Accounts Toppers' },
  { src: '/images/results/harsh classes topper/WhatsApp Image 2026-04-17 at 2.33.05 PM.jpeg',              title: 'SIES 2025' },
  { src: '/images/results/ssc-2024/WhatsApp Image 2026-04-17 at 2.33.05 PM.jpeg',                          title: 'SSC 2024' },
  { src: '/images/results/ds/WhatsApp Image 2026-04-17 at 2.33.15 PM.jpeg',                                title: 'D.S.' },
  { src: '/images/results/fatima/WhatsApp Image 2026-04-17 at 2.33.12 PM.jpeg',                            title: 'Fatima' },
  { src: '/images/results/gurunanak/WhatsApp Image 2026-04-17 at 2.33.10 PM.jpeg',                         title: 'Guru Nanak' },
  { src: '/images/results/olgc/2024/WhatsApp Image 2026-04-17 at 2.33.11 PM.jpeg',                         title: 'OLGC 2024' },
]

export default function ResultsSection() {
  const { openLightbox } = useLightbox()

  return (
    <section className="py-20 bg-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-brand-gradient opacity-5" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="section-tag text-secondary">Academic Success</span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-white">Results That Define Excellence</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {[
            { icon: '🏅', title: 'School Toppers', sub: 'Every Year' },
            { icon: '📈', title: '90%+ Results',  sub: 'Consistent across boards' },
            { icon: '⭐', title: '4.6 / 5 Rating', sub: 'Parent satisfaction' },
          ].map(r => (
            <div key={r.title} className="flex gap-4 items-center bg-white/5 border border-white/10 rounded-2xl px-6 py-5">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-2xl flex-shrink-0">{r.icon}</div>
              <div>
                <div className="font-heading font-bold text-white text-lg">{r.title}</div>
                <div className="font-body text-slate-400 text-sm">{r.sub}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Results photo grid — clickable */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
          {RESULT_IMGS.map((r, i) => (
            <button
              key={r.title}
              onClick={() => openLightbox(RESULT_IMGS, i)}
              className="relative rounded-xl overflow-hidden group focus:outline-none focus:ring-2 focus:ring-white/50"
              style={{ aspectRatio: '4/3' }}
            >
              <img
                src={r.src}
                alt={`${r.title} results`}
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }}
                className="group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/30 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-9 h-9 rounded-full bg-white/90 flex items-center justify-center">
                  <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m3-3v3m-3 0h3" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 px-3 py-2">
                <span className="font-body font-semibold text-white text-xs">{r.title}</span>
              </div>
            </button>
          ))}
        </div>

        <div className="text-center">
          <Link href="/rankers" className="btn-white text-primary inline-block">View Our Rankers →</Link>
        </div>
      </div>
    </section>
  )
}
