import React from 'react'
import { Link } from 'react-router-dom'
import PageBanner from '../components/PageBanner'

const PILLARS = [
  { icon: '📖', title: 'Concept Clarity', desc: 'We believe true learning comes from understanding, not memorisation. Every topic is taught from first principles so students can handle any question — seen or unseen.' },
  { icon: '✍️', title: 'Writing Practice', desc: 'Board exams reward well-written answers. Our structured writing sessions train students to present their knowledge clearly, earning maximum marks.' },
  { icon: '📝', title: 'Regular Evaluation', desc: 'Weekly tests and monthly assessments mirror the board exam experience. Consistent evaluation keeps students accountable and reveals areas for improvement.' },
  { icon: '🤝', title: 'Personal Mentoring', desc: 'With small batch sizes, every student is known by name. Faculty track individual progress and provide one-on-one guidance wherever needed.' },
]

const MILESTONES = [
  { year: '1958', event: 'Srichand Classes founded in Sion, Mumbai' },
  { year: '1970s', event: 'Expanded to Junior College Commerce coaching' },
  { year: '1990s', event: 'Introduced Degree coaching for BCom students' },
  { year: '2000s', event: 'Grew to serve 10,000+ students across generations' },
  { year: '2019', event: 'Third branch opened in Chembur' },
  { year: 'Today', event: '65+ years strong — trusted across 3 generations of Mumbai families' },
]

export default function About() {
  return (
    <>
      <PageBanner
        tag="Our Story"
        title="About Srichand Classes"
        subtitle="Over six decades of academic excellence — built on trust, results and a genuine love for teaching."
      />

      {/* Story section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">

            <div>
              <span className="section-tag">Est. 1958</span>
              <h2 className="section-title mb-6">Six Decades of Shaping Mumbai's Students</h2>
              <p className="font-body text-slate-600 text-base leading-relaxed mb-4">
                Srichand Classes was established in 1958 in Sion, Mumbai, with a simple belief: every student deserves personalised, high-quality coaching that prepares them not just for exams, but for a lifetime of learning.
              </p>
              <p className="font-body text-slate-600 text-base leading-relaxed mb-4">
                What began as a small coaching centre has grown into a trusted institution with three branches across Mumbai — Sion, Matunga East and Chembur. Over the decades, we have coached more than 10,000 students across SSC, ICSE, CBSE, Commerce and Degree programmes.
              </p>
              <p className="font-body text-slate-600 text-base leading-relaxed">
                Three generations of Mumbai families have trusted Srichand Classes. Many of our current students are the children and grandchildren of our earliest batches — a testament to the enduring quality of our teaching.
              </p>
            </div>

            <div className="relative">
              <div className="placeholder-img h-80 md:h-96">
                <span className="text-5xl">📚</span>
                <span className="text-slate-400 font-heading font-semibold text-sm">Students Studying Image</span>
                <span className="text-slate-300 text-xs">Replace with actual photo</span>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-navy-700 text-white rounded-2xl px-6 py-4 shadow-xl">
                <div className="font-heading font-black text-3xl">65+</div>
                <div className="font-body text-navy-200 text-xs">Years of Trust</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teaching philosophy */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-tag">Our Approach</span>
            <h2 className="section-title">Our Teaching Philosophy</h2>
            <p className="font-body text-slate-500 text-lg mt-3 max-w-xl mx-auto">
              Four principles that have defined Srichand Classes since 1958.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-7">
            {PILLARS.map(p => (
              <div key={p.title} className="card p-7 flex gap-5">
                <div className="text-4xl flex-shrink-0">{p.icon}</div>
                <div>
                  <h3 className="font-heading font-bold text-slate-800 text-lg mb-2">{p.title}</h3>
                  <p className="font-body text-slate-500 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-tag">History</span>
            <h2 className="section-title">Our Journey</h2>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-200" />

            <div className="space-y-8">
              {MILESTONES.map((m, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="relative z-10 w-16 h-16 flex-shrink-0 bg-navy-700 rounded-full flex items-center justify-center shadow-md">
                    <span className="font-heading font-bold text-white text-xs text-center leading-tight px-1">{m.year}</span>
                  </div>
                  <div className="card p-5 flex-1 mt-1">
                    <p className="font-body text-slate-700 text-sm leading-relaxed">{m.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-navy-700 text-center">
        <h2 className="font-heading font-bold text-white text-2xl md:text-3xl mb-4">
          Become Part of Our Legacy
        </h2>
        <p className="font-body text-white/80 text-lg mb-8">
          Join thousands of students who have achieved their academic best with Srichand Classes.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link to="/contact" className="btn-white text-navy-800">Enquire Now</Link>
          <Link to="/courses" className="btn-outline border-white text-white hover:bg-white hover:text-navy-800">View Courses</Link>
        </div>
      </section>
    </>
  )
}
