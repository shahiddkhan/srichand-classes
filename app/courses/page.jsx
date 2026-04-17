import Link from 'next/link'
import PageBanner from '../../components/PageBanner'

// ─── DATA ─────────────────────────────────────────────────────────────────────
const SCHOOL = {
  id: 'school',
  icon: '🏫',
  title: 'School Coaching',
  subtitle: 'Class VIII · IX · X',
  desc: 'Comprehensive coaching across all major boards with small batches, weekly tests and personalised attention. Our school programme builds strong conceptual foundations that support students through board exams and beyond.',
  boards: ['SSC', 'ICSE', 'CBSE'],
  subjects: ['Mathematics', 'Science', 'English', 'Geography', 'Social Studies', 'Hindi', 'Marathi'],
  highlights: ['Small batch sizes', 'Board-pattern weekly tests', 'Writing practice sessions', 'PTM every term'],
  color: 'from-blue-500 to-primary',
}

const COMMERCE = {
  id: 'commerce',
  icon: '📊',
  title: 'Junior College Commerce',
  subtitle: 'XI & XII Commerce (HSC)',
  desc: 'Specialised Commerce coaching for HSC students. Our faculty bring deep subject expertise and exam strategy to ensure students excel in board exams and lay a strong foundation for Commerce degrees.',
  boards: ['Maharashtra State Board (HSC)'],
  subjects: ['Accounts', 'Economics', 'OCM (Organisation of Commerce)', 'Mathematics'],
  highlights: ['Expert Commerce faculty', 'Chapter-wise notes', 'Mock board papers', 'Answer writing workshops'],
  color: 'from-indigo-500 to-blue-600',
}

const SCIENCE = {
  id: 'science',
  icon: '🔬',
  title: 'Junior College Science',
  subtitle: 'XI & XII Science (HSC)',
  desc: 'Science coaching for XI and XII students targeting HSC board exams and competitive entrance tests. We build rigorous theoretical understanding alongside problem-solving skills.',
  boards: ['Maharashtra State Board (HSC)'],
  subjects: ['Physics', 'Chemistry', 'Mathematics', 'Biology'],
  highlights: ['Conceptual depth', 'Numerical problem practice', 'Board + entrance exam focus', 'Regular tests'],
  color: 'from-cyan-500 to-blue-500',
}

const PROFESSIONAL = {
  id: 'professional',
  icon: '📈',
  title: 'Professional Courses',
  subtitle: 'Specialised Entrance & Professional Coaching',
  desc: 'Focused coaching for professional qualifications and competitive entrance examinations. Expert faculty with deep knowledge of exam patterns and syllabus.',
  boards: [],
  subjects: [],
  programmes: [
    { name: 'ACCA',         desc: 'Association of Chartered Certified Accountants — international finance qualification.' },
    { name: 'CA Foundation',desc: 'ICAI CA Foundation coaching with structured syllabus coverage and mock tests.' },
    { name: 'MHTCET',       desc: 'Maharashtra Common Entrance Test preparation for engineering and pharmacy.' },
    { name: 'JEE',          desc: 'Joint Entrance Examination coaching for IIT and NIT aspirants.' },
    { name: 'NEET',         desc: 'National Eligibility cum Entrance Test preparation for medical aspirants.' },
  ],
  highlights: ['Small expert batches', 'Exam-pattern focused', 'Mock tests & analysis', 'Mentoring sessions'],
  color: 'from-purple-500 to-indigo-600',
}

// ─── COURSE CARD ──────────────────────────────────────────────────────────────
function CourseCard({ data }) {
  return (
    <div id={data.id} className="scroll-mt-24 card overflow-hidden mb-10">
      {/* Header */}
      <div className={`bg-gradient-to-r ${data.color} px-8 py-7 flex items-center gap-5`}>
        <span className="text-5xl">{data.icon}</span>
        <div>
          <h2 className="font-heading font-black text-white text-2xl md:text-3xl">{data.title}</h2>
          <p className="font-body text-white/80 text-sm mt-0.5">{data.subtitle}</p>
        </div>
      </div>

      <div className="p-8">
        <p className="font-body text-slate-600 text-base leading-relaxed mb-7">{data.desc}</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Boards */}
          {data.boards.length > 0 && (
            <div>
              <div className="font-heading font-semibold text-slate-700 text-xs uppercase tracking-wider mb-3">Boards</div>
              <div className="flex flex-wrap gap-2">
                {data.boards.map(b => (
                  <span key={b} className="bg-primary/10 text-primary border border-primary/20 text-xs font-medium px-3 py-1 rounded-full">{b}</span>
                ))}
              </div>
            </div>
          )}

          {/* Subjects */}
          {data.subjects && data.subjects.length > 0 && (
            <div>
              <div className="font-heading font-semibold text-slate-700 text-xs uppercase tracking-wider mb-3">Subjects</div>
              <div className="flex flex-wrap gap-2">
                {data.subjects.map(s => (
                  <span key={s} className="bg-slate-100 text-slate-700 text-xs font-medium px-3 py-1 rounded-full">{s}</span>
                ))}
              </div>
            </div>
          )}

          {/* Highlights */}
          <div>
            <div className="font-heading font-semibold text-slate-700 text-xs uppercase tracking-wider mb-3">Highlights</div>
            <ul className="space-y-1.5">
              {data.highlights.map(h => (
                <li key={h} className="flex gap-2 items-start">
                  <span className="text-primary mt-0.5 text-xs">✓</span>
                  <span className="font-body text-slate-600 text-xs">{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Programmes (for professional) */}
        {data.programmes && (
          <div className="mb-7">
            <div className="font-heading font-semibold text-slate-700 text-xs uppercase tracking-wider mb-4">Programmes Offered</div>
            <div className="grid sm:grid-cols-2 gap-4">
              {data.programmes.map(p => (
                <div key={p.name} className="bg-bg rounded-xl p-4">
                  <div className="font-heading font-bold text-dark text-sm mb-1">{p.name}</div>
                  <div className="font-body text-muted text-xs leading-relaxed">{p.desc}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        <Link href="/contact" className="btn-primary text-sm px-6 py-2.5">Enquire About This Course</Link>
      </div>
    </div>
  )
}

export default function Courses() {
  return (
    <>
      <PageBanner
        tag="Our Programmes"
        title="Courses at Srichand Classes"
        subtitle="Structured, expert coaching for every stage of academic life."
      />

      {/* Quick jump nav */}
      <section className="py-6 bg-white border-b border-slate-100 sticky top-[70px] z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              { href: '#school',       label: '🏫 School (VIII–X)' },
              { href: '#commerce',     label: '📊 Jr. Commerce' },
              { href: '#science',      label: '🔬 Jr. Science' },
              { href: '#professional', label: '📈 Professional' },
            ].map(l => (
              <a
                key={l.href}
                href={l.href}
                className="font-heading font-semibold text-sm text-primary border border-primary/30 bg-primary/5 hover:bg-primary hover:text-white px-4 py-2 rounded-xl transition-all"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-bg">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <CourseCard data={SCHOOL} />
          <CourseCard data={COMMERCE} />
          <CourseCard data={SCIENCE} />
          <CourseCard data={PROFESSIONAL} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-brand-gradient text-center">
        <h2 className="font-heading font-bold text-white text-2xl md:text-3xl mb-4">Ready to Get Started?</h2>
        <p className="font-body text-white/80 text-lg mb-8">Contact your nearest branch to check seat availability.</p>
        <Link href="/contact" className="btn-white text-primary inline-block px-10 py-3.5">Contact Us</Link>
      </section>
    </>
  )
}
