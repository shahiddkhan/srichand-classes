import Link from 'next/link'
import PageBanner from '../../components/PageBanner'

const PILLARS = [
  { icon: '📖', title: 'Concept Clarity',      desc: 'True learning comes from deep understanding. We teach the "why" behind every topic so students can handle any question — seen or unseen.' },
  { icon: '✍️', title: 'Writing Practice',     desc: 'Board exams reward well-written, well-presented answers. Our structured writing sessions train students to express knowledge clearly and score maximum marks.' },
  { icon: '📝', title: 'Regular Evaluation',   desc: 'Weekly tests and monthly assessments mirror board exam conditions. Consistent evaluation keeps students sharp and highlights areas for improvement.' },
  { icon: '🤝', title: 'Personal Mentoring',   desc: 'Small batches mean every student is known by name. Our faculty track individual progress and provide focused guidance wherever a student needs it most.' },
]

const JOURNEY = [
  { year: '1958', title: 'Foundation',          desc: 'Srichand Classes established in Sion, Mumbai, with a vision to provide high-quality, affordable coaching to every Mumbai student.' },
  { year: '1970s', title: 'Commerce Expansion', desc: 'Added Junior College Commerce coaching as demand grew, helping HSC students excel in Accountancy, Economics and OCM.' },
  { year: '1990s', title: 'Degree & Science',   desc: 'Expanded into Science coaching and professional degree programmes, serving Mumbai University students across Commerce streams.' },
  { year: '2000s', title: '50,000 Students',    desc: 'A landmark decade — Srichand Classes crossed 50,000 students mentored, with alumni in top careers across India and abroad.' },
  { year: '2015+', title: 'Professional Exams', desc: 'Introduced coaching for CA Foundation, ACCA, JEE, NEET and MHTCET as professional exam preparation demand rose across Mumbai.' },
  { year: 'Today', title: '68 Years Strong',    desc: '4 branches, 6 dedicated faculty, and thousands of successful alumni — Srichand Classes continues to shape the academic futures of Mumbai\'s students.' },
]

export default function About() {
  return (
    <>
      <PageBanner
        tag="Our Story"
        title="About Srichand Classes"
        subtitle="68 years of shaping academic futures — built on trust, excellence and a genuine love for teaching."
      />

      {/* Founder section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* Text — left on desktop, second on mobile */}
            <div className="order-2 lg:order-1">
              <span className="section-tag">Est. 1958</span>
              <h2 className="section-title mb-2">Srichand Lekhraj Thariani</h2>
              <p className="font-heading font-semibold text-primary text-base mb-6 leading-snug">
                A Legacy of Learning, Discipline, and Impact
              </p>

              <p className="font-body text-slate-600 text-base leading-relaxed mb-4">
                Born and raised in Delhi, Shri Srichand Lekhraj Thariani carried an unshakeable belief that education was the greatest gift one could give. After relocating to Mumbai, he brought that conviction with him — and turned it into a movement.
              </p>
              <p className="font-body text-slate-600 text-base leading-relaxed mb-4">
                He began his teaching career at New Era School and later served with distinction as Principal of Sindh Model High School, where his rigorous methods and deep care for students earned him lasting respect across the community.
              </p>
              <p className="font-body text-slate-600 text-base leading-relaxed mb-6">
                In 1958, from a small room in Sion, he started Srichand Classes — teaching a handful of students from the neighbourhood. Word spread quickly. Parents trusted him. Students thrived. What began at home grew steadily into one of Mumbai's most respected coaching institutions, now spanning 4 branches and having shaped the futures of over 50,000 students across generations.
              </p>

              {/* Pull quote */}
              <blockquote className="border-l-4 border-primary pl-5 py-1 mb-7">
                <p className="font-heading font-semibold text-dark text-lg leading-snug italic">
                  "He did not just teach subjects — he shaped lives."
                </p>
              </blockquote>

              <Link href="/contact" className="btn-primary">Get in Touch →</Link>
            </div>

            {/* Founder image — first on mobile, right on desktop */}
            <div className="order-1 lg:order-2">
              <div
                className="rounded-2xl overflow-hidden shadow-xl"
                style={{ aspectRatio: '4/5' }}
              >
                <img
                  src="/images/grandfather/IMG_6306.PNG"
                  alt="Srichand Lekhraj Thariani — Founder, Srichand Classes"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    display: 'block',
                  }}
                />
              </div>
              <div className="mt-4 text-center">
                <p className="font-heading font-semibold text-dark text-sm">Srichand Lekhraj Thariani</p>
                <p className="font-body text-muted text-xs mt-0.5">Founder · Srichand Classes · Est. 1958</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Teaching philosophy */}
      <section className="py-20 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-tag">How We Teach</span>
            <h2 className="section-title">Our Teaching Philosophy</h2>
            <p className="font-body text-muted text-lg mt-3 max-w-xl mx-auto">
              Four principles that have guided Srichand Classes since 1958.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-7">
            {PILLARS.map(p => (
              <div key={p.title} className="card p-7 flex gap-5">
                <span className="text-4xl flex-shrink-0">{p.icon}</span>
                <div>
                  <h3 className="font-heading font-bold text-dark text-lg mb-2">{p.title}</h3>
                  <p className="font-body text-muted text-sm leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Legacy strip */}
      <section className="py-16 bg-brand-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-white text-2xl md:text-3xl text-center mb-10">Our Legacy in Numbers</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { val: '68+',     label: 'Years of Teaching' },
              { val: '50,000+', label: 'Students Mentored' },
              { val: '4',       label: 'Mumbai Branches' },
              { val: '6',       label: 'Expert Faculty' },
            ].map(s => (
              <div key={s.label} className="text-center">
                <div className="font-heading font-black text-5xl text-white">{s.val}</div>
                <div className="font-body text-white/70 text-sm mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-tag">History</span>
            <h2 className="section-title">Our Journey</h2>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-200" />
            <div className="space-y-8">
              {JOURNEY.map((j, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="relative z-10 w-16 h-16 flex-shrink-0 bg-brand-gradient rounded-full flex items-center justify-center shadow-md">
                    <span className="font-heading font-black text-white text-xs text-center leading-tight px-1">{j.year}</span>
                  </div>
                  <div className="card p-5 flex-1 mt-1">
                    <div className="font-heading font-bold text-dark text-sm mb-1">{j.title}</div>
                    <p className="font-body text-muted text-sm leading-relaxed">{j.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-dark text-center">
        <h2 className="font-heading font-bold text-white text-2xl md:text-3xl mb-4">Become Part of Our Legacy</h2>
        <p className="font-body text-slate-400 text-lg mb-8">Join thousands of students who have achieved their best with Srichand Classes.</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/contact" className="btn-white text-primary">Enquire Now</Link>
          <Link href="/courses" className="btn border-2 border-white/40 text-white hover:bg-white hover:text-dark">View Courses</Link>
        </div>
      </section>
    </>
  )
}
