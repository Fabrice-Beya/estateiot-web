import { motion } from 'framer-motion'
import {
  Clock,
  ShieldCheck,
  Smartphone,
  Zap,
  Sparkles,
  Building2,
  UserCog,
  Users,
} from 'lucide-react'

const pillars = [
  {
    icon: Zap,
    title: 'Faster day-to-day operations',
    description:
      'Automate gate access, visitor approvals, and announcements so staff spend less time on manual coordination.',
  },
  {
    icon: ShieldCheck,
    title: 'Stronger security & accountability',
    description:
      'Every gate event, access code, and approval is logged, giving administrators a clear, auditable record.',
  },
  {
    icon: Sparkles,
    title: 'A better resident experience',
    description:
      'Residents get a single, modern app for access, news, and estate status — no more group chats or paper notices.',
  },
]

const audiences = [
  { icon: Building2, label: 'Estate & facility managers' },
  { icon: Users, label: 'Security teams & guards' },
  { icon: UserCog, label: 'HOAs & body corporates' },
]

const highlights = [
  { icon: Clock, value: '24/7', label: 'Access from anywhere' },
  { icon: ShieldCheck, value: 'Secure', label: 'Encrypted in transit' },
  { icon: Smartphone, value: 'iOS + Android', label: 'Native apps, live now' },
  { icon: Building2, value: 'Multi-estate', label: 'Manage a full portfolio' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as const } },
}

export default function Benefits() {
  return (
    <section id="why" className="bg-ink-50/60 py-24 lg:py-32">
      <div className="container-px">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">
            <Sparkles className="h-3.5 w-3.5" />
            Why EstateIoT
          </span>
          <h2 className="heading mt-5 text-3xl sm:text-4xl lg:text-[2.7rem]">
            Built for the people who run estates
          </h2>
          <p className="mt-5 text-lg text-ink-500">
            EstateIoT brings access control, communication, and monitoring together — measurable
            time saved for staff and a smoother experience for residents.
          </p>
        </div>

        <motion.div
          className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          transition={{ staggerChildren: 0.1 }}
        >
          {pillars.map((p) => (
            <motion.div
              key={p.title}
              variants={fadeUp}
              className="rounded-2xl border border-ink-100 bg-white p-8 shadow-soft"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-100">
                <p.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold text-ink-900">{p.title}</h3>
              <p className="mt-3 leading-relaxed text-ink-500">{p.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Highlights strip */}
        <div className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-ink-100 bg-ink-100 shadow-soft lg:grid-cols-4">
          {highlights.map((h) => (
            <div key={h.label} className="bg-white px-6 py-7 text-center">
              <h.icon className="mx-auto h-6 w-6 text-brand-600" />
              <p className="mt-3 font-display text-xl font-bold text-ink-900">{h.value}</p>
              <p className="text-sm text-ink-400">{h.label}</p>
            </div>
          ))}
        </div>

        {/* Audiences */}
        <div className="mt-16 flex flex-col items-center gap-6">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-ink-400">
            Made for
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {audiences.map((a) => (
              <span
                key={a.label}
                className="inline-flex items-center gap-2.5 rounded-full border border-ink-200 bg-white px-5 py-2.5 text-sm font-semibold text-ink-700 shadow-soft"
              >
                <a.icon className="h-4 w-4 text-brand-600" />
                {a.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
