'use client'
import Link from 'next/link'
import PageBanner from '../../components/PageBanner'
import { useLightbox } from '../../components/LightboxProvider'

const SCHOOL_RESULTS = [
  { label: 'OLGC 2025',     src: '/images/results/olgc/2025/WhatsApp Image 2026-04-17 at 2.33.12 PM.jpeg' },
  { label: 'OLGC 2024',     src: '/images/results/olgc/2024/WhatsApp Image 2026-04-17 at 2.33.11 PM.jpeg' },
  { label: 'Guru Nanak',    src: '/images/results/gurunanak/WhatsApp Image 2026-04-17 at 2.33.10 PM.jpeg' },
  { label: 'D.S.',          src: '/images/results/ds/WhatsApp Image 2026-04-17 at 2.33.15 PM.jpeg' },
  { label: 'Fatima',        src: '/images/results/fatima/WhatsApp Image 2026-04-17 at 2.33.12 PM.jpeg' },
  { label: 'Class Topper',  src: '/images/results/harsh classes topper/WhatsApp Image 2026-04-17 at 2.33.05 PM.jpeg' },
  { label: 'SSC 2025',      src: '/images/results/ssc-2025/WhatsApp Image 2026-04-17 at 2.33.12 PM.jpeg' },
  { label: 'SSC 2024',      src: '/images/results/ssc-2024/WhatsApp Image 2026-04-17 at 2.33.05 PM.jpeg' },
]

const INDIVIDUAL_RESULTS = [
  '/images/results/individual image/WhatsApp Image 2026-04-17 at 2.33.06 PM.jpeg',
  '/images/results/individual image/WhatsApp Image 2026-04-17 at 2.33.06 PM (1).jpeg',
  '/images/results/individual image/WhatsApp Image 2026-04-17 at 2.33.06 PM (2).jpeg',
  '/images/results/individual image/WhatsApp Image 2026-04-17 at 2.33.07 PM.jpeg',
  '/images/results/individual image/WhatsApp Image 2026-04-17 at 2.33.07 PM (1).jpeg',
  '/images/results/individual image/WhatsApp Image 2026-04-17 at 2.33.07 PM (2).jpeg',
  '/images/results/individual image/WhatsApp Image 2026-04-17 at 2.33.08 PM.jpeg',
  '/images/results/individual image/WhatsApp Image 2026-04-17 at 2.33.08 PM (1).jpeg',
  '/images/results/individual image/WhatsApp Image 2026-04-17 at 2.33.09 PM.jpeg',
  '/images/results/individual image/WhatsApp Image 2026-04-17 at 2.33.09 PM (1).jpeg',
  '/images/results/individual image/WhatsApp Image 2026-04-17 at 2.33.10 PM.jpeg',
  '/images/results/individual image/WhatsApp Image 2026-04-17 at 2.33.10 PM (1).jpeg',
  '/images/results/individual image/WhatsApp Image 2026-04-17 at 2.33.11 PM.jpeg',
  '/images/results/individual image/WhatsApp Image 2026-04-17 at 2.33.11 PM (1).jpeg',
  '/images/results/individual image/WhatsApp Image 2026-04-17 at 2.33.13 PM.jpeg',
  '/images/results/individual image/WhatsApp Image 2026-04-17 at 2.33.13 PM (1).jpeg',
  '/images/results/individual image/WhatsApp Image 2026-04-17 at 2.33.14 PM.jpeg',
  '/images/results/individual image/WhatsApp Image 2026-04-17 at 2.33.14 PM (1).jpeg',
  '/images/results/individual image/WhatsApp Image 2026-04-17 at 2.33.15 PM.jpeg',
  '/images/results/individual image/WhatsApp Image 2026-04-17 at 2.33.15 PM (1).jpeg',
]

const SCHOOL_LIGHTBOX  = SCHOOL_RESULTS.map(r  => ({ src: r.src,  title: r.label }))
const INDIV_LIGHTBOX   = INDIVIDUAL_RESULTS.map((src, i) => ({ src, title: `Student Achievement ${i + 1}` }))

export default function Rankers() {
  const { openLightbox } = useLightbox()

  return (
    <>
      <PageBanner
        tag="Hall of Fame"
        title="Our Rankers"
        subtitle="Celebrating the outstanding academic achievements of Srichand Classes students."
      />

      {/* Stats strip */}
      <section className="py-10 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-6 max-w-lg mx-auto text-center">
            {[
              { value: '50,000+', label: 'Students Mentored' },
              { value: '68+',     label: 'Years of Results'  },
              { value: '4.6 ★',   label: 'Google Rating'    },
            ].map(s => (
              <div key={s.label}>
                <div className="font-heading font-black text-3xl text-primary">{s.value}</div>
                <div className="font-body text-muted text-xs mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* School-wise results */}
      <section className="py-16 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="section-tag">School Results</span>
            <h2 className="section-title">Results Across Schools</h2>
            <p className="font-body text-muted text-base mt-3 max-w-lg mx-auto">
              Our students consistently top their schools across Mumbai. Here are some of our proudest results.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {SCHOOL_RESULTS.map((r, i) => (
              <button
                key={r.label}
                onClick={() => openLightbox(SCHOOL_LIGHTBOX, i)}
                className="card overflow-hidden group cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-primary text-left"
              >
                <div className="relative" style={{ aspectRatio: '4/3' }}>
                  <img
                    src={r.src}
                    alt={r.label}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    className="group-hover:scale-105 transition-transform duration-500"
                    onError={e => { e.target.style.opacity = '0.3' }}
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity w-9 h-9 rounded-full bg-white/90 flex items-center justify-center">
                      <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m3-3v3m-3 0h3" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-3 text-center">
                  <span className="font-body font-semibold text-dark text-sm">{r.label}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Individual achievements */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="section-tag">Individual Achievers</span>
            <h2 className="section-title">Student Achievements</h2>
            <p className="font-body text-muted text-base mt-3 max-w-lg mx-auto">
              Individual result cards from our top-performing students — proof of dedication and hard work.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {INDIVIDUAL_RESULTS.map((src, i) => (
              <button
                key={i}
                onClick={() => openLightbox(INDIV_LIGHTBOX, i)}
                className="card overflow-hidden group cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-primary relative"
                style={{ aspectRatio: '3/4' }}
              >
                <img
                  src={src}
                  alt={`Student achievement ${i + 1}`}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
                  className="group-hover:scale-105 transition-transform duration-500"
                  onError={e => { e.target.style.opacity = '0.3' }}
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity w-9 h-9 rounded-full bg-white/90 flex items-center justify-center">
                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m3-3v3m-3 0h3" />
                    </svg>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-brand-gradient text-center">
        <h2 className="font-heading font-bold text-white text-2xl md:text-3xl mb-4">
          Could Your Child Be Next?
        </h2>
        <p className="font-body text-white/80 text-lg mb-8">
          Join Srichand Classes and give your child the best academic foundation.
        </p>
        <Link href="/contact" className="btn-white text-primary inline-block px-10 py-3.5">
          Enquire Now
        </Link>
      </section>
    </>
  )
}
