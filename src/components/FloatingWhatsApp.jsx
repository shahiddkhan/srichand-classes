import React, { useState } from 'react'

export default function FloatingWhatsApp() {
  const [hovered, setHovered] = useState(false)
  const url = 'https://wa.me/919819773151?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20admissions%20at%20Srichand%20Classes.'

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3"
    >
      <div className={`bg-slate-800 text-white font-heading font-semibold text-sm px-4 py-2 rounded-xl shadow-lg whitespace-nowrap transition-all duration-200 ${hovered ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        Chat with us
      </div>
      <div className="relative">
        <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-25" />
        <div style={{width:56,height:56}} className="relative bg-green-500 hover:bg-green-600 rounded-full shadow-xl flex items-center justify-center transition-all hover:scale-110">
          <svg viewBox="0 0 32 32" fill="white" className="w-7 h-7" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 2C8.268 2 2 8.268 2 16c0 2.522.658 4.887 1.806 6.938L2 30l7.29-1.78A13.935 13.935 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm6.29 19.89c-.344-.172-2.035-1.004-2.35-1.118-.316-.115-.547-.172-.778.172-.23.344-.892 1.118-1.093 1.348-.2.23-.402.258-.747.086-.344-.172-1.455-.536-2.771-1.71-1.024-.914-1.716-2.043-1.917-2.387-.2-.344-.021-.53.15-.701.155-.154.344-.402.516-.603.172-.2.23-.344.344-.573.115-.23.057-.431-.029-.603-.086-.172-.778-1.877-1.065-2.569-.28-.676-.566-.583-.778-.595-.2-.01-.43-.012-.66-.012-.23 0-.603.086-.918.43-.316.344-1.208 1.18-1.208 2.878 0 1.697 1.237 3.337 1.409 3.567.172.23 2.434 3.716 5.9 5.212.824.355 1.467.567 1.968.726.827.263 1.58.226 2.174.137.663-.1 2.035-.832 2.322-1.635.287-.804.287-1.493.2-1.636-.086-.143-.316-.23-.66-.402z"/>
          </svg>
        </div>
      </div>
    </a>
  )
}
