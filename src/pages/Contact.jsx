import React, { useState } from 'react'
import PageBanner from '../components/PageBanner'
import { BRANCHES } from '../data'

const CLASS_OPTIONS = [
  'Class VIII', 'Class IX', 'Class X (SSC)',
  'Class X (ICSE)', 'Class X (CBSE)',
  'XI Commerce', 'XII Commerce',
  'BCom', 'BAF', 'BBI', 'Other',
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', cls: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = () => {
    if (!form.name || !form.phone) return
    const text =
      `Hello%2C%20I%20would%20like%20to%20enquire%20about%20admissions%20at%20Srichand%20Classes.%0A` +
      `Name%3A%20${encodeURIComponent(form.name)}%0A` +
      `Phone%3A%20${encodeURIComponent(form.phone)}%0A` +
      `Class%3A%20${encodeURIComponent(form.cls || 'Not specified')}%0A` +
      `Message%3A%20${encodeURIComponent(form.message || 'No additional message')}`
    window.open(`https://wa.me/919819773151?text=${text}`, '_blank')
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <>
      <PageBanner
        tag="Get In Touch"
        title="Contact Us"
        subtitle="Reach out for admissions, batch timings, fee details or any other enquiry."
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14">

            {/* Left — contact info */}
            <div>
              <h2 className="section-title mb-8">Our Contact Numbers</h2>

              <div className="space-y-4 mb-10">
                {BRANCHES.map(b => (
                  <div key={b.id} className="card flex items-center gap-5 p-5">
                    <div className="w-12 h-12 rounded-full bg-navy-50 flex items-center justify-center text-2xl flex-shrink-0">
                      📞
                    </div>
                    <div className="flex-1">
                      <div className="font-heading font-semibold text-slate-700 text-sm">{b.name} Branch</div>
                      <a
                        href={`tel:+91${b.phone.replace(/\s/g, '')}`}
                        className="font-heading font-bold text-navy-800 hover:text-navy-600 text-xl transition-colors"
                      >
                        {b.phone}
                      </a>
                    </div>
                    <a
                      href={`https://wa.me/91${b.phone.replace(/\s/g, '')}?text=Hello%2C%20I%20am%20enquiring%20about%20Srichand%20Classes.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-600 hover:bg-green-700 text-white font-heading font-semibold text-xs px-3 py-2 rounded-lg transition"
                    >
                      💬 WA
                    </a>
                  </div>
                ))}
              </div>

              {/* Branch addresses */}
              <h3 className="font-heading font-bold text-slate-800 text-lg mb-5">Our Branches</h3>
              <div className="space-y-5">
                {BRANCHES.map(b => (
                  <div key={b.id} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-xl flex-shrink-0 mt-0.5">
                      {b.icon}
                    </div>
                    <div>
                      <div className="font-heading font-semibold text-slate-800 text-sm">{b.name}</div>
                      <p className="font-body text-slate-500 text-sm leading-relaxed whitespace-pre-line mt-0.5">
                        {b.address}
                      </p>
                      <a
                        href={b.maps}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-body text-navy-600 hover:text-navy-800 text-xs mt-1 inline-block transition-colors"
                      >
                        View on Google Maps →
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — enquiry form */}
            <div>
              <div className="card p-8">
                <h2 className="font-heading font-bold text-slate-800 text-2xl mb-2">Send an Enquiry</h2>
                <p className="font-body text-slate-500 text-sm mb-7">
                  Fill in the form below and your enquiry will be sent directly via WhatsApp.
                </p>

                <div className="space-y-5">
                  <div>
                    <label className="block font-body text-slate-700 text-sm font-medium mb-1.5">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Student or parent name"
                      className="input-field"
                    />
                  </div>

                  <div>
                    <label className="block font-body text-slate-700 text-sm font-medium mb-1.5">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="Your mobile number"
                      className="input-field"
                    />
                  </div>

                  <div>
                    <label className="block font-body text-slate-700 text-sm font-medium mb-1.5">
                      Class / Course
                    </label>
                    <select
                      name="cls"
                      value={form.cls}
                      onChange={handleChange}
                      className="input-field"
                    >
                      <option value="">Select class or course</option>
                      {CLASS_OPTIONS.map(c => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block font-body text-slate-700 text-sm font-medium mb-1.5">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Questions about batch timings, fees, subjects..."
                      className="input-field resize-none"
                    />
                  </div>

                  <button
                    onClick={handleSubmit}
                    className="w-full btn-primary py-3.5 flex items-center justify-center gap-2 text-base"
                  >
                    <span>💬</span>
                    {sent ? 'Opening WhatsApp...' : 'Send via WhatsApp'}
                  </button>

                  <p className="font-body text-slate-400 text-xs text-center">
                    Your enquiry will be sent to our admissions team via WhatsApp.
                  </p>
                </div>
              </div>

              {/* Timing info */}
              <div className="card p-6 mt-5 flex gap-4 items-start">
                <span className="text-2xl">🕐</span>
                <div>
                  <div className="font-heading font-semibold text-slate-800 text-sm mb-1">Office Timings</div>
                  <p className="font-body text-slate-500 text-sm">
                    Monday to Saturday: 8:00 AM – 8:00 PM<br />
                    Sunday: 9:00 AM – 1:00 PM (Enquiries only)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
