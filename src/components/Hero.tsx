import { motion } from 'framer-motion'
import { ArrowRight, ShieldCheck, DoorOpen, Bell, Activity } from 'lucide-react'
import StoreBadges from './StoreBadges'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-28 lg:pt-36">
      {/* Background grid + glow */}
      <div className="pointer-events-none absolute inset-0 bg-grid-light [background-size:44px_44px] mask-fade-b opacity-70" />
      <div className="pointer-events-none absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-brand-400/20 blur-[120px]" />
      <div className="pointer-events-none absolute -top-24 left-[-10%] h-[420px] w-[420px] rounded-full bg-brand-200/40 blur-[120px]" />

      <div className="container-px relative">
        <div className="grid grid-cols-1 items-center gap-16 pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:pb-28">
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.div variants={item} className="flex flex-wrap items-center gap-3">
              <span className="eyebrow">
                <ShieldCheck className="h-3.5 w-3.5" />
                Smart Estate Operating System
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-600/15">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
                Live on iOS &amp; Android
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="heading mt-6 text-4xl leading-[1.05] sm:text-5xl lg:text-[3.6rem]"
            >
              The operating system for
              <span className="block gradient-text">modern gated estates</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-6 max-w-xl text-lg leading-relaxed text-ink-500"
            >
              EstateIoT connects residents, security teams, and facility administrators on one
              secure platform — remote gate control, visitor access, announcements, and
              real-time system monitoring, managed from a powerful admin portal.
            </motion.p>

            <motion.div variants={item} className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a href="#admin" className="btn-primary">
                Explore the admin portal
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#app" className="btn-ghost">
                See the resident app
              </a>
            </motion.div>

            <motion.div variants={item} className="mt-8">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-ink-400">
                Download the resident app
              </p>
              <StoreBadges />
            </motion.div>
          </motion.div>

          {/* Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative mx-auto flex max-w-md justify-center">
              {/* Soft platform behind phones */}
              <div className="absolute inset-x-6 bottom-6 top-10 rounded-[2.5rem] bg-gradient-to-b from-brand-50 to-white ring-1 ring-ink-100" />

              <motion.img
                src="/screenshot_0.png"
                alt="EstateIoT resident dashboard"
                className="relative z-20 w-[270px] drop-shadow-[0_40px_60px_rgba(12,22,38,0.25)] sm:w-[300px]"
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
              />

              {/* Floating chips */}
              <motion.div
                className="absolute -left-2 top-16 z-30 hidden rounded-2xl border border-ink-100 bg-white/90 px-4 py-3 shadow-card backdrop-blur sm:block"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    <DoorOpen className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink-900">Main Gate</p>
                    <p className="text-xs font-medium text-emerald-600">Opened remotely</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -right-2 bottom-24 z-30 hidden rounded-2xl border border-ink-100 bg-white/90 px-4 py-3 shadow-card backdrop-blur sm:block"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.85, duration: 0.6 }}
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    <Bell className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink-900">New announcement</p>
                    <p className="text-xs font-medium text-ink-400">Delivered to 248 units</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Trust / capability strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-ink-100 bg-ink-100 shadow-soft md:grid-cols-4"
        >
          {[
            { icon: DoorOpen, label: 'Remote gate control', value: 'Open from anywhere' },
            { icon: ShieldCheck, label: 'Visitor access', value: 'Codes & approvals' },
            { icon: Activity, label: 'System status', value: 'Live monitoring' },
            { icon: Bell, label: 'Announcements', value: 'Targeted delivery' },
          ].map((s) => (
            <div key={s.label} className="bg-white px-6 py-6">
              <s.icon className="h-5 w-5 text-brand-600" />
              <p className="mt-3 font-display text-base font-semibold text-ink-900">{s.value}</p>
              <p className="text-sm text-ink-400">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
