'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import PageBanner from '../../components/PageBanner'
import { useLightbox } from '../../components/LightboxProvider'

const FACULTY = [
  {
    id: 'vinesh',
    name: 'Mr. Vinesh Thariani',
    subject: 'Mathematics',
    badge: 'Director & Senior Faculty',
    badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
    accentBg: 'from-blue-900/80 to-blue-600/40',
    image: '/images/faculty/vinesh thariani.jpeg',
    bio: 'Mr. Vinesh Thariani is the founder-director of Srichand Classes and has been guiding students for over three decades. His mastery of Mathematics across school and junior college levels has produced hundreds of board toppers.',
    subjects: ['Mathematics (School)', 'Mathematics (XI–XII)', 'CA Foundation'],
    achievements: [
      '30+ years of teaching experience',
      'Produced multiple board rank holders',
      'Pioneer of the Srichand Classes methodology',
      'Expert in CBSE, ICSE and SSC board patterns',
    ],
  },
  {
    id: 'vidhi',
    name: 'Mrs. Vidhi Dalal',
    subject: 'Accounts & Economics',
    badge: 'Senior Faculty',
    badgeColor: 'bg-pink-50 text-pink-700 border-pink-200',
    accentBg: 'from-pink-900/80 to-pink-600/40',
    image: '/images/faculty/vidhi dalal.jpeg',
    bio: 'Mrs. Vidhi Dalal is a Commerce specialist who brings clarity and structure to Accountancy and Economics. Her methodical approach and deep understanding of HSC Commerce patterns have helped students consistently achieve distinction.',
    subjects: ['Accountancy (XI–XII)', 'Economics (XI–XII)', 'OCM'],
    achievements: [
      '15+ years of Commerce coaching',
      'Specialist in HSC Commerce exam strategy',
      'Known for concise, exam-ready notes',
      'Strong track record in XII board results',
    ],
  },
  {
    id: 'sandeep',
    name: 'Mr. Sandeep Thariani',
    subject: 'Science & Chemistry',
    badge: 'Senior Faculty',
    badgeColor: 'bg-green-50 text-green-700 border-green-200',
    accentBg: 'from-green-900/80 to-green-600/40',
    image: '/images/faculty/sandeep thariani.jpeg',
    bio: 'Mr. Sandeep Thariani heads the Science department at Srichand Classes. His engaging teaching style makes complex Chemistry and Science concepts accessible and memorable for students preparing for board exams.',
    subjects: ['Science (VIII–X)', 'Chemistry (XI–XII)', 'NEET preparation'],
    achievements: [
      '20+ years in Science education',
      'Specialist in HSC and SSC Science',
      'Regular NEET preparation workshops',
      'Practical-oriented teaching approach',
    ],
  },
  {
    id: 'sanjeev',
    name: 'Mr. Sanjeev Thariani',
    subject: 'English & Social Studies',
    badge: 'Faculty',
    badgeColor: 'bg-purple-50 text-purple-700 border-purple-200',
    accentBg: 'from-purple-900/80 to-purple-600/40',
    image: '/images/faculty/sanjeev thariani.jpeg',
    bio: 'Mr. Sanjeev Thariani specialises in English language and Social Studies. His focus on writing skills, answer structure, and presentation has helped students score markedly higher in language papers.',
    subjects: ['English (VIII–X)', 'Geography', 'Social Studies', 'Hindi/Marathi'],
    achievements: [
      'Expert in English language coaching',
      'Structured writing practice methodology',
      'Covers SSC, ICSE and CBSE English patterns',
      'Focus on answer presentation and scoring',
    ],
  },
  {
    id: 'kunal',
    name: 'Mr. Kunal Thariani',
    subject: 'Physics & JEE',
    badge: 'Faculty',
    badgeColor: 'bg-cyan-50 text-cyan-700 border-cyan-200',
    accentBg: 'from-cyan-900/80 to-cyan-600/40',
    image: '/images/faculty/kunal thariani.jpeg',
    bio: 'Mr. Kunal Thariani handles Physics for junior college and competitive exam students. His strong analytical background and problem-solving approach are particularly valued by JEE and MHTCET aspirants.',
    subjects: ['Physics (XI–XII)', 'JEE preparation', 'MHTCET preparation'],
    achievements: [
      'Strong JEE and MHTCET track record',
      'Numerical problem-solving specialist',
      'HSC Physics board exam expert',
      'Regular mock test sessions',
    ],
  },
  {
    id: 'harsh',
    name: 'Mr. Harsh Thariani',
    subject: 'Mathematics & ACCA',
    badge: 'Faculty',
    badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    accentBg: 'from-indigo-900/80 to-indigo-600/40',
    image: '/images/faculty/harsh thariani.jpeg',
    bio: 'Mr. Harsh Thariani is a Mathematics and professional finance specialist. He handles higher Mathematics for junior college students and provides coaching for ACCA and CA Foundation examinations.',
    subjects: ['Mathematics (XI–XII)', 'ACCA coaching', 'CA Foundation'],
    achievements: [
      'ACCA and CA Foundation specialist',
      'Higher Mathematics expert for HSC',
      'Professional finance exam strategy',
      'Strong conceptual teaching style',
    ],
  },
]

function FacultyModal({ member, onClose }) {
  const { openLightbox } = useLightbox()

  useEffect(() => {
    if (!member) return
    const onKey = e => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [member, onClose])

  if (!member) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 animate-fade-in"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-navy/70 backdrop-blur-sm" />

      {/* Modal shell */}
      <div
        className="relative w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl animate-zoom-in"
        style={{ maxHeight: '92vh' }}
        onClick={e => e.stopPropagation()}
      >
        {/* Close button — floats above everything */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 z-20 w-9 h-9 flex items-center justify-center rounded-full bg-white/90 hover:bg-white shadow-lg text-slate-500 hover:text-slate-900 transition-all hover:scale-110"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex flex-col md:flex-row" style={{ maxHeight: '92vh' }}>

          {/* ── LEFT: full-height image panel ──────────────────── */}
          <div className="relative md:w-[42%] flex-shrink-0 bg-slate-900 overflow-hidden cursor-zoom-in"
            style={{ minHeight: '260px' }}
            onClick={() => { onClose(); setTimeout(() => openLightbox([{ src: member.image, title: member.name }], 0), 50) }}
          >

            {/* Photo fills entire panel */}
            <img
              src={member.image}
              alt={member.name}
              style={{
                position: 'absolute', inset: 0,
                width: '100%', height: '100%',
                objectFit: 'cover', objectPosition: 'top center',
              }}
              onError={e => {
                e.target.style.display = 'none'
                e.target.parentNode.insertAdjacentHTML('beforeend',
                  '<div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:5rem;background:#1e293b">👨‍🏫</div>')
              }}
            />

            {/* Gradient: dark at bottom for name overlay, subtle at top */}
            <div
              className={`absolute inset-0 bg-gradient-to-t ${member.accentBg}`}
              style={{ background: 'linear-gradient(to top, rgba(10,22,40,0.92) 0%, rgba(10,22,40,0.3) 50%, rgba(10,22,40,0.05) 100%)' }}
            />

            {/* Name + badge anchored to bottom of image — desktop only */}
            <div className="absolute bottom-0 left-0 right-0 p-7 hidden md:block">
              <span className={`font-body text-xs font-semibold px-3 py-1.5 rounded-full border inline-block mb-3 ${member.badgeColor}`}>
                {member.badge}
              </span>
              <h2 className="font-heading font-bold text-white text-2xl leading-tight mb-1">
                {member.name}
              </h2>
              <p className="font-body text-white/70 text-sm font-medium">
                {member.subject}
              </p>
            </div>
          </div>

          {/* ── RIGHT: scrollable info panel ───────────────────── */}
          <div className="flex-1 bg-white overflow-y-auto" style={{ maxHeight: '92vh' }}>
            <div className="p-7 md:p-9">

              {/* Name shown on mobile only */}
              <div className="md:hidden mb-6">
                <span className={`font-body text-xs font-semibold px-3 py-1.5 rounded-full border inline-block mb-3 ${member.badgeColor}`}>
                  {member.badge}
                </span>
                <h2 className="font-heading font-bold text-dark text-xl leading-tight mb-1">
                  {member.name}
                </h2>
                <p className="font-body text-primary text-sm font-semibold">
                  {member.subject}
                </p>
              </div>

              {/* Bio */}
              <p className="font-body text-slate-600 text-sm leading-relaxed mb-7">
                {member.bio}
              </p>

              {/* Subjects */}
              <div className="mb-6">
                <div className="font-body font-semibold text-slate-400 text-xs uppercase tracking-widest mb-3">
                  Subjects Taught
                </div>
                <div className="flex flex-wrap gap-2">
                  {member.subjects.map(s => (
                    <span key={s}
                      className="font-body bg-primary/8 text-primary text-xs font-medium px-3 py-1.5 rounded-full border border-primary/15">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Highlights */}
              <div className="mb-8">
                <div className="font-body font-semibold text-slate-400 text-xs uppercase tracking-widest mb-3">
                  Key Highlights
                </div>
                <ul className="space-y-2.5">
                  {member.achievements.map(a => (
                    <li key={a} className="flex gap-3 items-start">
                      <span className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-px">
                        <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="font-body text-slate-600 text-sm leading-relaxed">{a}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Actions */}
              <div className="flex gap-3 pt-2 border-t border-slate-100">
                <Link
                  href="/contact"
                  onClick={onClose}
                  className="flex-1 btn-primary text-center text-sm"
                >
                  Enquire Now
                </Link>
                <button
                  onClick={onClose}
                  className="flex-1 btn-outline text-sm"
                >
                  Close
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Faculty() {
  const [active, setActive] = useState(null)
  const { openLightbox } = useLightbox()

  const allPhotos = FACULTY.map(m => ({ src: m.image, title: m.name }))

  return (
    <>
      <PageBanner
        tag="Our Teachers"
        title="Meet Our Faculty"
        subtitle="Experienced educators who combine academic depth with genuine care for every student."
      />

      <section className="py-20 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {FACULTY.map((m, i) => (
              <div key={m.id} className="card group overflow-hidden flex flex-col">

                {/* Photo — click to open lightbox */}
                <div
                  className="h-56 overflow-hidden bg-slate-100 relative cursor-zoom-in"
                  onClick={() => openLightbox(allPhotos, i)}
                >
                  <img
                    src={m.image}
                    alt={m.name}
                    style={{
                      width: '100%', height: '100%',
                      objectFit: 'cover', objectPosition: 'top',
                      transition: 'transform 0.5s ease',
                    }}
                    onMouseEnter={e => e.target.style.transform = 'scale(1.05)'}
                    onMouseLeave={e => e.target.style.transform = 'scale(1)'}
                    onError={e => {
                      e.target.style.display = 'none'
                      e.target.parentNode.innerHTML = '<div style="height:100%;display:flex;align-items:center;justify-content:center;font-size:3rem;background:#f1f5f9">👨‍🏫</div>'
                    }}
                  />
                  {/* Zoom hint overlay */}
                  <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/20 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center shadow">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m3-3v3m-3 0h3" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <span className={`font-body text-xs font-semibold px-3 py-1 rounded-full border inline-block mb-3 self-start ${m.badgeColor}`}>
                    {m.badge}
                  </span>
                  <h3 className="font-heading font-bold text-dark text-lg group-hover:text-primary transition-colors">
                    {m.name}
                  </h3>
                  <p className="font-body text-primary text-sm font-semibold mt-0.5 mb-3">
                    {m.subject}
                  </p>
                  <p className="font-body text-slate-500 text-sm leading-relaxed line-clamp-2 flex-1">
                    {m.bio}
                  </p>
                  <button
                    onClick={() => setActive(m)}
                    className="mt-4 btn btn-outline-accent btn-sm w-full text-center text-sm"
                  >
                    View Profile →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-white text-center border-t border-slate-100">
        <h2 className="section-title mb-4">Want to Meet Our Faculty?</h2>
        <p className="font-body text-muted text-lg mb-8">Visit any branch or contact us to schedule a demo class.</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/contact" className="btn-primary">Get in Touch</Link>
          <Link href="/branches" className="btn-outline">Find a Branch</Link>
        </div>
      </section>

      <FacultyModal member={active} onClose={() => setActive(null)} />
    </>
  )
}
