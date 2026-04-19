'use client'
import { useState } from 'react'
import PageBanner from '../../components/PageBanner'
import galleryData from '../../data/galleryData'
import { useLightbox } from '../../components/LightboxProvider'

const ALL_CATS = ['All', ...Array.from(new Set(galleryData.map(i => i.category)))]

export default function Gallery() {
  const [cat, setCat] = useState('All')
  const { openLightbox } = useLightbox()

  const filtered = cat === 'All' ? galleryData : galleryData.filter(i => i.category === cat)
  const cats     = ALL_CATS.filter(c => c === 'All' || galleryData.some(i => i.category === c))

  const open = (i) => openLightbox(filtered, i)

  return (
    <>
      <PageBanner
        tag="Media"
        title="Our Gallery"
        subtitle="A glimpse into life at Srichand Classes — events, achievements and more."
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
                  className={`font-body font-semibold text-sm px-5 py-2.5 rounded-lg transition-all duration-200 ${
                    cat === c
                      ? 'bg-primary text-white shadow-accent'
                      : 'bg-white text-muted border border-slate-200 hover:border-primary hover:text-primary'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          )}

          {/* Grid */}
          {filtered.length === 0 ? (
            <div className="py-20 text-center">
              <div className="text-6xl mb-4">🖼️</div>
              <h3 className="font-heading font-bold text-dark text-xl mb-2">No items in this category</h3>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {filtered.map((item, i) => (
                <button
                  key={i}
                  onClick={() => open(i)}
                  className="relative group rounded-lg overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 aspect-square bg-slate-100 focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  {item.type === 'video' ? (
                    <>
                      <video src={item.src} className="w-full h-full object-cover" muted preload="metadata" />
                      <div className="absolute inset-0 bg-dark/30 flex items-center justify-center">
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

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-primary/55 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 p-3">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"/>
                    </svg>
                    {item.title && (
                      <span className="text-white font-body font-semibold text-xs text-center leading-tight">{item.title}</span>
                    )}
                  </div>
                </button>
              ))}
            </div>
          )}

          {filtered.length > 0 && (
            <p className="text-center font-body text-muted text-sm mt-8">
              {filtered.length} item{filtered.length !== 1 ? 's' : ''}
              {cat !== 'All' ? ` in "${cat}"` : ' total'}
            </p>
          )}
        </div>
      </section>
    </>
  )
}
