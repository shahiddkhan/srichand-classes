'use client'
import { useState } from 'react'
import PageBanner from '../../components/PageBanner'

const BRANCHES = [
  { name: 'Sion',    phone: '9820146010', tag: 'Main Branch' },
  { name: 'Kurla',   phone: '9920352980', tag: 'Branch' },
  { name: 'Matunga', phone: '9820352980', tag: 'Branch' },
  { name: 'Chembur', phone: '9820352975', tag: 'Branch' },
]

const COURSES = [
  'Class VIII', 'Class IX', 'Class X (SSC)', 'Class X (ICSE)', 'Class X (CBSE)',
  'XI Commerce', 'XII Commerce', 'XI Science', 'XII Science',
  'CA Foundation', 'ACCA', 'JEE', 'NEET', 'MHTCET', 'Other',
]

export default function Contact() {
  const [form, setForm]     = useState({ name: '', phone: '', course: '', message: '' })
  const [status, setStatus] = useState('idle')

  const change = e => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = () => {
    if (!form.name.trim() || !form.phone.trim()) return
    setStatus('sending')
    const text =
      `Hello%2C%20I%20would%20like%20to%20enquire%20about%20admissions%20at%20Srichand%20Classes.%0A` +
      `Name%3A%20${encodeURIComponent(form.name)}%0A` +
      `Phone%3A%20${encodeURIComponent(form.phone)}%0A` +
      `Course%3A%20${encodeURIComponent(form.course || 'Not specified')}%0A` +
      `Message%3A%20${encodeURIComponent(form.message || 'No message')}`
    window.open(`https://wa.me/919820146010?text=${text}`, '_blank')
    setTimeout(() => {
      setStatus('success')
      setForm({ name: '', phone: '', course: '', message: '' })
    }, 500)
  }

  return (
    <>
      <PageBanner
        tag="Get In Touch"
        title="Contact Us"
        subtitle="We're here to help with admissions, batch timings, fees and any other questions."
      />

      <section className="py-20 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14">

            {/* Left — branch contacts */}
            <div>
              <h2 className="section-title mb-2">Reach Out to a Branch</h2>
              <p className="font-body text-muted text-sm mb-8">Call or WhatsApp any branch directly for instant help.</p>

              <div className="space-y-3 mb-8">
                {BRANCHES.map((b, i) => (
                  <div key={b.name} className="card flex items-center gap-4 p-5">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="font-body font-bold text-primary text-sm">{i + 1}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5 flex-wrap">
                        <span className="font-body font-semibold text-dark text-sm">{b.name}</span>
                        <span className="font-body text-xs bg-primary/10 text-primary font-medium px-2 py-0.5 rounded-full">{b.tag}</span>
                      </div>
                      <a
                        href={`tel:+91${b.phone}`}
                        className="font-body font-semibold text-primary hover:text-secondary text-base transition-colors"
                      >
                        +91 {b.phone}
                      </a>
                    </div>
                    <div className="flex gap-2 flex-shrink-0">
                      <a
                        href={`tel:+91${b.phone}`}
                        className="w-9 h-9 rounded-full bg-primary/10 hover:bg-primary flex items-center justify-center text-primary hover:text-white transition-all"
                        title="Call"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                        </svg>
                      </a>
                      <a
                        href={`https://wa.me/91${b.phone}?text=Hello%2C%20I%20am%20enquiring%20about%20Srichand%20Classes%20${b.name}%20branch.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-full bg-green-50 hover:bg-green-600 flex items-center justify-center text-green-600 hover:text-white transition-all"
                        title="WhatsApp"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.524 5.847L0 24l6.303-1.496A11.938 11.938 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm6.218 16.442c-.26.731-1.523 1.394-2.086 1.482-.535.083-1.195.118-1.93-.121-.444-.143-1.014-.333-1.744-.654-3.065-1.324-5.07-4.41-5.222-4.617-.151-.207-1.236-1.644-1.236-3.137 0-1.492.782-2.227 1.059-2.531.277-.303.605-.379.807-.379.202 0 .403.002.58.01.186.01.435-.07.68.52.26.62.882 2.138.96 2.291.077.153.13.333.026.537-.103.203-.155.33-.303.508-.15.178-.315.397-.45.534-.148.149-.303.31-.13.608.173.3.77 1.27 1.654 2.058 1.136 1.014 2.094 1.327 2.394 1.477.3.148.476.125.652-.075.178-.2.756-.884 1.043-1.188.286-.305.571-.253.964-.153.393.1 2.496 1.176 2.923 1.39.427.213.714.318.82.497.104.179.104.93-.155 1.661z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Timings */}
              <div className="card p-5 flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-xl">🕐</div>
                <div>
                  <div className="font-body font-semibold text-dark text-sm mb-1">Office Timings</div>
                  <p className="font-body text-muted text-sm leading-relaxed">
                    <span className="font-semibold text-dark">Monday to Saturday</span><br />
                    11:00 AM – 8:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Right — enquiry form */}
            <div>
              <div className="card p-8">

                {/* Form header */}
                <h2 className="font-heading font-bold text-dark text-2xl mb-1">Send an Enquiry</h2>
                <p className="font-body text-muted text-sm mb-8">
                  Fill in the form and we'll respond via WhatsApp within a few hours.
                </p>

                {status === 'success' ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-5 text-3xl">✅</div>
                    <h3 className="font-heading font-bold text-dark text-xl mb-2">Enquiry Sent!</h3>
                    <p className="font-body text-muted text-sm mb-7 max-w-xs mx-auto">
                      Your message has been sent via WhatsApp. Our team will get back to you shortly.
                    </p>
                    <button onClick={() => setStatus('idle')} className="btn-primary">
                      Send Another Enquiry
                    </button>
                  </div>
                ) : (
                  <div className="space-y-6">

                    <div>
                      <label className="block font-body font-medium text-dark text-sm mb-2">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text" name="name" value={form.name} onChange={change}
                        placeholder="Student or parent name"
                        className="input-field"
                      />
                    </div>

                    <div>
                      <label className="block font-body font-medium text-dark text-sm mb-2">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel" name="phone" value={form.phone} onChange={change}
                        placeholder="Your mobile number"
                        className="input-field"
                      />
                    </div>

                    <div>
                      <label className="block font-body font-medium text-dark text-sm mb-2">
                        Course Interest
                      </label>
                      <select name="course" value={form.course} onChange={change} className="input-field">
                        <option value="">Select a course</option>
                        {COURSES.map(c => <option key={c} value={c}>{c}</option>)}
                      </select>
                    </div>

                    <div>
                      <label className="block font-body font-medium text-dark text-sm mb-2">
                        Message
                      </label>
                      <textarea
                        name="message" value={form.message} onChange={change}
                        rows={4}
                        placeholder="Questions about fees, timings, batch availability..."
                        className="input-field resize-none"
                      />
                    </div>

                    <button
                      onClick={submit}
                      disabled={status === 'sending'}
                      className="w-full btn btn-primary text-base disabled:opacity-60"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.524 5.847L0 24l6.303-1.496A11.938 11.938 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm6.218 16.442c-.26.731-1.523 1.394-2.086 1.482-.535.083-1.195.118-1.93-.121-.444-.143-1.014-.333-1.744-.654-3.065-1.324-5.07-4.41-5.222-4.617-.151-.207-1.236-1.644-1.236-3.137 0-1.492.782-2.227 1.059-2.531.277-.303.605-.379.807-.379.202 0 .403.002.58.01.186.01.435-.07.68.52.26.62.882 2.138.96 2.291.077.153.13.333.026.537-.103.203-.155.33-.303.508-.15.178-.315.397-.45.534-.148.149-.303.31-.13.608.173.3.77 1.27 1.654 2.058 1.136 1.014 2.094 1.327 2.394 1.477.3.148.476.125.652-.075.178-.2.756-.884 1.043-1.188.286-.305.571-.253.964-.153.393.1 2.496 1.176 2.923 1.39.427.213.714.318.82.497.104.179.104.93-.155 1.661z"/>
                      </svg>
                      {status === 'sending' ? 'Opening WhatsApp…' : 'Send via WhatsApp'}
                    </button>

                    <p className="font-body text-muted text-xs text-center leading-relaxed">
                      Your enquiry will open in WhatsApp and be sent to our Sion (Main) branch.
                    </p>

                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
