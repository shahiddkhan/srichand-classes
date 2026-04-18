import PageBanner from '../../components/PageBanner'

const MOVIE_IMAGES = [
  '/images/movie/WhatsApp Image 2026-04-15 at 11.46.00 AM.jpeg',
  '/images/movie/WhatsApp Image 2026-04-15 at 11.46.00 AM (1).jpeg',
  '/images/movie/WhatsApp Image 2026-04-15 at 11.46.00 AM (2).jpeg',
  '/images/movie/WhatsApp Image 2026-04-15 at 11.46.00 AM (3).jpeg',
  '/images/movie/WhatsApp Image 2026-04-15 at 11.46.01 AM.jpeg',
]

export default function Movie() {
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
          <div className="rounded-2xl overflow-hidden shadow-lg mb-6" style={{ aspectRatio: '16/9' }}>
            <img
              src={MOVIE_IMAGES[0]}
              alt="Movie outing"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
            />
          </div>

          {/* Secondary grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {MOVIE_IMAGES.slice(1).map((src, i) => (
              <div key={i} className="rounded-xl overflow-hidden shadow-card" style={{ aspectRatio: '1' }}>
                <img
                  src={src}
                  alt={`Movie outing ${i + 2}`}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
                  className="hover:scale-105 transition-transform duration-500"
                />
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
