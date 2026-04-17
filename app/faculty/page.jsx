'use client'
import { useState } from 'react'
import Link from 'next/link'
import PageBanner from '../../components/PageBanner'

const FACULTY = [
  {
    id: 'vinesh',
    name: 'Mr. Vinesh Thariani',
    subject: 'Mathematics',
    badge: 'Director & Senior Faculty',
    badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
    borderColor: 'border-blue-500',
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
    borderColor: 'border-pink-500',
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
    borderColor: 'border-green-500',
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
    borderColor: 'border-purple-500',
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
    borderColor: 'border-cyan-500',
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
    borderColor: 'border-indigo-500',
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
  if (!member) return null
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-dark/50 backdrop-blur-sm" />
      <div
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 text-xl font-bold transition z-10"
        >×</button>

        <div className="grid md:grid-cols-2">
          {/* Left — image */}
          <div className={`bg-slate-50 p-8 flex flex-col items-center justify-center border-r border-slate-100 border-b-4 ${member.borderColor} rounded-l-2xl`}>
            <div className="placeholder-img w-full h-52 mb-4">
              <span className="text-5xl">👨‍🏫</span>
              <span className="text-slate-400 text-xs font-heading font-medium">Faculty Portrait Image</span>
              <span className="text-slate-300 text-xs">Replace with actual photo</span>
            </div>
            <div className={`text-xs font-heading font-semibold px-3 py-1 rounded-full border ${member.badgeColor}`}>
              {member.badge}
            </div>
          </div>

          {/* Right — info */}
          <div className="p-7">
            <h2 className="font-heading font-bold text-dark text-xl mb-1">{member.name}</h2>
            <p className="font-body text-primary text-sm font-semibold mb-4">{member.subject}</p>
            <p className="font-body text-slate-600 text-sm leading-relaxed mb-5">{member.bio}</p>

            <div className="mb-4">
              <div className="font-heading font-semibold text-slate-600 text-xs uppercase tracking-wider mb-2">Subjects Taught</div>
              <div className="flex flex-wrap gap-1.5">
                {member.subjects.map(s => (
                  <span key={s} className="bg-primary/8 text-primary text-xs font-medium px-2.5 py-1 rounded-full">{s}</span>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <div className="font-heading font-semibold text-slate-600 text-xs uppercase tracking-wider mb-2">Key Highlights</div>
              <ul className="space-y-1.5">
                {member.achievements.map(a => (
                  <li key={a} className="flex gap-2 items-start">
                    <span className="text-primary text-xs mt-0.5">✓</span>
                    <span className="font-body text-slate-600 text-xs">{a}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex gap-3">
              <Link href="/contact" onClick={onClose} className="flex-1 btn-primary text-center text-sm py-2.5">Contact</Link>
              <Link href="/faculty" onClick={onClose} className="flex-1 btn-outline text-center text-sm py-2.5">Full Faculty Page</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Faculty() {
  const [active, setActive] = useState(null)

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
            {FACULTY.map(m => (
              <div
                key={m.id}
                onClick={() => setActive(m)}
                className="card cursor-pointer group overflow-hidden"
              >
                {/* Photo placeholder */}
                <div className={`placeholder-img h-56 rounded-none rounded-t-2xl border-0 border-b-4 ${m.borderColor} bg-slate-50`}>
                  <span className="text-5xl">👨‍🏫</span>
                  <span className="text-slate-400 text-xs font-heading font-medium">Faculty Photo</span>
                  <span className="text-slate-300 text-xs">Replace with actual photo</span>
                </div>

                <div className="p-6">
                  <span className={`text-xs font-heading font-semibold px-3 py-1 rounded-full border inline-block mb-3 ${m.badgeColor}`}>
                    {m.badge}
                  </span>
                  <h3 className="font-heading font-bold text-dark text-lg group-hover:text-primary transition-colors">{m.name}</h3>
                  <p className="font-body text-primary text-sm font-semibold mt-0.5 mb-3">{m.subject}</p>
                  <p className="font-body text-slate-500 text-sm leading-relaxed line-clamp-2">{m.bio}</p>
                  <button className="mt-4 text-primary font-heading font-semibold text-sm hover:underline">
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
