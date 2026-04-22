import Link from "next/link";
import PageBanner from "../../components/PageBanner";

const PILLARS = [
  {
    icon: "📖",
    title: "Concept Clarity",
    desc: 'True learning comes from deep understanding. We teach the "why" behind every topic so students can handle any question — seen or unseen.',
  },
  {
    icon: "✍️",
    title: "Writing Practice",
    desc: "Board exams reward well-written, well-presented answers. Our structured writing sessions train students to express knowledge clearly and score maximum marks.",
  },
  {
    icon: "📝",
    title: "Regular Evaluation",
    desc: "Weekly tests and monthly assessments mirror board exam conditions. Consistent evaluation keeps students sharp and highlights areas for improvement.",
  },
  {
    icon: "🤝",
    title: "Personal Mentoring",
    desc: "Small batches mean every student is known by name. Our faculty track individual progress and provide focused guidance wherever a student needs it most.",
  },
];

const JOURNEY = [
  {
    year: "1958",
    title: "Foundation",
    desc: "Srichand Classes established in Sion, Mumbai, with a vision to provide high-quality, affordable coaching to every Mumbai student.",
  },
  {
    year: "1970s",
    title: "Commerce",
    desc: "Added Junior College Commerce coaching helping HSC students excel in Mathematics, Accountancy, Economics and OCM.",
  },
  {
    year: "1990s",
    title: "Science",
    desc: "Expanded into Science coaching HSC students in Physics,Chemistry,Mathematics and Biology.",
  },
  {
    year: "2000s",
    title: "50,000 Students",
    desc: "A landmark decade — Srichand Classes crossed 50,000 students mentored, with alumni in top careers across India and abroad.",
  },
  {
    year: "2015+",
    title: "Professional/Enterance Exams",
    desc: "Introduced coaching for CA Foundation, ACCA, JEE, NEET and MHTCET.",
  },
  {
    year: "Today",
    title: "68 Years Strong",
    desc: "4 branches, 30 dedicated faculty, and thousands of successful alumni — Srichand Classes continues to shape the academic futures of Mumbai's students.",
  },
];

export default function About() {
  return (
    <>
      <PageBanner
        tag="Our Story"
        title="About Srichand Classes"
        subtitle="68 years of shaping academic futures — built on trust, excellence and a genuine love for teaching."
      />

      {/* Founder section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Text — left on desktop, second on mobile */}
            <div className="order-2 lg:order-1">
              <span className="section-tag">Est. 1958</span>
              <h2 className="section-title mb-2">Srichand Lekhraj Thariani</h2>
              <p className="font-heading font-semibold text-primary text-base mb-6 leading-snug">
                A Legacy of Learning, Discipline, and Impact
              </p>

              <p className="font-body text-slate-600 text-base leading-relaxed mb-4">
                Srichand Lekhraj Thariani's journey is not just the story of an
                educator, but of a man who quietly transformed thousands of
                lives through the power of teaching.
              </p>
              <p className="font-body text-slate-600 text-base leading-relaxed mb-4">
                Beginning his career in Delhi, he soon moved to Bombay with a
                vision that extended far beyond the classroom. He started as a
                teacher at New Era School in Ulhasnagar, where his clarity of
                thought and deep commitment to his students quickly set him
                apart. Teaching for him was never just a profession—it was a
                responsibility he carried with sincerity and pride.
              </p>
              <p className="font-body text-slate-600 text-base leading-relaxed mb-4">
                His next chapter unfolded at Sindh Model High School, Grant Road
                (now known as Master Tutorials), where his influence grew
                rapidly. Students were drawn not just to his knowledge, but to
                the way he made them believe in themselves. His natural
                leadership and ability to inspire earned him the role of
                Principal—an achievement that reflected both respect and trust
                from the institution and its students.
              </p>
              <p className="font-body text-slate-600 text-base leading-relaxed mb-4">
                But his most defining work began humbly—from his own home.
              </p>
              <p className="font-body text-slate-600 text-base leading-relaxed mb-4">
                What started as a small group of students seeking extra guidance
                soon became something extraordinary. Word spread, not through
                marketing, but through genuine impact. Parents spoke, students
                returned, and before long, hundreds of students would line up on
                the very first day admissions opened, hoping to learn under him.
              </p>
              <p className="font-body text-slate-600 text-base leading-relaxed mb-4">
                This organic growth led to the expansion of his teaching into
                multiple branches across Mumbai, reaching thousands of students
                every year. Over time, he guided more than 50,000 students—each
                carrying forward a piece of his teachings, discipline, and
                belief.
              </p>
              <p className="font-body text-slate-600 text-base leading-relaxed mb-4">
                Yet, numbers alone do not define his legacy.
              </p>
              <p className="font-body text-slate-600 text-base leading-relaxed mb-4">
                He was a person whose presence could change the energy of a
                room. Someone you could never forget, even after a single
                meeting. His words stayed with you. His expectations pushed you.
                And his belief in you often came before you believed in
                yourself.
              </p>
              <p className="font-body text-slate-600 text-base leading-relaxed mb-4">
                Today, his legacy lives on—not just in institutions or
                achievements, but in people. Even the third generation of his
                family continues in the same field, carrying forward the
                principles he lived by: sincerity, discipline, and a deep
                respect for education.
              </p>

              {/* Pull quote */}
              <blockquote className="border-l-4 border-primary pl-5 py-1 mb-7">
                <p className="font-heading font-semibold text-dark text-lg leading-snug italic">
                  Srichand Lekhraj Thariani did not just teach subjects—he
                  shaped lives. And in doing so, he built something far greater
                  than a career: he built a legacy that continues to inspire.
                </p>
              </blockquote>

              <Link href="/contact" className="btn-primary">
                Get in Touch →
              </Link>
            </div>

            {/* Founder image — first on mobile, right on desktop */}
            <div className="order-1 lg:order-2">
              <div
                className="rounded-2xl overflow-hidden shadow-xl"
                style={{ aspectRatio: "4/5" }}
              >
                <img
                  src="/images/grandfather/IMG_6306.PNG"
                  alt="Srichand Lekhraj Thariani — Founder, Srichand Classes"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                    display: "block",
                  }}
                />
              </div>
              <div className="mt-4 text-center">
                <p className="font-heading font-semibold text-dark text-sm">
                  Srichand Lekhraj Thariani
                </p>
                <p className="font-body text-muted text-xs mt-0.5">
                  Founder · Srichand Classes · Est. 1958
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teaching philosophy */}
      <section className="py-20 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-tag">How We Teach</span>
            <h2 className="section-title">Our Teaching Philosophy</h2>
            <p className="font-body text-muted text-lg mt-3 max-w-xl mx-auto">
              Four principles that have guided Srichand Classes since 1958.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-7">
            {PILLARS.map((p) => (
              <div key={p.title} className="card p-7 flex gap-5">
                <span className="text-4xl flex-shrink-0">{p.icon}</span>
                <div>
                  <h3 className="font-heading font-bold text-dark text-lg mb-2">
                    {p.title}
                  </h3>
                  <p className="font-body text-muted text-sm leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Legacy strip */}
      <section className="py-16 bg-brand-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-white text-2xl md:text-3xl text-center mb-10">
            Our Legacy in Numbers
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { val: "68+", label: "Years of Teaching" },
              { val: "50,000+", label: "Students Mentored" },
              { val: "4", label: "Mumbai Branches" },
              { val: "6", label: "Expert Faculty" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-heading font-black text-5xl text-white">
                  {s.val}
                </div>
                <div className="font-body text-white/70 text-sm mt-1">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-tag">History</span>
            <h2 className="section-title">Our Journey</h2>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-200" />
            <div className="space-y-8">
              {JOURNEY.map((j, i) => (
                <div key={i} className="flex gap-6 items-stretch">
                  <div className="relative z-10 w-16 h-16 flex-shrink-0 bg-brand-gradient rounded-full flex items-center justify-center shadow-md mt-1">
                    <span className="font-heading font-black text-white text-xs text-center leading-tight px-1">
                      {j.year}
                    </span>
                  </div>
                  <div className="card p-5 flex-1 min-w-0 overflow-hidden flex flex-col justify-start">
                    <div
                      className="font-heading font-bold text-dark text-sm mb-2 break-words max-w-full"
                      style={{ overflowWrap: "anywhere" }}
                    >
                      {j.title}
                    </div>
                    <p
                      className="font-body text-muted text-sm leading-relaxed break-words max-w-full"
                      style={{ overflowWrap: "anywhere" }}
                    >
                      {j.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-dark text-center">
        <h2 className="font-heading font-bold text-white text-2xl md:text-3xl mb-4">
          Become Part of Our Legacy
        </h2>
        <p className="font-body text-slate-400 text-lg mb-8">
          Join thousands of students who have achieved their best with Srichand
          Classes.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/contact" className="btn-white text-primary">
            Enquire Now
          </Link>
          <Link
            href="/courses"
            className="btn border-2 border-white/40 text-white hover:bg-white hover:text-dark"
          >
            View Courses
          </Link>
        </div>
      </section>
    </>
  );
}
