'use client'
import { useState } from 'react'

const BRANCHES = [
  { name: 'Sion',    phone: '9820146010' },
  { name: 'Kurla',   phone: '9920352980' },
  { name: 'Matunga', phone: '9820352980' },
  { name: 'Chembur', phone: '9820352975' },
]

export default function FloatingContact() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 bg-dark/40 backdrop-blur-sm z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Popup panel */}
      {open && (
        <div className="fixed bottom-24 right-4 sm:right-6 z-50 w-80 bg-white rounded-2xl shadow-2xl overflow-hidden animate-fade-up">
          <div className="bg-brand-gradient px-5 py-4 flex items-center justify-between">
            <div>
              <div className="font-heading font-bold text-white text-base">Contact a Branch</div>
              <div className="font-body text-white/70 text-xs mt-0.5">Choose your nearest location</div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="w-7 h-7 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 text-white text-lg leading-none transition"
            >
              ×
            </button>
          </div>

          <div className="divide-y divide-slate-100">
            {BRANCHES.map((b, i) => (
              <div key={b.name} className="px-5 py-4">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <div className="font-heading font-semibold text-dark text-sm">{i + 1}. {b.name}</div>
                    <div className="font-body text-muted text-xs mt-0.5">+91 {b.phone}</div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <a
                    href={`tel:+91${b.phone}`}
                    className="flex-1 flex items-center justify-center gap-1.5 bg-primary/10 hover:bg-primary text-primary hover:text-white font-heading font-semibold text-xs px-3 py-2 rounded-lg transition-all"
                  >
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                    </svg>
                    Call
                  </a>
                  <a
                    href={`https://wa.me/91${b.phone}?text=Hello%2C%20I%20am%20enquiring%20about%20Srichand%20Classes%20${b.name}%20branch.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 bg-green-50 hover:bg-green-600 text-green-600 hover:text-white font-heading font-semibold text-xs px-3 py-2 rounded-lg transition-all"
                  >
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.524 5.847L0 24l6.303-1.496A11.938 11.938 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm6.218 16.442c-.26.731-1.523 1.394-2.086 1.482-.535.083-1.195.118-1.93-.121-.444-.143-1.014-.333-1.744-.654-3.065-1.324-5.07-4.41-5.222-4.617-.151-.207-1.236-1.644-1.236-3.137 0-1.492.782-2.227 1.059-2.531.277-.303.605-.379.807-.379.202 0 .403.002.58.01.186.01.435-.07.68.52.26.62.882 2.138.96 2.291.077.153.13.333.026.537-.103.203-.155.33-.303.508-.15.178-.315.397-.45.534-.148.149-.303.31-.13.608.173.3.77 1.27 1.654 2.058 1.136 1.014 2.094 1.327 2.394 1.477.3.148.476.125.652-.075.178-.2.756-.884 1.043-1.188.286-.305.571-.253.964-.153.393.1 2.496 1.176 2.923 1.39.427.213.714.318.82.497.104.179.104.93-.155 1.661z"/>
                    </svg>
                    WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* FAB button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-4 sm:right-6 z-50 bg-brand-gradient text-white w-14 h-14 rounded-full shadow-xl hover:shadow-2xl flex items-center justify-center transition-all hover:scale-110"
        aria-label="Contact us"
      >
        {open ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
          </svg>
        )}
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-ping opacity-70" />
      </button>
    </>
  )
}
