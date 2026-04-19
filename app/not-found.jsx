import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-bg px-4">
      <div className="text-center max-w-md">
        <div className="font-heading font-black text-8xl text-primary mb-4">404</div>
        <h1 className="font-heading font-bold text-dark text-2xl mb-3">Page Not Found</h1>
        <p className="font-body text-muted text-sm mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link href="/" className="btn-primary">Back to Home</Link>
      </div>
    </div>
  )
}
