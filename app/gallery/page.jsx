'use client'
import { useState, useEffect } from 'react'
import PageBanner from '../../components/PageBanner'
import galleryData from '../../data/galleryData'

const ALL_CATS = ['All', ...Array.from(new Set(galleryData.map(i => i.category)))]

function Lightbox({ item, onClose, onPrev, onNext }) {
  useEffect(() => {
    const fn = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    window.addEventListener('keydown', fn)
    return () => window.removeEventListener('keydown', fn)
  }, [onClose, onPrev, onNext])

  if (!item) return null

  return (
    <div
      className="fixed inset-0 z-50 bg-dark/90 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white text-2xl font-bold transition"
      >×</button>

      <button
        onClick={(e) => { e.stopPropagation(); onPrev() }}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white text-xl transition"
      >‹</button>

      <button
        onClick={(e) => { e.stopPropagation(); onNext() }}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white text-xl transition"
      >›</button>

      <div className="max-w-4xl w-full" onClick={e => e.stopPropagation()}>
        {item.type === 'video' ? (
          <video
            src={item.src}
            controls
            autoPlay
            className="w-full rounded-2xl max-h-[80vh] object-contain bg-black"
          />
        ) : (
          <img
            src={item.src}
            alt={item.title || 'Gallery image'}
            className="w-full rounded-2xl max-h-[80vh] object-contain"
          />
        )}
        {item.title && (
          <p className="text-center text-white/80 font-body text-sm mt-4">{item.title}</p>
        )}
      </div>
    </div>
  )
}

function EmptyGallery() {
  return (
    <div className="col-span-full py-20 text-center">
      <div className="text-7xl mb-5">🖼️</div>
      <h3 className="font-heading font-bold text-dark text-2xl mb-3">Gallery Coming Soon</h3>
      <p className="font-body text-muted text-base max-w-md mx-auto mb-6">
        Photos and videos are being added. Place your images in{' '}
        <code className="bg-slate-100 text-primary px-2 py-0.5 rounded text-sm">/public/gallery/images/</code>{' '}
        and videos in{' '}
        <code className="bg-slate-100 text-primary px-2 py-0.5 rounded text-sm">/public/gallery/videos/</code>
        , then add entries to{' '}
        <code className="bg-slate-100 text-primary px-2 py-0.5 rounded text-sm">data/galleryData.js</code>.
      </p>
      <div className="inline-block bg-slate-100 rounded-2xl p-6 text-left font-mono text-xs text-slate-600 max-w-sm">
        {'{'}<br />
        &nbsp;&nbsp;type: <span className="text-green-600">"image"</span>,<br />
        &nbsp;&nbsp;title: <span className="text-green-600">"Classroom Teaching"</span>,<br />
        &nbsp;&nbsp;category: <span className="text-green-600">"Classroom"</span>,<br />
        &nbsp;&nbsp;src: <span className="text-green-600">"/gallery/images/img1.jpg"</span><br />
        {'}'}
      </div>
    </div>
  )
}

export default function Gallery() {
  const [cat,    setCat]    = useState('All')
  const [active, setActive] = useState(null)
  const [idx,    setIdx]    = useState(0)

  const filtered = cat === 'All' ? galleryData : galleryData.filter(i => i.category === cat)
  const cats     = ALL_CATS.filter(c => c === 'All' || galleryData.some(i => i.category === c))

  const openAt = (i) => { setIdx(i); setActive(filtered[i]) }
  const prev   = () => { const i = (idx - 1 + filtered.length) % filtered.length; openAt(i) }
  const next   = () => { const i = (idx + 1) % filtered.length; openAt(i) }

  return (
    <>
      <PageBanner
        tag="Media"
        title="Our Gallery"
        subtitle="A glimpse into life at Srichand Classes — classrooms, events, achievements and more."
      />

      <section className="py-16 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Category filters */}
          {cats.length > 1 && (
            <div className="flex flex-wrap gap-3 justify-center mb-10">
              {cats.map(c => (
                <button
                  key={c}
                  onClick={() => setCat(c)}
                  className={`font-heading font-semibold text-sm px-5 py-2.5 rounded-xl transition-all ${
                    cat === c
                      ? 'bg-brand-gradient text-white shadow-md'
                      : 'bg-white text-muted border border-slate-200 hover:border-primary hover:text-primary'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          )}

          {/* Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.length === 0 ? (
              <EmptyGallery />
            ) : (
              filtered.map((item, i) => (
                <button
                  key={i}
                  onClick={() => openAt(i)}
                  className="relative group rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 aspect-square bg-slate-100"
                >
                  {item.type === 'video' ? (
                    <>
                      <video
                        src={item.src}
                        className="w-full h-full object-cover"
                        muted
                        preload="metadata"
                      />
                      <div className="absolute inset-0 bg-dark/30 flex items-center justify-center opacity-80 group-hover:opacity-100 transition">
                        <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                          <svg className="w-5 h-5 text-primary ml-1" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
                          </svg>
                        </div>
                      </div>
                    </>
                  ) : (
                    <img
                      src={item.src}
                      alt={item.title || ''}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  )}

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 p-3">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"/>
                    </svg>
                    {item.title && (
                      <span className="text-white font-heading font-semibold text-xs text-center leading-tight">
                        {item.title}
                      </span>
                    )}
                  </div>
                </button>
              ))
            )}
          </div>

          {filtered.length > 0 && (
            <p className="text-center font-body text-muted text-sm mt-8">
              Showing {filtered.length} item{filtered.length !== 1 ? 's' : ''}
              {cat !== 'All' ? ` in "${cat}"` : ''}
            </p>
          )}
        </div>
      </section>

      <Lightbox item={active} onClose={() => setActive(null)} onPrev={prev} onNext={next} />
    </>
  )
}
