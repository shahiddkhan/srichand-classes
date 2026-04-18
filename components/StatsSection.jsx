'use client'
import { useEffect, useRef, useState } from 'react'

const STATS = [
  { value: 68,    suffix: '+',  label: 'Years of Legacy',      icon: '🏛️' },
  { value: 10000, suffix: '+',  label: 'Students Mentored',    icon: '🎓' },
  { value: 4,     suffix: '',   label: 'Mumbai Branches',      icon: '📍' },
  { value: 4.6,   suffix: '★',  label: 'Google Rating',        icon: '⭐' },
]

function Counter({ value, suffix, started }) {
  const [count, setCount] = useState(0)
  const isDecimal = !Number.isInteger(value)

  useEffect(() => {
    if (!started) return
    let t0 = null
    const duration = 1600
    const tick = (ts) => {
      if (!t0) t0 = ts
      const p    = Math.min((ts - t0) / duration, 1)
      const ease = 1 - Math.pow(1 - p, 3)
      const cur  = ease * value
      setCount(isDecimal ? parseFloat(cur.toFixed(1)) : Math.floor(cur))
      if (p < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [started, value, isDecimal])

  return (
    <span className="stat-number">
      {isDecimal ? count.toFixed(1) : count.toLocaleString()}{suffix}
    </span>
  )
}

export default function StatsSection() {
  const ref     = useRef(null)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setStarted(true); obs.disconnect() } },
      { threshold: 0.3 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section className="py-16 bg-bg" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="card overflow-hidden">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-slate-100">
            {STATS.map(s => (
              <div key={s.label} className="text-center p-6 sm:p-8">
                <div className="text-3xl mb-3">{s.icon}</div>
                <div
                  className="font-heading font-black text-primary leading-none mb-1"
                  style={{ fontSize: 'clamp(1.6rem, 4vw, 2.5rem)' }}
                >
                  <Counter value={s.value} suffix={s.suffix} started={started} />
                </div>
                <div className="font-body text-muted text-xs sm:text-sm mt-1 leading-snug">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
