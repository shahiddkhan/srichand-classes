import React from 'react'
import Modal from './Modal'
import { Link } from 'react-router-dom'

export default function FacultyModal({ member, onClose }) {
  if (!member) return null

  return (
    <Modal open={!!member} onClose={onClose}>
      <div className="p-7">
        {/* Photo placeholder */}
        <div className="placeholder-img h-44 rounded-xl mb-5">
          <span className="text-4xl">👨‍🏫</span>
          <span className="text-slate-400 font-heading font-medium text-sm">Faculty Teaching Image</span>
          <span className="text-slate-300 text-xs">Replace with actual photo</span>
        </div>

        <div className="mb-1">
          <span className={`text-xs font-heading font-semibold px-3 py-1 rounded-full ${member.badgeClass}`}>
            {member.badge}
          </span>
        </div>
        <h2 className="font-heading font-bold text-2xl text-slate-800 mt-3 mb-1">{member.name}</h2>
        <p className="font-body text-navy-600 text-sm font-semibold mb-4">{member.subject}</p>
        <p className="font-body text-slate-600 text-sm leading-relaxed mb-5">{member.bio}</p>

        {member.highlights && (
          <ul className="space-y-2 mb-6">
            {member.highlights.map(h => (
              <li key={h} className="flex gap-2 items-start">
                <span className="text-navy-500 mt-0.5">✓</span>
                <span className="font-body text-slate-600 text-sm">{h}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="flex gap-3">
          <Link
            to="/faculty"
            onClick={onClose}
            className="flex-1 btn-outline text-center text-sm py-2.5"
          >
            Full Faculty Page
          </Link>
          <Link
            to="/contact"
            onClick={onClose}
            className="flex-1 btn-primary text-center text-sm py-2.5"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </Modal>
  )
}
