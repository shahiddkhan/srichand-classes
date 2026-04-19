'use client'
import { createContext, useContext, useState, useCallback, useEffect } from 'react'

const LightboxCtx = createContext(null)

export function useLightbox() {
  return useContext(LightboxCtx)
}

function LightboxModal({ images, index, onClose, onPrev, onNext }) {
  const item  = images[index]
  const multi = images.length > 1

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center animate-fade-in"
      style={{ background: 'rgba(6, 12, 26, 0.96)', backdropFilter: 'blur(10px)' }}
      onClick={onClose}
    >
      {/* Close */}
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center text-white transition-all hover:scale-110"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Counter */}
      {multi && (
        <div className="absolute top-5 left-1/2 -translate-x-1/2 font-body text-white/50 text-xs tracking-widest tabular-nums select-none">
          {index + 1} / {images.length}
        </div>
      )}

      {/* Prev */}
      {multi && (
        <button
          onClick={e => { e.stopPropagation(); onPrev() }}
          aria-label="Previous image"
          className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center text-white transition-all hover:scale-110"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}

      {/* Next */}
      {multi && (
        <button
          onClick={e => { e.stopPropagation(); onNext() }}
          aria-label="Next image"
          className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center text-white transition-all hover:scale-110"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}

      {/* Image — wrapper zooms only on initial mount; image fades on nav */}
      <div
        className="flex flex-col items-center w-full max-w-5xl px-4 sm:px-16 animate-zoom-in"
        onClick={e => e.stopPropagation()}
        style={{ animationFillMode: 'both' }}
      >
        <img
          key={index}
          src={item.src}
          alt={item.alt || item.title || ''}
          className="max-h-[84vh] max-w-full rounded-xl shadow-2xl"
          style={{ objectFit: 'contain', animation: 'fadeIn 0.22s ease forwards' }}
        />
        {(item.title || item.alt) && (
          <p
            key={'cap-' + index}
            className="font-body text-white/45 text-xs mt-4 text-center leading-relaxed max-w-lg"
          >
            {item.title || item.alt}
          </p>
        )}
      </div>
    </div>
  )
}

export function LightboxProvider({ children }) {
  const [state, setState] = useState({ images: [], index: 0, open: false })

  const openLightbox = useCallback((images, index = 0) => {
    const normalized = images.map(img =>
      typeof img === 'string' ? { src: img } : img
    )
    setState({ images: normalized, index, open: true })
  }, [])

  const closeLightbox = useCallback(() =>
    setState(s => ({ ...s, open: false })), [])

  const next = useCallback(() =>
    setState(s => ({ ...s, index: (s.index + 1) % s.images.length })), [])

  const prev = useCallback(() =>
    setState(s => ({ ...s, index: (s.index - 1 + s.images.length) % s.images.length })), [])

  useEffect(() => {
    if (!state.open) return
    const handle = e => {
      if (e.key === 'Escape')     closeLightbox()
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft')  prev()
    }
    document.addEventListener('keydown', handle)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handle)
      document.body.style.overflow = ''
    }
  }, [state.open, closeLightbox, next, prev])

  return (
    <LightboxCtx.Provider value={{ openLightbox, closeLightbox }}>
      {children}
      {state.open && (
        <LightboxModal
          images={state.images}
          index={state.index}
          onClose={closeLightbox}
          onPrev={prev}
          onNext={next}
        />
      )}
    </LightboxCtx.Provider>
  )
}
