import React from 'react'
import Modal from './Modal'
import { Link } from 'react-router-dom'

export default function CourseModal({ course, onClose }) {
  if (!course) return null

  return (
    <Modal open={!!course} onClose={onClose}>
      <div className="p-7">
        {/* Header */}
        <div className={`inline-flex items-center gap-2 text-sm font-heading font-semibold px-3 py-1 rounded-full mb-4 ${course.tagClass}`}>
          <span>{course.icon}</span>
          <span>{course.tag}</span>
        </div>
        <h2 className="font-heading font-bold text-2xl text-slate-800 mb-1">{course.title}</h2>
        <p className="font-body text-navy-600 text-sm font-medium mb-5">{course.subtitle}</p>

        <p className="font-body text-slate-600 text-sm leading-relaxed mb-6">{course.fullDesc}</p>

        {/* Boards */}
        {course.boards && (
          <div className="mb-4">
            <div className="font-heading font-semibold text-slate-700 text-xs uppercase tracking-wider mb-2">Boards</div>
            <div className="flex flex-wrap gap-2">
              {course.boards.map(b => (
                <span key={b} className="bg-navy-50 text-navy-700 border border-navy-200 text-xs font-medium px-3 py-1 rounded-full">{b}</span>
              ))}
            </div>
          </div>
        )}

        {/* Subjects */}
        {course.subjects && (
          <div className="mb-4">
            <div className="font-heading font-semibold text-slate-700 text-xs uppercase tracking-wider mb-2">Subjects</div>
            <div className="flex flex-wrap gap-2">
              {course.subjects.map(s => (
                <span key={s} className="bg-slate-100 text-slate-700 text-xs font-medium px-3 py-1 rounded-full">{s}</span>
              ))}
            </div>
          </div>
        )}

        {/* Classes */}
        {course.classes && (
          <div className="mb-5">
            <div className="font-heading font-semibold text-slate-700 text-xs uppercase tracking-wider mb-2">Classes / Levels</div>
            <div className="flex flex-wrap gap-2">
              {course.classes.map(c => (
                <span key={c} className="bg-indigo-50 text-indigo-700 text-xs font-medium px-3 py-1 rounded-full border border-indigo-200">{c}</span>
              ))}
            </div>
          </div>
        )}

        {/* Fee */}
        {course.fee && (
          <div className="bg-slate-50 rounded-xl p-4 mb-6">
            <div className="font-body text-slate-500 text-xs mb-1">Estimated Fee</div>
            <div className="font-heading font-bold text-slate-800 text-base">{course.fee}</div>
            <div className="font-body text-slate-400 text-xs mt-0.5">Installments available</div>
          </div>
        )}

        <div className="flex gap-3">
          <Link
            to="/courses"
            onClick={onClose}
            className="flex-1 btn-outline text-center text-sm py-2.5"
          >
            View Full Courses Page
          </Link>
          <Link
            to="/contact"
            onClick={onClose}
            className="flex-1 btn-primary text-center text-sm py-2.5"
          >
            Enquire Now
          </Link>
        </div>
      </div>
    </Modal>
  )
}
