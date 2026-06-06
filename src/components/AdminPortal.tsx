import { motion } from 'framer-motion'
import {
  LayoutDashboard,
  Building2,
  Users,
  DoorOpen,
  Megaphone,
  Activity,
  Settings,
  ShieldCheck,
  ArrowRight,
  TrendingUp,
} from 'lucide-react'

const capabilities = [
  {
    icon: Building2,
    title: 'Multi-estate management',
    desc: 'Administer one estate or a whole portfolio from a single console with per-estate roles.',
  },
  {
    icon: Users,
    title: 'Residents & access',
    desc: 'Onboard units, manage residents, guards, and visitor permissions with full audit trails.',
  },
  {
    icon: DoorOpen,
    title: 'Gate & device control',
    desc: 'Configure gates, monitor IoT devices, and review every open/close event in real time.',
  },
  {
    icon: Megaphone,
    title: 'Announcements',
    desc: 'Broadcast targeted notices to units with read tracking and priority levels.',
  },
]

const navItems = [
  { icon: LayoutDashboard, label: 'Overview', active: true },
  { icon: Building2, label: 'Estates' },
  { icon: Users, label: 'Residents' },
  { icon: DoorOpen, label: 'Gates' },
  { icon: Megaphone, label: 'Announcements' },
  { icon: Activity, label: 'System status' },
  { icon: Settings, label: 'Settings' },
]

export default function AdminPortal() {
  return (
    <section id="admin" className="relative overflow-hidden bg-ink-950 py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 bg-grid-dark [background-size:48px_48px] opacity-40" />
      <div className="pointer-events-none absolute -right-24 top-0 h-[480px] w-[480px] rounded-full bg-brand-500/20 blur-[140px]" />

      <div className="container-px relative">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow-dark">
            <ShieldCheck className="h-3.5 w-3.5" />
            For facility administrators
          </span>
          <h2 className="heading mt-5 text-3xl text-white sm:text-4xl lg:text-[2.7rem]">
            One portal to run the entire estate
          </h2>
          <p className="mt-5 text-lg text-ink-300">
            The EstateIoT admin portal gives property managers complete oversight — residents,
            gates, devices, and communications across every estate they operate.
          </p>
        </div>

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-ink-900 shadow-[0_40px_120px_-30px_rgba(0,0,0,0.7)]">
              {/* Window bar */}
              <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                <span className="h-3 w-3 rounded-full bg-[#28c840]" />
                <div className="ml-3 flex-1">
                  <div className="mx-auto w-fit rounded-md bg-white/5 px-3 py-1 text-[11px] font-medium text-ink-300">
                    portal.estateiot.com
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-[150px_1fr] sm:grid-cols-[180px_1fr]">
                {/* Sidebar */}
                <aside className="hidden border-r border-white/10 bg-white/[0.02] p-3 sm:block">
                  <div className="mb-4 flex items-center gap-2 px-2">
                    <img src="/icon.png" alt="" className="h-6 w-6 rounded-md" />
                    <span className="font-display text-sm font-bold text-white">EstateIoT</span>
                  </div>
                  <nav className="space-y-1">
                    {navItems.map((n) => (
                      <div
                        key={n.label}
                        className={`flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-[13px] ${
                          n.active
                            ? 'bg-brand-500/15 font-semibold text-brand-200 ring-1 ring-brand-400/30'
                            : 'text-ink-300'
                        }`}
                      >
                        <n.icon className="h-4 w-4" />
                        {n.label}
                      </div>
                    ))}
                  </nav>
                </aside>

                {/* Main */}
                <div className="p-4 sm:p-5">
                  <div className="mb-4 flex items-center justify-between">
                    <div>
                      <p className="text-[11px] uppercase tracking-wide text-ink-400">Overview</p>
                      <p className="font-display text-base font-semibold text-white">
                        Rynfieldz Estate
                      </p>
                    </div>
                    <span className="rounded-lg bg-emerald-500/15 px-2.5 py-1 text-[11px] font-semibold text-emerald-300 ring-1 ring-emerald-400/30">
                      All systems operational
                    </span>
                  </div>

                  {/* Stat cards */}
                  <div className="grid grid-cols-3 gap-2.5">
                    {[
                      { label: 'Units', value: '248' },
                      { label: 'Residents', value: '612' },
                      { label: 'Gates', value: '4' },
                    ].map((s) => (
                      <div key={s.label} className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
                        <p className="font-display text-xl font-bold text-white">{s.value}</p>
                        <p className="text-[11px] text-ink-400">{s.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Activity chart */}
                  <div className="mt-3 rounded-xl border border-white/10 bg-white/[0.03] p-4">
                    <div className="mb-3 flex items-center justify-between">
                      <p className="text-[12px] font-medium text-ink-200">Gate activity · 7 days</p>
                      <span className="flex items-center gap-1 text-[11px] font-semibold text-emerald-300">
                        <TrendingUp className="h-3.5 w-3.5" /> +12%
                      </span>
                    </div>
                    <div className="flex h-20 items-end gap-1.5">
                      {[40, 62, 48, 80, 55, 92, 70].map((h, i) => (
                        <div
                          key={i}
                          className="flex-1 rounded-t-md bg-gradient-to-t from-brand-600/40 to-brand-400"
                          style={{ height: `${h}%` }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Device rows */}
                  <div className="mt-3 space-y-2">
                    {[
                      { name: 'Main Gate', status: 'Operational', ok: true },
                      { name: 'Security Cameras', status: 'Maintenance', ok: false },
                    ].map((d) => (
                      <div
                        key={d.name}
                        className="flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.02] px-3 py-2.5"
                      >
                        <span className="text-[12px] font-medium text-ink-100">{d.name}</span>
                        <span
                          className={`flex items-center gap-1.5 text-[11px] font-semibold ${
                            d.ok ? 'text-emerald-300' : 'text-amber-300'
                          }`}
                        >
                          <span
                            className={`h-1.5 w-1.5 rounded-full ${
                              d.ok ? 'bg-emerald-400' : 'bg-amber-400'
                            }`}
                          />
                          {d.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Capabilities */}
          <div className="space-y-3">
            {capabilities.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group flex gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-brand-400/40 hover:bg-white/[0.06]"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-500/15 text-brand-300 ring-1 ring-brand-400/20">
                  <c.icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display text-base font-semibold text-white">{c.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-300">{c.desc}</p>
                </div>
              </motion.div>
            ))}

            <a
              href="#contact"
              className="mt-2 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-ink-900 transition-all hover:-translate-y-0.5 hover:bg-ink-50"
            >
              Request a portal demo
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
