import Link from 'next/link'
import PageBanner from '../../components/PageBanner'
import rankersData from '../../data/rankersData'

const YEARS = ['All', ...Array.from(new Set(rankersData.map(r => r.year))).sort((a, b) => b - a)]

function EmptyRankers() {
  return (
    <div className="col-span-full py-20 text-center">
      <div className="text-7xl mb-5">🏆</div>
      <h3 className="font-heading font-bold text-dark text-2xl mb-3">Rankers Coming Soon</h3>
      <p className="font-body text-muted text-base max-w-md mx-auto mb-6">
        Student achievers will be listed here. Add entries to{' '}
        <code className="bg-slate-100 text-primary px-2 py-0.5 rounded text-sm">data/rankersData.js</code>{' '}
        and place photos in{' '}
        <code className="bg-slate-100 text-primary px-2 py-0.5 rounded text-sm">/public/rankers/</code>.
      </p>
      <div className="inline-block bg-slate-100 rounded-2xl p-6 text-left font-mono text-xs text-slate-600 max-w-sm">
        {'{'}<br />
        &nbsp;&nbsp;name: <span className="text-green-600">"Student Name"</span>,<br />
        &nbsp;&nbsp;percentage: <span className="text-green-600">"98.4%"</span>,<br />
        &nbsp;&nbsp;course: <span className="text-green-600">"Science"</span>,<br />
        &nbsp;&nbsp;board: <span className="text-green-600">"CBSE"</span>,<br />
        &nbsp;&nbsp;year: <span className="text-green-600">"2024"</span>,<br />
        &nbsp;&nbsp;image: <span className="text-green-600">"/rankers/student1.jpg"</span><br />
        {'}'}
      </div>
    </div>
  )
}

export default function Rankers() {
  const grouped = {}
  rankersData.forEach(r => {
    if (!grouped[r.year]) grouped[r.year] = []
    grouped[r.year].push(r)
  })
  const years = Object.keys(grouped).sort((a, b) => b - a)

  return (
    <>
      <PageBanner
        tag="Hall of Fame"
        title="Our Rankers"
        subtitle="Celebrating the academic achievements of our outstanding students."
      />

      {/* Stats strip */}
      <section className="py-10 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-6 max-w-lg mx-auto text-center">
            {[
              { value: '10,000+', label: 'Students Mentored' },
              { value: '68+',     label: 'Years of Results' },
              { value: '4.8 ★',   label: 'Rating' },
            ].map(s => (
              <div key={s.label}>
                <div className="font-heading font-black text-3xl text-primary">{s.value}</div>
                <div className="font-body text-muted text-xs mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {rankersData.length === 0 ? (
            <div className="grid">
              <EmptyRankers />
            </div>
          ) : (
            years.map(year => (
              <div key={year} className="mb-14">
                <div className="flex items-center gap-4 mb-7">
                  <h2 className="font-heading font-bold text-2xl text-dark">Class of {year}</h2>
                  <div className="flex-1 h-px bg-slate-200" />
                  <span className="font-body text-muted text-sm">{grouped[year].length} Rankers</span>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {grouped[year].map((r, i) => (
                    <div key={i} className="card p-5 text-center group">
                      {/* Photo */}
                      {r.image ? (
                        <img
                          src={r.image}
                          alt={r.name}
                          className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-4 border-primary/20 group-hover:border-primary transition-colors"
                        />
                      ) : (
                        <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 text-3xl border-4 border-primary/20 group-hover:border-primary transition-colors">
                          🎓
                        </div>
                      )}

                      {/* Rank badge */}
                      {i === 0 && (
                        <div className="inline-block bg-yellow-50 text-yellow-700 border border-yellow-200 text-xs font-heading font-semibold px-3 py-1 rounded-full mb-2">
                          🥇 Top Ranker
                        </div>
                      )}

                      <div className="font-heading font-bold text-dark text-base mb-1">{r.name}</div>
                      <div className="font-heading font-black text-primary text-2xl mb-1">{r.percentage}</div>
                      <div className="font-body text-muted text-xs">{r.course}</div>
                      {r.board && (
                        <div className="inline-block mt-2 bg-primary/8 text-primary text-xs font-medium px-3 py-1 rounded-full">
                          {r.board}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-brand-gradient text-center">
        <h2 className="font-heading font-bold text-white text-2xl md:text-3xl mb-4">
          Could Your Child Be Next?
        </h2>
        <p className="font-body text-white/80 text-lg mb-8">
          Join Srichand Classes and give your child the best academic foundation.
        </p>
        <Link href="/contact" className="btn-white text-primary inline-block px-10 py-3.5">
          Enquire Now
        </Link>
      </section>
    </>
  )
}
