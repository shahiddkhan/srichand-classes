import React from 'react'
import { Link } from 'react-router-dom'
import PageBanner from '../components/PageBanner'
import { BRANCHES } from '../data'

export default function Branches() {
  return (
    <>
      <PageBanner
        tag="Our Locations"
        title="3 Branches Across Mumbai"
        subtitle="Conveniently located across central Mumbai for easy student access."
      />

      {/* Branch cards */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {BRANCHES.map((b, i) => (
            <div key={b.id} className="card overflow-hidden">
              <div className="grid md:grid-cols-3">

                {/* Left — dark header */}
                <div className="bg-navy-900 p-8 flex flex-col justify-between">
                  <div>
                    <span className={`text-xs font-heading font-semibold px-3 py-1 rounded-full inline-block mb-4 ${b.tagClass}`}>
                      {b.tag}
                    </span>
                    <div className="text-5xl mb-4">{b.icon}</div>
                    <h2 className="font-heading font-bold text-white text-2xl">{b.name}</h2>
                    <p className="font-body text-navy-300 text-sm mt-1">{b.since}</p>
                  </div>
                  <div className="mt-6">
                    <a
                      href={`tel:+91${b.phone.replace(/\s/g, '')}`}
                      className="font-heading font-bold text-white hover:text-blue-300 text-lg transition-colors"
                    >
                      📞 {b.phone}
                    </a>
                  </div>
                </div>

                {/* Middle — address & image */}
                <div className="p-8 border-r border-slate-100">
                  <div className="font-heading font-semibold text-slate-500 text-xs uppercase tracking-wider mb-3">
                    Address
                  </div>
                  <p className="font-body text-slate-700 text-base leading-relaxed whitespace-pre-line mb-6">
                    {b.address}
                  </p>
                  <div className="placeholder-img h-28 text-xs">
                    <span className="text-2xl">📍</span>
                    <span className="text-slate-400 font-heading">[Branch Image]</span>
                  </div>
                </div>

                {/* Right — actions */}
                <div className="p-8 flex flex-col justify-center gap-4 bg-slate-50">
                  <div className="font-heading font-semibold text-slate-700 text-sm mb-1">Quick Actions</div>

                  <a
                    href={b.maps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline text-sm py-2.5 text-center"
                  >
                    🗺️ Get Directions
                  </a>

                  <a
                    href={`https://wa.me/91${b.phone.replace(/\s/g, '')}?text=Hello%2C%20I%20am%20enquiring%20about%20admissions%20at%20Srichand%20Classes%20${b.name}%20branch.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 hover:bg-green-700 text-white font-heading font-semibold text-sm px-4 py-2.5 rounded-lg transition-colors text-center"
                  >
                    💬 WhatsApp
                  </a>

                  <Link to="/contact" className="btn-primary text-sm py-2.5 text-center">
                    Enquire Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* All phones quick reference */}
      <section className="py-14 bg-slate-50 border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-title mb-8">Call Us Directly</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {BRANCHES.map(b => (
              <div key={b.id} className="card p-5">
                <div className="font-heading font-semibold text-slate-600 text-sm mb-1">{b.name}</div>
                <a
                  href={`tel:+91${b.phone.replace(/\s/g, '')}`}
                  className="font-heading font-bold text-navy-800 hover:text-navy-600 text-lg transition-colors"
                >
                  {b.phone}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
