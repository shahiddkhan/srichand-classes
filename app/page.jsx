import Link from 'next/link'
import TestimonialsSection from '../components/TestimonialsSection'
import StatsSection from '../components/StatsSection'

// ─── HERO ──────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#0d3d72] via-[#1E6FB7] to-[#4FA7E0]">
      {/* Decorative dots */}
      <div className="absolute inset-0 opacity-10"
        style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '36px 36px' }}
      />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-20">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Text */}
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 bg-white/15 border border-white/25 rounded-full px-4 py-1.5 mb-7">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="font-body text-white/90 text-sm font-medium">Admissions Open 2024–25</span>
            </div>

            <h1 className="font-heading font-black text-5xl sm:text-6xl lg:text-7xl text-white leading-tight mb-6">
              68+ Years of
              <br />
              <span className="text-secondary">Academic</span>
              <br />
              Excellence
            </h1>

            <p className="font-body text-white/80 text-xl leading-relaxed mb-10 max-w-lg">
              Helping students succeed since 1958. Expert coaching for School, Junior College and Professional courses across 4 Mumbai branches.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/courses" className="btn-white">
                Explore Courses
              </Link>
              <Link href="/contact" className="btn border-2 border-white/70 text-white hover:bg-white hover:text-navy transition-all duration-200">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Hero image */}
          <div className="hidden lg:block animate-fade-up delay-200">
            <div className="rounded-2xl overflow-hidden shadow-2xl" style={{ height: '24rem' }}>
              <img
                src="/images/farewell/WhatsApp Image 2026-04-15 at 11.29.45 AM.jpeg"
                alt="Srichand Classes students"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── QUICK COURSES ─────────────────────────────────────────────────────────────
const QUICK_COURSES = [
  { icon: '🏫', label: 'School Coaching', sub: 'Class VIII–X', href: '/courses#school',    color: 'bg-blue-50 text-blue-700' },
  { icon: '📊', label: 'Jr. Commerce',    sub: 'XI–XII HSC',   href: '/courses#commerce',  color: 'bg-indigo-50 text-indigo-700' },
  { icon: '🔬', label: 'Jr. Science',     sub: 'XI–XII HSC',   href: '/courses#science',   color: 'bg-cyan-50 text-cyan-700' },
  { icon: '📈', label: 'Professional',    sub: 'CA/ACCA/JEE',  href: '/courses#professional', color: 'bg-purple-50 text-purple-700' },
]

function QuickCourses() {
  return (
    <section className="py-10 bg-bg border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {QUICK_COURSES.map(c => (
            <Link
              key={c.label}
              href={c.href}
              className="card p-5 flex flex-col items-center text-center group gap-2"
            >
              <span className="text-4xl">{c.icon}</span>
              <span className={`text-xs font-heading font-semibold px-3 py-1 rounded-full ${c.color}`}>{c.sub}</span>
              <span className="font-heading font-semibold text-dark text-sm group-hover:text-primary transition-colors">{c.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── ABOUT STRIP ───────────────────────────────────────────────────────────────
function AboutStrip() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <span className="section-tag">Est. 1958</span>
            <h2 className="section-title mb-5">Mumbai's Most Trusted Coaching Legacy</h2>
            <p className="font-body text-slate-600 text-base leading-relaxed mb-4">
              For over 68 years, Srichand Classes has been the cornerstone of academic coaching in Mumbai. What began as a small coaching centre in Sion has grown into a city-wide institution with 4 branches and thousands of successful alumni.
            </p>
            <p className="font-body text-slate-600 text-base leading-relaxed mb-7">
              Our teaching philosophy centres on concept clarity, rigorous practice, and personal attention — ensuring every student achieves their full potential.
            </p>
            <Link href="/about" className="btn-primary">Our Story →</Link>
          </div>
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-lg h-80">
              <img
                src="/images/picnic/WhatsApp Image 2026-04-15 at 11.25.39 AM.jpeg"
                alt="Srichand Classes students"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-brand-gradient text-white rounded-2xl px-6 py-4 shadow-xl">
              <div className="font-heading font-black text-3xl">10,000+</div>
              <div className="font-body text-white/80 text-xs mt-0.5">Students Mentored</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const RESULT_IMGS = [
  { src: '/images/results/olgc/2025/WhatsApp Image 2026-04-17 at 2.33.12 PM.jpeg', label: 'OLGC 2025' },
  { src: '/images/results/olgc/2024/WhatsApp Image 2026-04-17 at 2.33.11 PM.jpeg', label: 'OLGC 2024' },
  { src: '/images/results/gurunanak/WhatsApp Image 2026-04-17 at 2.33.10 PM.jpeg', label: 'Guru Nanak' },
  { src: '/images/results/ds/WhatsApp Image 2026-04-17 at 2.33.15 PM.jpeg', label: 'D.S.' },
  { src: '/images/results/fatima/WhatsApp Image 2026-04-17 at 2.33.12 PM.jpeg', label: 'Fatima' },
  { src: '/images/results/harsh classes topper/WhatsApp Image 2026-04-17 at 2.33.05 PM.jpeg', label: 'Class Topper' },
  { src: '/images/results/ssc-2025/WhatsApp Image 2026-04-17 at 2.33.12 PM.jpeg', label: 'SSC 2025' },
  { src: '/images/results/ssc-2024/WhatsApp Image 2026-04-17 at 2.33.05 PM.jpeg', label: 'SSC 2024' },
]

// ─── RESULTS ───────────────────────────────────────────────────────────────────
function Results() {
  return (
    <section className="py-20 bg-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-brand-gradient opacity-5" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="section-tag text-secondary">Academic Success</span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-white">Results That Define Excellence</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {[
            { icon: '🏅', title: 'Board Toppers', sub: 'Every Year' },
            { icon: '📈', title: '90%+ Results',  sub: 'Consistent across boards' },
            { icon: '⭐', title: '4.8 / 5 Rating',sub: 'Parent satisfaction' },
          ].map(r => (
            <div key={r.title} className="flex gap-4 items-center bg-white/5 border border-white/10 rounded-2xl px-6 py-5">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-2xl flex-shrink-0">{r.icon}</div>
              <div>
                <div className="font-heading font-bold text-white text-lg">{r.title}</div>
                <div className="font-body text-slate-400 text-sm">{r.sub}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Results photo grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
          {RESULT_IMGS.map(r => (
            <div key={r.label} className="relative rounded-xl overflow-hidden" style={{ aspectRatio: '4/3' }}>
              <img src={r.src} alt={`${r.label} results`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-3 py-2">
                <span className="font-heading font-semibold text-white text-xs">{r.label}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/rankers" className="btn-white text-primary inline-block">View Our Rankers →</Link>
        </div>
      </div>
    </section>
  )
}

// ─── ADMISSIONS CTA ────────────────────────────────────────────────────────────
function AdmissionsCTA() {
  return (
    <section className="py-14 bg-brand-gradient relative overflow-hidden">
      <div className="absolute inset-0 opacity-10"
        style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '30px 30px' }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center gap-3 mb-3">
          <span className="w-3 h-3 bg-green-300 rounded-full animate-pulse" />
          <span className="font-heading font-bold text-white text-2xl md:text-3xl uppercase tracking-wide">Admissions Open</span>
        </div>
        <p className="font-body text-white/80 text-lg mb-8">Limited Seats Available — Secure Your Spot Today</p>
        <Link href="/contact" className="btn-white text-primary inline-block px-10 py-3.5">Apply Now</Link>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <QuickCourses />
      <StatsSection />
      <AboutStrip />
      <Results />
      <TestimonialsSection />
      <AdmissionsCTA />
    </>
  )
}
