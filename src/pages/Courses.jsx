import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PageBanner from '../components/PageBanner'
import CourseModal from '../modals/CourseModal'
import { COURSES } from '../data'

const DETAIL = [
  {
    id: 'school',
    sections: [
      {
        heading: 'School Coaching (Class VIII–X)',
        desc: 'Our school coaching programme provides thorough preparation for board examinations across SSC, ICSE and CBSE. Students receive structured weekly tests, writing practice and personalised feedback.',
        boards: ['SSC', 'ICSE', 'CBSE'],
        subjects: ['Mathematics', 'Science', 'English', 'Geography'],
        classes: ['Class VIII', 'Class IX', 'Class X'],
        fee: '₹25,000 – ₹40,000 per year',
      },
    ],
  },
  {
    id: 'commerce',
    sections: [
      {
        heading: 'Junior College Commerce (XI–XII)',
        desc: 'Dedicated coaching for Maharashtra Board Commerce students. In-depth subject coverage with a strong emphasis on answer writing, presentation and exam strategy.',
        boards: ['Maharashtra State Board'],
        subjects: ['Accountancy', 'Economics', 'OCM', 'SP (Secretarial Practice)'],
        classes: ['XI Commerce', 'XII Commerce'],
        fee: '₹35,000 – ₹50,000 per year',
      },
    ],
  },
  {
    id: 'degree',
    sections: [
      {
        heading: 'Degree Coaching (BCom / BAF / BBI)',
        desc: 'University-level coaching for Mumbai University affiliated Commerce degree programmes. Comprehensive subject coverage, concise notes and exam-focused mock papers.',
        boards: ['Mumbai University'],
        subjects: ['All core subjects as per Mumbai University syllabus'],
        classes: ['BCom', 'BAF (Bachelor of Accounting and Finance)', 'BBI (Bachelor of Banking and Insurance)'],
        fee: 'Contact us for current fee details',
      },
    ],
  },
]

function CourseDetailCard({ section }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-7 mb-6">
      <h3 className="font-heading font-bold text-slate-800 text-xl mb-3">{section.heading}</h3>
      <p className="font-body text-slate-600 text-sm leading-relaxed mb-5">{section.desc}</p>

      <div className="grid sm:grid-cols-3 gap-5">
        <div>
          <div className="font-heading font-semibold text-slate-600 text-xs uppercase tracking-wider mb-2">Boards</div>
          <div className="flex flex-wrap gap-2">
            {section.boards.map(b => (
              <span key={b} className="bg-navy-50 text-navy-700 border border-navy-200 text-xs font-medium px-3 py-1 rounded-full">{b}</span>
            ))}
          </div>
        </div>
        <div>
          <div className="font-heading font-semibold text-slate-600 text-xs uppercase tracking-wider mb-2">Subjects</div>
          <div className="flex flex-wrap gap-2">
            {section.subjects.map(s => (
              <span key={s} className="bg-slate-100 text-slate-700 text-xs font-medium px-3 py-1 rounded-full">{s}</span>
            ))}
          </div>
        </div>
        <div>
          <div className="font-heading font-semibold text-slate-600 text-xs uppercase tracking-wider mb-2">Classes</div>
          <div className="flex flex-wrap gap-2">
            {section.classes.map(c => (
              <span key={c} className="bg-indigo-50 text-indigo-700 border border-indigo-200 text-xs font-medium px-3 py-1 rounded-full">{c}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-5 border-t border-slate-100">
        <div>
          <div className="font-body text-slate-400 text-xs mb-0.5">Estimated Fee</div>
          <div className="font-heading font-bold text-slate-800">{section.fee}</div>
          <div className="font-body text-slate-400 text-xs mt-0.5">Installments available · Contact for exact pricing</div>
        </div>
        <Link to="/contact" className="btn-primary text-sm px-5 py-2.5 whitespace-nowrap">Enquire Now</Link>
      </div>
    </div>
  )
}

export default function Courses() {
  const [active, setActive] = useState(null)

  return (
    <>
      <PageBanner
        tag="Programmes"
        title="Our Courses"
        subtitle="Structured coaching for every stage — school, junior college and degree."
      />

      {/* Quick course cards at top */}
      <section className="py-14 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {COURSES.map(c => (
              <div key={c.id} className="card p-5 flex flex-col">
                <div className="text-3xl mb-3">{c.icon}</div>
                <h3 className="font-heading font-bold text-slate-800 text-lg mb-1">{c.title}</h3>
                <p className="font-body text-slate-500 text-sm leading-relaxed flex-1 mb-4">{c.shortDesc}</p>
                <button onClick={() => setActive(c)} className="btn-outline text-sm py-2 w-full">Quick View</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed breakdown */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="mb-10">
            <h2 className="section-title mb-2">School Coaching</h2>
            <p className="font-body text-slate-500">Classes VIII, IX and X across all major boards.</p>
          </div>
          {DETAIL[0].sections.map(s => <CourseDetailCard key={s.heading} section={s} />)}

          <div className="mb-10 mt-14">
            <h2 className="section-title mb-2">Junior College Commerce</h2>
            <p className="font-body text-slate-500">XI and XII Commerce students.</p>
          </div>
          {DETAIL[1].sections.map(s => <CourseDetailCard key={s.heading} section={s} />)}

          <div className="mb-10 mt-14">
            <h2 className="section-title mb-2">Degree Coaching</h2>
            <p className="font-body text-slate-500">BCom, BAF and BBI — Mumbai University.</p>
          </div>
          {DETAIL[2].sections.map(s => <CourseDetailCard key={s.heading} section={s} />)}
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-navy-700 text-center">
        <h2 className="font-heading font-bold text-white text-2xl md:text-3xl mb-4">Ready to Enroll?</h2>
        <p className="font-body text-white/80 mb-7">Contact us to check seat availability and batch timings.</p>
        <Link to="/contact" className="btn-white inline-block px-10 py-3.5 text-navy-800">Contact Us</Link>
      </section>

      <CourseModal course={active} onClose={() => setActive(null)} />
    </>
  )
}
