import { motion } from 'framer-motion'
import {
  Lock,
  Bell,
  Users,
  Eye,
  Cpu,
  Wifi,
  Smartphone,
  Layers,
  ShieldCheck,
} from 'lucide-react'

const features = [
  {
    icon: Lock,
    title: 'Smart access control',
    description:
      'Open and close gates remotely, pre-register visitors, and generate single-use access codes — every event logged.',
  },
  {
    icon: Bell,
    title: 'Targeted announcements',
    description:
      'Reach the whole estate or specific units with priority notices, push notifications, and read tracking.',
  },
  {
    icon: Eye,
    title: 'Live system status',
    description:
      'Monitor gates, cameras, and utilities at a glance. Operational, maintenance, and issue states surface instantly.',
  },
  {
    icon: Users,
    title: 'Roles & permissions',
    description:
      'Granular access for administrators, security teams, and residents — each sees exactly what they should.',
  },
  {
    icon: Wifi,
    title: 'IoT device integration',
    description:
      'Connect gate controllers, sensors, and cameras to a single hub with a consistent, secure interface.',
  },
  {
    icon: Smartphone,
    title: 'Native mobile apps',
    description:
      'Polished iOS and Android apps keep residents and guards connected to the estate from anywhere.',
  },
]

const stack = [
  { icon: ShieldCheck, label: 'Encrypted in transit' },
  { icon: Layers, label: 'Scalable cloud' },
  { icon: Wifi, label: 'IoT hub' },
  { icon: Smartphone, label: 'iOS & Android' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as const } },
}

export default function Features() {
  return (
    <section id="platform" className="bg-ink-50/60 py-24 lg:py-32">
      <div className="container-px">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">
            <Cpu className="h-3.5 w-3.5" />
            One connected platform
          </span>
          <h2 className="heading mt-5 text-3xl sm:text-4xl lg:text-[2.7rem]">
            Everything an estate needs, in one place
          </h2>
          <p className="mt-5 text-lg text-ink-500">
            EstateIoT replaces scattered tools and manual processes with a single, secure system
            for access, communication, and monitoring.
          </p>
        </div>

        <motion.div
          className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          transition={{ staggerChildren: 0.08 }}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={fadeUp}
              className="group relative overflow-hidden rounded-2xl border border-ink-100 bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-card"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-100 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                <feature.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold text-ink-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-500">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {stack.map((s) => (
            <div key={s.label} className="flex items-center gap-2 text-ink-400">
              <s.icon className="h-5 w-5 text-brand-500" />
              <span className="text-sm font-semibold">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
