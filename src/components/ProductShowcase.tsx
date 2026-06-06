import { motion } from 'framer-motion'
import { DoorOpen, Megaphone, Activity, CheckCircle2 } from 'lucide-react'
import StoreBadges from './StoreBadges'

const showcase = [
  {
    icon: DoorOpen,
    eyebrow: 'Gate management',
    title: 'Open the gate from your pocket',
    description:
      'Residents and guards control entrance and exit gates in real time, view live status, and report issues instantly.',
    image: '/screenshot_1.png',
    points: ['Remote open & close', 'Live gate status', 'One-tap issue reporting', 'Full access history'],
  },
  {
    icon: Megaphone,
    eyebrow: 'Announcements',
    title: 'Keep the community informed',
    description:
      'Estate news, meeting minutes, and urgent notices arrive instantly with clear priority labels and read counts.',
    image: '/screenshot_2.png',
    points: ['Priority labels', 'Push notifications', 'Read tracking', 'Categorised feed'],
  },
  {
    icon: Activity,
    eyebrow: 'System status',
    title: 'See what’s operational at a glance',
    description:
      'A live overview of gates, cameras, security, and utilities — so everyone knows the state of the estate.',
    image: '/screenshot_3.png',
    points: ['Operational overview', 'Per-device detail', 'Maintenance alerts', 'Last-updated stamps'],
  },
]

export default function ProductShowcase() {
  return (
    <section id="app" className="bg-white py-24 lg:py-32">
      <div className="container-px">
        <div className="grid items-end gap-8 lg:grid-cols-[1.4fr_1fr]">
          <div className="max-w-2xl">
            <span className="eyebrow">
              <DoorOpen className="h-3.5 w-3.5" />
              The resident app
            </span>
            <h2 className="heading mt-5 text-3xl sm:text-4xl lg:text-[2.7rem]">
              Estate life, simplified for every resident
            </h2>
            <p className="mt-5 text-lg text-ink-500">
              Available now on the App Store and Google Play. Designed for residents, security
              guards, and administrators alike.
            </p>
          </div>
          <div className="lg:pb-2">
            <StoreBadges variant="light" />
          </div>
        </div>

        <div className="mt-20 space-y-24">
          {showcase.map((item, index) => (
            <div
              key={item.title}
              className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2"
            >
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={index % 2 === 1 ? 'lg:order-2' : ''}
              >
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">
                  <item.icon className="h-4 w-4" />
                  {item.eyebrow}
                </span>
                <h3 className="heading mt-3 text-2xl sm:text-3xl">{item.title}</h3>
                <p className="mt-4 max-w-lg text-lg text-ink-500">{item.description}</p>
                <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {item.points.map((p) => (
                    <li key={p} className="flex items-center gap-2.5 text-[15px] font-medium text-ink-700">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-brand-500" />
                      {p}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`relative flex justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}
              >
                <div className="absolute inset-x-10 bottom-8 top-12 rounded-[2.5rem] bg-gradient-to-b from-brand-50 to-ink-50/40 ring-1 ring-ink-100" />
                <img
                  src={item.image}
                  alt={item.title}
                  className="relative w-[280px] drop-shadow-[0_30px_50px_rgba(12,22,38,0.2)] sm:w-[300px]"
                />
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
