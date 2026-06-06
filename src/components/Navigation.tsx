import { useState, useEffect } from 'react'
import { Menu, X, ArrowRight } from 'lucide-react'
import { site } from '../lib/site'

const links = [
  { label: 'Platform', href: '#platform' },
  { label: 'Admin Portal', href: '#admin' },
  { label: 'Mobile App', href: '#app' },
  { label: 'Why EstateIoT', href: '#why' },
  { label: 'Support', href: '/support' },
]

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-ink-100 bg-white/80 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="container-px">
        <div className="flex h-16 items-center justify-between lg:h-[72px]">
          <a href="/" className="flex items-center gap-2.5">
            <img
              src="/icon.png"
              alt="EstateIoT"
              className="h-9 w-9 rounded-[10px] shadow-soft ring-1 ring-ink-100"
            />
            <span className="font-display text-xl font-bold tracking-tight text-ink-900">
              Estate<span className="text-brand-600">IoT</span>
            </span>
          </a>

          <div className="hidden items-center gap-1 lg:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-3.5 py-2 text-sm font-medium text-ink-600 transition-colors hover:bg-ink-50 hover:text-ink-900"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="#app"
              className="text-sm font-semibold text-ink-700 transition-colors hover:text-brand-600"
            >
              Get the app
            </a>
            <a href="#admin" className="btn-primary py-2.5 text-sm">
              Request a demo
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <button
            className="rounded-lg p-2 text-ink-700 lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="border-t border-ink-100 bg-white lg:hidden">
          <div className="container-px space-y-1 py-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block rounded-lg px-3 py-2.5 text-base font-medium text-ink-700 hover:bg-ink-50"
              >
                {link.label}
              </a>
            ))}
            <a
              href={site.appStoreUrl}
              onClick={() => setIsMenuOpen(false)}
              className="btn-primary mt-3 w-full"
            >
              Request a demo
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
