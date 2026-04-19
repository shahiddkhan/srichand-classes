'use client'
import { useEffect } from 'react'
import Link from 'next/link'

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-bg px-4">
      <div className="text-center max-w-md">
        <div className="text-6xl mb-6">⚠️</div>
        <h1 className="font-heading font-bold text-dark text-2xl mb-3">Something went wrong</h1>
        <p className="font-body text-muted text-sm mb-8 leading-relaxed">
          An unexpected error occurred. Please try refreshing the page.
        </p>
        <div className="flex gap-3 justify-center">
          <button onClick={reset} className="btn-primary">Try Again</button>
          <Link href="/" className="btn-outline">Go Home</Link>
        </div>
      </div>
    </div>
  )
}
