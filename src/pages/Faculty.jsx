import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PageBanner from '../components/PageBanner'
import FacultyModal from '../modals/FacultyModal'
import { FACULTY } from '../data'

const WHY = [
  { icon: '🎯', title: 'Board Exam Specialists', desc: 'Every teacher is trained in the specific patterns and expectations of board examinations.' },
  { icon: '👥', title: 'Small Batch Teaching', desc: 'Limited students per batch means every child gets time and attention from the teacher.' },
  { icon: '📝', title: 'Writing Practice Experts', desc: 'Faculty guide students on answer structure, presentation and scoring techniques.' },
  { icon: '📊', title: 'Regular Progress Tracking', desc: 'Weekly tests are reviewed by faculty to identify and address individual weak areas.' },
]

export default function Faculty() {
  const [active, setActive] = useState(null)

  return (
    <>
      <PageBanner
        tag="Our Teachers"
        title="Meet Our Faculty"
        subtitle="Dedicated educators with years of board exam experience and a genuine passion for teaching."
      />

      {/* Faculty cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {FACULTY.map(m => (
              <div
                key={m.id}
                onClick={() => setActive(m)}
                className="card cursor-pointer group overflow-hidden"
              >
                {/* Photo placeholder */}
                <div className={`placeholder-img h-52 rounded-none rounded-t-2xl border-0 border-b-4 ${m.borderColor}`}>
                  <span className="text-5xl">👨‍🏫</span>
                  <span className="text-slate-400 text-xs font-heading font-medium">Faculty Teaching Image</span>
                  <span className="text-slate-300 text-xs">Replace with actual photo</span>
                </div>

                <div className="p-6">
                  <span className={`text-xs font-heading font-semibold px-3 py-1 rounded-full inline-block mb-3 ${m.badgeClass}`}>
                    {m.badge}
                  </span>
                  <h3 className="font-heading font-bold text-slate-800 text-xl group-hover:text-navy-700 transition-colors">
                    {m.name}
                  </h3>
                  <p className="font-body text-navy-600 text-sm font-semibold mt-0.5 mb-3">{m.subject}</p>
                  <p className="font-body text-slate-500 text-sm leading-relaxed line-clamp-3">{m.bio}</p>

                  <button className="mt-4 text-navy-700 font-heading font-semibold text-sm hover:underline">
                    View Profile →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why our faculty */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-tag">What Sets Us Apart</span>
            <h2 className="section-title">Why Our Faculty Make the Difference</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY.map(w => (
              <div key={w.title} className="card p-6 text-center">
                <div className="text-4xl mb-4">{w.icon}</div>
                <h3 className="font-heading font-bold text-slate-800 text-base mb-2">{w.title}</h3>
                <p className="font-body text-slate-500 text-sm leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-navy-950 text-center">
        <h2 className="font-heading font-bold text-white text-2xl md:text-3xl mb-4">
          Want to Meet Our Faculty?
        </h2>
        <p className="font-body text-navy-300 text-lg mb-8">
          Visit any of our branches or reach out to schedule a demo class.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link to="/contact" className="btn-white text-navy-800">Contact Us</Link>
          <Link to="/branches" className="btn-outline border-white text-white hover:bg-white hover:text-navy-800">Find a Branch</Link>
        </div>
      </section>

      <FacultyModal member={active} onClose={() => setActive(null)} />
    </>
  )
}
