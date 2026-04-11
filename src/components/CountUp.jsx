import React, { useEffect, useRef, useState } from 'react'

function useCountUp(end, duration, started) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!started) return
    let t0 = null
    const isFloat = !Number.isInteger(end)
    const tick = (ts) => {
      if (!t0) t0 = ts
      const p = Math.min((ts - t0) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setVal(isFloat ? parseFloat((eased * end).toFixed(1)) : Math.floor(eased * end))
      if (p < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [started, end, duration])
  return val
}

export function StatCard({ value, suffix, label, icon, started }) {
  const num = useCountUp(value, 1600, started)
  return (
    <div className="text-center p-6">
      <div className="text-3xl mb-3">{icon}</div>
      <div className="font-heading font-black text-4xl text-navy-800">
        {num}<span className="text-navy-500">{suffix}</span>
      </div>
      <div className="font-body text-slate-500 text-sm mt-1">{label}</div>
    </div>
  )
}

export function StatsGrid({ stats }) {
  const ref = useRef(null)
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
    <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-slate-100">
      {stats.map(s => <StatCard key={s.label} {...s} started={started} />)}
    </div>
  )
}
