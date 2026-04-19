'use client'
import PageBanner from '../../components/PageBanner'
import { useLightbox } from '../../components/LightboxProvider'

const MOVIE_IMAGES = [
  '/images/movie/WhatsApp Image 2026-04-15 at 11.46.00 AM.jpeg',
  '/images/movie/WhatsApp Image 2026-04-15 at 11.46.00 AM (1).jpeg',
  '/images/movie/WhatsApp Image 2026-04-15 at 11.46.00 AM (2).jpeg',
  '/images/movie/WhatsApp Image 2026-04-15 at 11.46.00 AM (3).jpeg',
  '/images/movie/WhatsApp Image 2026-04-15 at 11.46.01 AM.jpeg',
]

const IMAGES_OBJ = MOVIE_IMAGES.map((src, i) => ({ src, title: `Movie Outing ${i + 1}` }))

export default function Movie() {
  const { openLightbox } = useLightbox()

  return (
    <>
      <PageBanner
        tag="Student Life"
        title="Movie Outing"
        subtitle="A fun outing with Srichand Classes students — cherishing memories together."
      />

      <section className="py-16 bg-bg">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Main feature image */}
          <div
            className="rounded-2xl overflow-hidden shadow-lg mb-6 cursor-zoom-in relative group"
            style={{ aspectRatio: '16/9' }}
            onClick={() => openLightbox(IMAGES_OBJ, 0)}
          >
            <img
              src={MOVIE_IMAGES[0]}
              alt="Movie outing"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
            />
            <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/20 transition-all duration-300 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m3-3v3m-3 0h3" />
                </svg>
              </div>
            </div>
          </div>

          {/* Secondary grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {MOVIE_IMAGES.slice(1).map((src, i) => (
              <div
                key={i}
                className="rounded-xl overflow-hidden shadow-card cursor-zoom-in relative group"
                style={{ aspectRatio: '1' }}
                onClick={() => openLightbox(IMAGES_OBJ, i + 1)}
              >
                <img
                  src={src}
                  alt={`Movie outing ${i + 2}`}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
                  className="group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/25 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-9 h-9 rounded-full bg-white/90 flex items-center justify-center">
                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m3-3v3m-3 0h3" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Caption */}
          <div className="mt-10 card p-7 text-center">
            <h2 className="font-heading font-bold text-dark text-xl mb-3">A Day to Remember</h2>
            <p className="font-body text-muted text-base max-w-xl mx-auto leading-relaxed">
              Beyond academics, Srichand Classes believes in creating joyful memories. Our movie outings are a chance for students and faculty to bond, relax and celebrate together.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
