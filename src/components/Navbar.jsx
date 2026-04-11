import React, { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'

const links = [
  { to: '/',         label: 'Home' },
  { to: '/courses',  label: 'Courses' },
  { to: '/faculty',  label: 'Faculty' },
  { to: '/branches', label: 'Branches' },
  { to: '/about',    label: 'About' },
  { to: '/contact',  label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open,     setOpen]     = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const linkClass = ({ isActive }) =>
    `font-heading font-medium text-sm px-4 py-2 rounded-lg transition-all duration-150 ${
      isActive
        ? 'text-navy-700 bg-navy-50'
        : 'text-slate-600 hover:text-navy-700 hover:bg-slate-50'
    }`

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur border-b border-slate-100'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">

          {/* Logo */}
          <Link to="/" className="flex flex-col leading-tight group">
            <span className="font-heading font-black text-xl text-navy-800 group-hover:text-navy-600 transition-colors">
              Srichand Classes
            </span>
            <span className="font-body text-navy-500 text-[10px] tracking-widest uppercase">
              Est. 1958 · Mumbai
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {links.map(l => (
              <NavLink key={l.to} to={l.to} end={l.to === '/'} className={linkClass}>
                {l.label}
              </NavLink>
            ))}
            <Link to="/contact" className="ml-3 btn-primary text-sm px-5 py-2">
              Enroll Now
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition"
            aria-label="Toggle menu"
          >
            <div className="w-5 h-0.5 bg-current mb-1 transition-all" />
            <div className="w-5 h-0.5 bg-current mb-1 transition-all" />
            <div className="w-5 h-0.5 bg-current transition-all" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-slate-100 px-4 py-3 space-y-1 shadow-lg">
          {links.map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block font-heading font-medium text-sm px-4 py-3 rounded-lg transition ${
                  isActive ? 'text-navy-700 bg-navy-50' : 'text-slate-600 hover:text-navy-700 hover:bg-slate-50'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="block btn-primary text-center mt-2"
          >
            Enroll Now
          </Link>
        </div>
      )}
    </header>
  )
}
