'use client'
import { useLightbox } from './LightboxProvider'

const SRC = '/images/results/ssc-2025/WhatsApp Image 2026-04-17 at 2.33.12 PM.jpeg'

export default function AboutStripImage() {
  const { openLightbox } = useLightbox()

  return (
    <button
      onClick={() => openLightbox([{ src: SRC, title: 'SSC 2025 Results' }], 0)}
      className="rounded-2xl overflow-hidden shadow-lg w-full cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-primary"
      style={{ display: 'block' }}
      aria-label="View SSC 2025 Results"
    >
      <img
        src={SRC}
        alt="SSC 2025 Results"
        style={{ width: '100%', height: 'auto', display: 'block' }}
      />
    </button>
  )
}
