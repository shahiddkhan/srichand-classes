export default function PageBanner({ tag, title, subtitle }) {
  return (
    <section className="pt-28 pb-16 bg-brand-gradient relative overflow-hidden">
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle at 70% 50%, white 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {tag && (
          <span className="inline-block bg-white/20 text-white font-body text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            {tag}
          </span>
        )}
        <h1 className="font-heading font-black text-3xl md:text-5xl text-white leading-tight mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="font-body text-white/80 text-lg max-w-2xl mx-auto">{subtitle}</p>
        )}
      </div>
    </section>
  )
}
