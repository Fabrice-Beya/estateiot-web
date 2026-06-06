import { Link } from 'react-router-dom'
import { Mail, Apple, Play } from 'lucide-react'
import { site, year } from '../lib/site'

const columns = [
  {
    title: 'Platform',
    links: [
      { label: 'Overview', href: '/#platform' },
      { label: 'Admin portal', href: '/#admin' },
      { label: 'Resident app', href: '/#app' },
      { label: 'Why EstateIoT', href: '/#why' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Support', href: '/support', internal: true },
      { label: 'Privacy policy', href: '/privacy', internal: true },
      { label: 'Contact sales', href: `mailto:${site.salesEmail}` },
    ],
  },
]

export default function Footer() {
  return (
    <footer id="contact" className="bg-ink-950 text-ink-300">
      <div className="container-px py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.6fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <img src="/icon.png" alt="EstateIoT" className="h-9 w-9 rounded-[10px]" />
              <span className="font-display text-xl font-bold tracking-tight text-white">
                Estate<span className="text-brand-400">IoT</span>
              </span>
            </div>
            <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-ink-300">
              The smart estate operating system — access control, communication, and monitoring
              for residents, security teams, and facility administrators.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={site.appStoreUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                <Apple className="h-4 w-4" /> App Store
              </a>
              <a
                href={site.playStoreUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                <Play className="h-4 w-4" /> Google Play
              </a>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-ink-400">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-3 text-[15px]">
                {col.links.map((l) =>
                  'internal' in l && l.internal ? (
                    <li key={l.label}>
                      <Link to={l.href} className="transition-colors hover:text-white">
                        {l.label}
                      </Link>
                    </li>
                  ) : (
                    <li key={l.label}>
                      <a href={l.href} className="transition-colors hover:text-white">
                        {l.label}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-sm text-ink-400 md:flex-row md:items-center">
          <p>
            © {year} {site.name}. Built by {site.company}. All rights reserved.
          </p>
          <a
            href={`mailto:${site.supportEmail}`}
            className="inline-flex items-center gap-2 transition-colors hover:text-white"
          >
            <Mail className="h-4 w-4" />
            {site.supportEmail}
          </a>
        </div>
      </div>
    </footer>
  )
}
