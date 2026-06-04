'use client'
import { useLightbox } from './LightboxProvider'

const SRC = '/images/results/ssc-2026/ssc2026.png'

export default function AboutStripImage() {
  const { openLightbox } = useLightbox()

  return (
    <button
      onClick={() => openLightbox([{ src: SRC, title: 'SSC 2026 Results' }], 0)}
      className="rounded-2xl overflow-hidden shadow-lg w-full cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-primary"
      style={{ display: 'block' }}
      aria-label="View SSC 2026 Results"
    >
      <img
        src={SRC}
        alt="SSC 2026 Results"
        style={{ width: '100%', height: 'auto', display: 'block' }}
      />
    </button>
  )
}
