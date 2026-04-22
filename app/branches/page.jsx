import Link from 'next/link'
import PageBanner from '../../components/PageBanner'

const BRANCHES = [
  {
    id: 'sion',
    name: 'Sion',
    tag: 'Main Branch',
    icon: '🏢',
    since: 'Est. 1958 — Our Original Branch',
    address: '5A/1, Sion Sindhi Colony,\nOpp. Gurukrupa Hotel,\nSion (W), Mumbai 400022',
    phone: '9820146010',
    color: 'from-blue-600 to-primary',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=5A%2F1+Sion+Sindhi+Colony+Opp+Gurukrupa+Hotel+Sion+West+Mumbai+400022',
  },
  {
    id: 'kurla',
    name: 'Kurla',
    tag: 'Branch',
    icon: '🏫',
    since: 'Established Branch',
    address: 'Shop No. 2, Sangam Apartments,\nLBS Road, near Bank of Maharashtra,\nKurla, Mumbai 400070',
    phone: '9920352980',
    color: 'from-indigo-500 to-blue-600',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Sangam+Apartments+LBS+Road+near+Bank+of+Maharashtra+Kurla+Mumbai+400070',
  },
  {
    id: 'matunga',
    name: 'Matunga',
    tag: 'Branch',
    icon: '🏫',
    since: 'Established Branch',
    address: '547, Ishan Tower,\nA. R. Jame Jamshed Road, near Five Gardens,\nMatunga, Mumbai 400019',
    phone: '9820352980',
    color: 'from-cyan-500 to-primary',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=547+Ishan+Tower+AR+Jame+Jamshed+Road+near+Five+Gardens+Matunga+Mumbai+400019',
  },
  {
    id: 'chembur',
    name: 'Chembur',
    tag: 'Branch',
    icon: '🏫',
    since: 'Established Branch',
    address: '1B/7, Tolaram Nagar CHS,\nnear Shri Guru Singh Sabha,\nChembur Camp, Mumbai 400074',
    phone: '9820352975',
    color: 'from-purple-500 to-indigo-600',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Tolaram+Nagar+CHS+near+Shri+Guru+Singh+Sabha+Chembur+Camp+Mumbai+400074',
  },
]

function BranchCard({ b }) {
  return (
    <div className="card overflow-hidden">
      {/* Header */}
      <div className={`bg-gradient-to-r ${b.color} px-7 py-6 flex items-start justify-between`}>
        <div>
          <span className="text-xs font-heading font-semibold px-3 py-1 rounded-full bg-white/20 text-white inline-block mb-3">
            {b.tag}
          </span>
          <h2 className="font-heading font-black text-white text-2xl">{b.name}</h2>
          <p className="font-body text-white/70 text-xs mt-1">{b.since}</p>
        </div>
        <span className="text-5xl">{b.icon}</span>
      </div>

      {/* Body */}
      <div className="p-7">
        <div className="grid sm:grid-cols-2 gap-8">
          {/* Left: address + phone + hours */}
          <div>
            <div className="font-heading font-semibold text-slate-500 text-xs uppercase tracking-wider mb-3">Address</div>
            <p className="font-body text-slate-700 leading-relaxed whitespace-pre-line mb-6">{b.address}</p>

            <div className="font-heading font-semibold text-slate-500 text-xs uppercase tracking-wider mb-3">Phone</div>
            <a
              href={`tel:+91${b.phone}`}
              className="font-heading font-bold text-dark hover:text-primary text-xl transition-colors block mb-6"
              style={{ fontWeight: 500, letterSpacing: '0.3px', fontVariantNumeric: 'tabular-nums' }}
            >
              +91 {b.phone}
            </a>

            <div className="font-heading font-semibold text-slate-500 text-xs uppercase tracking-wider mb-2">Hours</div>
            <p className="font-body text-slate-600 text-sm" style={{ fontWeight: 500, letterSpacing: '0.3px', fontVariantNumeric: 'tabular-nums' }}>
              Mon – Sat: 11:00 AM – 8:00 PM
            </p>
          </div>

          {/* Right: action buttons */}
          <div className="flex flex-col gap-3 justify-center">
            <a
              href={`tel:+91${b.phone}`}
              className="flex items-center justify-center gap-2 bg-primary/10 hover:bg-primary text-primary hover:text-white font-heading font-semibold text-sm px-4 py-3 rounded-xl transition-all duration-200"
            >
              📞 Call Branch
            </a>
            <a
              href={`https://wa.me/91${b.phone}?text=Hello%2C%20I%20am%20enquiring%20about%20Srichand%20Classes%20${b.name}%20branch.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-green-50 hover:bg-green-600 text-green-600 hover:text-white font-heading font-semibold text-sm px-4 py-3 rounded-xl transition-all duration-200"
            >
              💬 WhatsApp
            </a>
            <a
              href={b.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-amber-50 hover:bg-amber-500 text-amber-600 hover:text-white font-heading font-semibold text-sm px-4 py-3 rounded-xl transition-all duration-200"
            >
              📍 Get Directions
            </a>
            <Link href="/contact" className="btn-primary text-sm text-center px-4 py-3 rounded-xl block">
              Enquire Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Branches() {
  return (
    <>
      <PageBanner
        tag="Our Locations"
        title="4 Branches Across Mumbai"
        subtitle="Strategically located for convenient access across Mumbai."
      />

      <section className="py-16 bg-bg">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {BRANCHES.map(b => <BranchCard key={b.id} b={b} />)}
        </div>
      </section>

      {/* Quick reference */}
      <section className="py-14 bg-white border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-title mb-8">Call Any Branch Directly</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {BRANCHES.map(b => (
              <div key={b.id} className="card p-5 text-center">
                <div className="text-3xl mb-2">{b.icon}</div>
                <div className="font-heading font-bold text-dark text-sm mb-1">{b.name}</div>
                <a
                  href={`tel:+91${b.phone}`}
                  className="font-body text-primary hover:text-secondary text-sm transition-colors"
                  style={{ fontWeight: 500, letterSpacing: '0.3px', fontVariantNumeric: 'tabular-nums' }}
                >
                  +91 {b.phone}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
