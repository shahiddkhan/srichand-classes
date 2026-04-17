'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/',         label: 'Home' },
  { href: '/courses',  label: 'Courses' },
  { href: '/faculty',  label: 'Faculty' },
  { href: '/gallery',  label: 'Gallery' },
  { href: '/rankers',  label: 'Rankers' },
  { href: '/branches', label: 'Branches' },
  { href: '/about',    label: 'About' },
  { href: '/contact',  label: 'Contact' },
]

export default function Navbar() {
  const pathname  = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open,     setOpen]     = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur border-b border-slate-100'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-[70px]">

          {/* Logo */}
          <Link href="/" className="flex flex-col leading-tight group">
            <span className="font-heading font-black text-xl text-primary group-hover:text-secondary transition-colors">
              Srichand Classes
            </span>
            <span className="font-body text-muted text-[10px] tracking-widest uppercase">
              Est. 1958 · Mumbai
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {links.map(l => (
              <Link
                key={l.href}
                href={l.href}
                className={`font-heading font-medium text-sm px-3 py-2 rounded-lg transition-all duration-150 ${
                  pathname === l.href
                    ? 'text-primary bg-primary/8 font-semibold'
                    : 'text-slate-600 hover:text-primary hover:bg-primary/5'
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Link href="/contact" className="ml-2 btn-primary text-sm px-5 py-2">
              Enroll Now
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition"
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-slate-100 shadow-lg px-4 py-3 space-y-1">
          {links.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className={`block font-heading font-medium text-sm px-4 py-3 rounded-lg transition ${
                pathname === l.href
                  ? 'text-primary bg-primary/8 font-semibold'
                  : 'text-slate-600 hover:text-primary hover:bg-slate-50'
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/contact" className="block btn-primary text-center mt-2 text-sm">
            Enroll Now
          </Link>
        </div>
      )}
    </header>
  )
}
