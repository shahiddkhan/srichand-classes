import Link from 'next/link'
import PageBanner from '../../components/PageBanner'

const BRANCHES = [
  {
    id: 'sion',
    name: 'Sion',
    tag: 'Main Branch',
    tagClass: 'bg-primary text-white',
    icon: '🏢',
    since: 'Est. 1958 — Our Original Branch',
    address: '5A-1/2, Road Number 24,\nSindhi Colony,\nOpp. Gurukripa Hotel,\nSion, Mumbai 400022',
    phone: '9820146010',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.9!2d72.8638!3d19.0396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sSion%2C%20Mumbai!5e0!3m2!1sen!2sin!4v1234567890',
    color: 'from-blue-600 to-primary',
  },
  {
    id: 'kurla',
    name: 'Kurla',
    tag: 'Branch',
    tagClass: 'bg-slate-600 text-white',
    icon: '🏫',
    since: 'Established Branch',
    address: 'Kurla Branch,\nMumbai',
    phone: '9920352980',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.9!2d72.8938!3d19.0696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sKurla%2C%20Mumbai!5e0!3m2!1sen!2sin!4v1234567890',
    color: 'from-indigo-500 to-blue-600',
  },
  {
    id: 'matunga',
    name: 'Matunga',
    tag: 'Branch',
    tagClass: 'bg-slate-600 text-white',
    icon: '🏫',
    since: 'Established Branch',
    address: 'Matunga Branch,\nNear King\'s Circle,\nMumbai 400019',
    phone: '9820352980',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.9!2d72.8438!3d19.0196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sMatunga%2C%20Mumbai!5e0!3m2!1sen!2sin!4v1234567890',
    color: 'from-cyan-500 to-primary',
  },
  {
    id: 'chembur',
    name: 'Chembur',
    tag: 'Branch',
    tagClass: 'bg-slate-600 text-white',
    icon: '🏫',
    since: 'Established Branch',
    address: 'Chembur Branch,\nNear Diamond Garden,\nMumbai',
    phone: '9820352975',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.9!2d72.8938!3d19.0296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sChembur%2C%20Mumbai!5e0!3m2!1sen!2sin!4v1234567890',
    color: 'from-purple-500 to-indigo-600',
  },
]

function BranchCard({ b }) {
  return (
    <div className="card overflow-hidden">
      {/* Header */}
      <div className={`bg-gradient-to-r ${b.color} px-7 py-6 flex items-start justify-between`}>
        <div>
          <span className={`text-xs font-heading font-semibold px-3 py-1 rounded-full bg-white/20 text-white inline-block mb-3`}>
            {b.tag}
          </span>
          <h2 className="font-heading font-black text-white text-2xl">{b.name}</h2>
          <p className="font-body text-white/70 text-xs mt-1">{b.since}</p>
        </div>
        <span className="text-5xl">{b.icon}</span>
      </div>

      {/* Body */}
      <div className="grid md:grid-cols-2">
        {/* Address & actions */}
        <div className="p-7 border-r border-slate-100">
          <div className="font-heading font-semibold text-slate-500 text-xs uppercase tracking-wider mb-3">Address</div>
          <p className="font-body text-slate-700 leading-relaxed whitespace-pre-line mb-6">{b.address}</p>

          <div className="font-heading font-semibold text-slate-500 text-xs uppercase tracking-wider mb-3">Phone</div>
          <a href={`tel:+91${b.phone}`} className="font-heading font-bold text-dark hover:text-primary text-xl transition-colors block mb-7">
            +91 {b.phone}
          </a>

          <div className="flex gap-3">
            <a
              href={`tel:+91${b.phone}`}
              className="flex-1 flex items-center justify-center gap-2 bg-primary/10 hover:bg-primary text-primary hover:text-white font-heading font-semibold text-sm px-4 py-3 rounded-xl transition-all"
            >
              📞 Call
            </a>
            <a
              href={`https://wa.me/91${b.phone}?text=Hello%2C%20I%20am%20enquiring%20about%20Srichand%20Classes%20${b.name}%20branch.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-green-50 hover:bg-green-600 text-green-600 hover:text-white font-heading font-semibold text-sm px-4 py-3 rounded-xl transition-all"
            >
              💬 WhatsApp
            </a>
          </div>
          <Link href="/contact" className="btn-primary text-sm text-center w-full mt-3 py-3 block">
            Enquire Now
          </Link>
        </div>

        {/* Map */}
        <div className="relative">
          <iframe
            src={b.mapEmbed}
            width="100%"
            height="100%"
            style={{ minHeight: '260px', border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`${b.name} branch map`}
            className="rounded-br-2xl"
          />
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
                <a href={`tel:+91${b.phone}`} className="font-body text-primary hover:text-secondary text-sm transition-colors">
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
