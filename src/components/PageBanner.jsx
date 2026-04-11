import React from 'react'

export default function PageBanner({ tag, title, subtitle }) {
  return (
    <section className="pt-28 pb-16 bg-gradient-to-br from-navy-950 via-navy-800 to-navy-900 relative overflow-hidden">
      {/* Subtle grid decoration */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {tag && (
          <span className="inline-block bg-white/10 text-white/80 font-body text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            {tag}
          </span>
        )}
        <h1 className="font-heading font-bold text-3xl md:text-5xl text-white leading-tight mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="font-body text-navy-200 text-lg max-w-2xl mx-auto">{subtitle}</p>
        )}
      </div>
    </section>
  )
}
