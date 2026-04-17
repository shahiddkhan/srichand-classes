'use client'
import { useEffect, useRef, useState } from 'react'

const STATS = [
  { value: 68,    suffix: '+',  label: 'Years of Legacy',    icon: '🏛️' },
  { value: 10000, suffix: '+',  label: 'Students Mentored',  icon: '🎓' },
  { value: 4,     suffix: '',   label: 'Mumbai Branches',    icon: '📍' },
  { value: 98,    suffix: '%',  label: 'Student Satisfaction',icon: '⭐' },
]

function Counter({ value, suffix, started }) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!started) return
    let t0 = null
    const duration = 1600
    const tick = (ts) => {
      if (!t0) t0 = ts
      const p = Math.min((ts - t0) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setCount(Math.floor(eased * value))
      if (p < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [started, value])
  return <span>{count.toLocaleString()}{suffix}</span>
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
              <div key={s.label} className="text-center p-8">
                <div className="text-3xl mb-3">{s.icon}</div>
                <div className="font-heading font-black text-4xl text-primary">
                  <Counter value={s.value} suffix={s.suffix} started={started} />
                </div>
                <div className="font-body text-muted text-sm mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
