import { motion } from 'framer-motion'
import { ArrowRight, Mail } from 'lucide-react'
import StoreBadges from './StoreBadges'
import { site } from '../lib/site'

export default function CTA() {
  return (
    <section className="bg-white pb-24 pt-4 lg:pb-32">
      <div className="container-px">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 via-brand-600 to-brand-800 px-6 py-16 text-center shadow-lift sm:px-12 lg:py-20"
        >
          <div className="pointer-events-none absolute inset-0 bg-grid-dark [background-size:40px_40px] opacity-30" />
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-ink-950/20 blur-3xl" />

          <div className="relative mx-auto max-w-2xl">
            <h2 className="heading text-3xl text-white sm:text-4xl lg:text-[2.6rem]">
              Bring your estate online today
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-brand-50">
              Download the resident app, or talk to us about rolling EstateIoT out across your
              estate with the admin portal.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={`mailto:${site.salesEmail}`}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-brand-700 shadow-lg transition-all hover:-translate-y-0.5 hover:bg-brand-50"
              >
                Request a demo
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${site.salesEmail}`}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition-all hover:bg-white/20"
              >
                <Mail className="h-4 w-4" />
                Talk to sales
              </a>
            </div>

            <div className="mt-10 flex flex-col items-center gap-3">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-100">
                Or get the app
              </p>
              <StoreBadges className="justify-center" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
