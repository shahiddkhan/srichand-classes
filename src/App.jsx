import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar   from './components/Navbar'
import Footer   from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'

import Home     from './pages/Home'
import Courses  from './pages/Courses'
import Faculty  from './pages/Faculty'
import Branches from './pages/Branches'
import About    from './pages/About'
import Contact  from './pages/Contact'

export default function App() {
  const { pathname } = useLocation()

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/"         element={<Home />} />
          <Route path="/courses"  element={<Courses />} />
          <Route path="/faculty"  element={<Faculty />} />
          <Route path="/branches" element={<Branches />} />
          <Route path="/about"    element={<About />} />
          <Route path="/contact"  element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}
