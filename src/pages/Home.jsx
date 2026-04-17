import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { StatsGrid } from '../components/CountUp'
import CourseModal from '../modals/CourseModal'
import FacultyModal from '../modals/FacultyModal'
import { COURSES, FACULTY, BRANCHES, TESTIMONIALS } from '../data'

// ─── STATS ────────────────────────────────────────────────────────────────────
const STATS = [
  { value: 68,    suffix: '+', label: 'Years of Legacy',   icon: '🏛️' },
  { value: 50000, suffix: '+', label: 'Students Mentored', icon: '🎓' },
  { value: 4.6,   suffix: '★', label: 'Average Rating',    icon: '⭐' },
  { value: 4,     suffix: '',  label: 'Mumbai Branches',   icon: '📍' },
]

// ─── HERO ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="pt-24 pb-0 bg-gradient-to-br from-navy-950 via-navy-800 to-navy-900 relative overflow-hidden min-h-screen flex items-center">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.5) 1px,transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-16">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Text */}
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="font-body text-white/80 text-sm font-medium">Admissions Open 2024–25</span>
            </div>
            <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6">
              Mumbai's{' '}
              <span className="text-blue-300">Trusted</span>
              <br />
              Coaching Institute
              <br />
              <span className="text-navy-200 text-3xl sm:text-4xl font-bold">Since 1958</span>
            </h1>
            <p className="font-body text-navy-200 text-lg leading-relaxed mb-8 max-w-lg">
              Helping students achieve academic excellence for over six decades. School, Commerce and Degree coaching across all boards.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/courses" className="btn-white">View Courses</Link>
              <Link to="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-navy-800">Contact Us</Link>
            </div>
          </div>

          {/* Image placeholder */}
          <div className="hidden lg:block">
            <div className="placeholder-img h-80 bg-white/10 border-white/20 text-white/60">
              <span className="text-5xl">🏫</span>
              <span className="font-heading font-semibold text-sm">Coaching Classroom Image</span>
              <span className="text-white/40 text-xs">Replace with actual photo</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none">
          <path d="M0 60L1440 60L1440 30C1200 60 960 0 720 20C480 40 240 0 0 30Z" fill="white"/>
        </svg>
      </div>
    </section>
  )
}

// ─── LEGACY ───────────────────────────────────────────────────────────────────
function Legacy() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="card border-slate-100 overflow-hidden">
          <StatsGrid stats={STATS} />
        </div>
      </div>
    </section>
  )
}

// ─── COURSES PREVIEW ──────────────────────────────────────────────────────────
function CoursesPreview() {
  const [active, setActive] = useState(null)
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="section-tag">What We Teach</span>
          <h2 className="section-title">Our Programmes</h2>
          <p className="font-body text-slate-500 text-lg mt-3 max-w-xl mx-auto">
            Structured coaching for every academic level — school, junior college and degree.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-7">
          {COURSES.map(course => (
            <div key={course.id} className="card p-6 flex flex-col">
              <div className="text-4xl mb-4">{course.icon}</div>
              <div className={`inline-self-start text-xs font-heading font-semibold px-3 py-1 rounded-full mb-3 ${course.tagClass}`}>
                {course.tag}
              </div>
              <h3 className="font-heading font-bold text-slate-800 text-xl mb-2">{course.title}</h3>
              <p className="font-body text-slate-500 text-sm leading-relaxed flex-1 mb-5">{course.shortDesc}</p>
              <button
                onClick={() => setActive(course)}
                className="btn-outline text-sm py-2.5 w-full"
              >
                Know More
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/courses" className="btn-primary">View Full Course Page →</Link>
        </div>
      </div>

      <CourseModal course={active} onClose={() => setActive(null)} />
    </section>
  )
}

// ─── FACULTY PREVIEW ──────────────────────────────────────────────────────────
function FacultyPreview() {
  const [active, setActive] = useState(null)
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="section-tag">Meet Our Teachers</span>
          <h2 className="section-title">Experienced Faculty</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FACULTY.map(m => (
            <button
              key={m.id}
              onClick={() => setActive(m)}
              className="card text-left group cursor-pointer"
            >
              <div className={`placeholder-img h-40 rounded-none rounded-t-2xl border-0 border-b-4 ${m.borderColor}`}>
                <span className="text-4xl">👨‍🏫</span>
                <span className="text-slate-400 text-xs font-heading">Faculty Teaching Image</span>
              </div>
              <div className="p-5">
                <div className={`text-xs font-heading font-semibold px-3 py-1 rounded-full mb-3 inline-block ${m.badgeClass}`}>{m.badge}</div>
                <h3 className="font-heading font-bold text-slate-800 text-lg group-hover:text-navy-700 transition-colors">{m.name}</h3>
                <p className="font-body text-navy-600 text-xs font-semibold mt-0.5">{m.subject}</p>
              </div>
            </button>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/faculty" className="btn-outline">View Full Faculty Page →</Link>
        </div>
      </div>

      <FacultyModal member={active} onClose={() => setActive(null)} />
    </section>
  )
}

// ─── RESULTS ──────────────────────────────────────────────────────────────────
function Results() {
  return (
    <section className="py-20 bg-navy-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="section-tag text-blue-300">Academic Results</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-white leading-tight mb-5">
              Results That Speak for Themselves
            </h2>
            <p className="font-body text-navy-200 text-lg leading-relaxed mb-4">
              Our students consistently achieve excellent board results with strong conceptual understanding and writing practice. Year after year, Srichand Classes students top their schools and score distinctions.
            </p>
            <p className="font-body text-navy-300 text-base leading-relaxed">
              Structured curriculum, regular testing and personal feedback ensure students are fully prepared — for exams and beyond.
            </p>
          </div>
          <div className="grid gap-4">
            {[
              { icon: '🏅', title: 'Board Toppers', sub: 'Every Year' },
              { icon: '📈', title: 'Consistent 90%+ Results', sub: 'Across Boards' },
              { icon: '⭐', title: '4.5 / 5 Rating', sub: 'Student Satisfaction' },
            ].map(item => (
              <div key={item.title} className="flex gap-4 items-center bg-white/5 border border-white/10 rounded-2xl px-6 py-5">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-2xl flex-shrink-0">{item.icon}</div>
                <div>
                  <div className="font-heading font-bold text-white text-lg">{item.title}</div>
                  <div className="font-body text-navy-400 text-sm">{item.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── TESTIMONIALS ─────────────────────────────────────────────────────────────
function Testimonials() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <span className="section-tag">Student Reviews</span>
          <h2 className="section-title">What Our Students Say</h2>
          <div className="inline-flex items-center gap-3 bg-white border border-slate-200 rounded-2xl px-6 py-3 mt-5 shadow-sm">
            <span className="font-heading font-black text-4xl text-navy-800">4.5</span>
            <div>
              <div className="text-yellow-400 text-xl">★★★★½</div>
              <div className="font-body text-slate-400 text-xs mt-0.5">Based on Google Reviews</div>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {TESTIMONIALS.map(t => (
            <div key={t.name} className="card p-6 flex flex-col">
              <div className="flex gap-0.5 mb-3">
                {[1,2,3,4,5].map(i => (
                  <span key={i} className={i <= t.rating ? 'text-yellow-400' : 'text-slate-200'}>★</span>
                ))}
              </div>
              <p className="font-body text-slate-600 text-sm leading-relaxed flex-1">"{t.text}"</p>
              <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="font-heading font-semibold text-slate-800 text-sm">{t.name}</div>
                  <div className="font-body text-slate-400 text-xs mt-0.5">{t.cls}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── BRANCHES PREVIEW ─────────────────────────────────────────────────────────
function BranchesPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="section-tag">Our Locations</span>
          <h2 className="section-title">3 Branches Across Mumbai</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-7">
          {BRANCHES.map(b => (
            <div key={b.id} className="card overflow-hidden">
              <div className="bg-navy-900 px-6 py-5 flex items-start justify-between">
                <div>
                  <span className={`text-xs font-heading font-semibold px-3 py-1 rounded-full ${b.tagClass} block mb-2 w-fit`}>{b.tag}</span>
                  <h3 className="font-heading font-bold text-white text-lg">{b.name}</h3>
                  <p className="font-body text-navy-300 text-xs mt-0.5">{b.since}</p>
                </div>
                <span className="text-3xl">{b.icon}</span>
              </div>
              <div className="p-6">
                <p className="font-body text-slate-600 text-sm leading-relaxed whitespace-pre-line mb-4">{b.address}</p>
                <a href={`tel:+91${b.phone.replace(/\s/g,'')}`}
                   className="font-heading font-semibold text-navy-700 hover:text-navy-900 text-sm transition-colors">
                  📞 {b.phone}
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/branches" className="btn-outline">View All Branches →</Link>
        </div>
      </div>
    </section>
  )
}

// ─── ADMISSIONS CTA ───────────────────────────────────────────────────────────
function AdmissionsCTA() {
  return (
    <section className="py-14 bg-navy-700 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-white/5" />
        <div className="absolute -bottom-10 -left-10 w-72 h-72 rounded-full bg-white/5" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center gap-3 mb-3">
          <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
          <span className="font-heading font-bold text-white text-2xl md:text-3xl uppercase tracking-wide">
            Admissions Open
          </span>
        </div>
        <p className="font-body text-white/80 text-lg mb-8">Limited Seats Available — Enroll Early</p>
        <Link to="/contact" className="btn-white inline-block px-10 py-3.5 text-navy-800 text-base">
          Apply Now
        </Link>
      </div>
    </section>
  )
}

// ─── HOME PAGE ────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      <Hero />
      <Legacy />
      <CoursesPreview />
      <FacultyPreview />
      <Results />
      <Testimonials />
      <BranchesPreview />
      <AdmissionsCTA />
    </>
  )
}
