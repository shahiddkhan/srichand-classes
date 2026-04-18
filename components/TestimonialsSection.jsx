const TESTIMONIALS = [
  { name: 'Priya Sharma',    cls: 'Class X – SSC',    rating: 5, text: 'Srichand Classes transformed my approach to studying. The faculty are dedicated and the regular tests kept me on track throughout the year.' },
  { name: 'Rohan Mehta',     cls: 'XII Commerce',      rating: 5, text: 'Sandeep Sir made Accountancy so much clearer. I went from average marks to a distinction in HSC. Truly grateful.' },
  { name: 'Ananya Nair',     cls: 'Class IX – ICSE',   rating: 5, text: 'The writing practice sessions are what set Srichand Classes apart. My answer presentation improved dramatically.' },
  { name: 'Vikram Joshi',    cls: 'XI Science',        rating: 5, text: 'Excellent science faculty. They break down complex Physics and Chemistry concepts into simple, understandable parts.' },
  { name: 'Shreya Patil',    cls: 'Class X – CBSE',   rating: 5, text: 'Small batches mean every student is noticed. The personal attention I received here made all the difference in my board results.' },
  { name: 'Aarav Kulkarni',  cls: 'CA Foundation',     rating: 5, text: 'The CA Foundation coaching is structured and rigorous. The faculty have excellent knowledge of the ICAI exam pattern.' },
]

function Stars({ n }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map(i => (
        <span key={i} className={i <= n ? 'text-primary' : 'text-slate-200'}>★</span>
      ))}
    </div>
  )
}

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="section-tag">Student Reviews</span>
          <h2 className="section-title">What Our Students Say</h2>

          {/* Rating badge — navy theme, no gold */}
          <div className="inline-flex items-center gap-3 bg-white border border-slate-200 rounded-2xl px-6 py-3 mt-5 shadow-card">
            <span className="font-heading font-black text-4xl text-primary">4.6</span>
            <div>
              <div className="flex gap-0.5 text-primary text-xl">★★★★★</div>
              <div className="font-body text-muted text-xs mt-0.5">Based on Google Reviews</div>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map(t => (
            <div key={t.name} className="card p-6 flex flex-col">
              <Stars n={t.rating} />
              <p className="font-body text-slate-600 text-sm leading-relaxed mt-3 flex-1">"{t.text}"</p>
              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="font-heading font-semibold text-dark text-sm">{t.name}</div>
                  <div className="font-body text-muted text-xs mt-0.5">{t.cls}</div>
                </div>
                <div className="w-8 h-8 rounded-full bg-brand-gradient flex items-center justify-center text-white font-heading font-bold text-sm flex-shrink-0">
                  {t.name[0]}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
