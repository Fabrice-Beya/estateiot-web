import { site } from '../lib/site'

type Variant = 'dark' | 'light'

function AppleGlyph({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 384 512" className={className} fill="currentColor" aria-hidden="true">
      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
    </svg>
  )
}

function PlayGlyph({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 512 512" className={className} aria-hidden="true">
      <path d="M48 59.5v393c0 5.6 6.5 8.7 10.9 5.2l229.5-196.5L58.9 54.3C54.5 50.8 48 53.9 48 59.5z" fill="#34d399" />
      <path d="M345.8 230.3 295.6 187 64.9 50.2c-4.6-2.7-9.9-1.4-13.5 1.9l213.8 213.8 80.6-35.6z" fill="#60a5fa" />
      <path d="m345.8 281.7-80.6-35.8L51.4 459.9c3.6 3.3 8.9 4.6 13.5 1.9l230.7-136.8 50.2-43.3z" fill="#f87171" />
      <path d="M464 256c0-7.6-3.9-15.2-11.6-19.7l-58.2-34.5-55 53.7 55 53.7 58.2-34.5C460.1 271.2 464 263.6 464 256z" fill="#fbbf24" />
    </svg>
  )
}

export function AppStoreBadge({ variant = 'dark' }: { variant?: Variant }) {
  const styles =
    variant === 'dark'
      ? 'bg-ink-900 text-white hover:bg-ink-950 border border-ink-900'
      : 'bg-white text-ink-900 border border-ink-200 hover:border-ink-300'
  return (
    <a
      href={site.appStoreUrl}
      target="_blank"
      rel="noreferrer"
      className={`group inline-flex items-center gap-3 rounded-xl px-5 py-3 transition-all duration-200 hover:-translate-y-0.5 ${styles}`}
      aria-label="Download EstateIoT on the App Store"
    >
      <AppleGlyph className="h-7 w-7 shrink-0" />
      <span className="text-left leading-none">
        <span className="block text-[10px] font-medium uppercase tracking-wide opacity-70">
          Download on the
        </span>
        <span className="block font-display text-lg font-semibold tracking-tight">
          App Store
        </span>
      </span>
    </a>
  )
}

export function PlayStoreBadge({ variant = 'dark' }: { variant?: Variant }) {
  const styles =
    variant === 'dark'
      ? 'bg-ink-900 text-white hover:bg-ink-950 border border-ink-900'
      : 'bg-white text-ink-900 border border-ink-200 hover:border-ink-300'
  return (
    <a
      href={site.playStoreUrl}
      target="_blank"
      rel="noreferrer"
      className={`group inline-flex items-center gap-3 rounded-xl px-5 py-3 transition-all duration-200 hover:-translate-y-0.5 ${styles}`}
      aria-label="Get EstateIoT on Google Play"
    >
      <PlayGlyph className="h-6 w-6 shrink-0" />
      <span className="text-left leading-none">
        <span className="block text-[10px] font-medium uppercase tracking-wide opacity-70">
          Get it on
        </span>
        <span className="block font-display text-lg font-semibold tracking-tight">
          Google Play
        </span>
      </span>
    </a>
  )
}

export default function StoreBadges({
  variant = 'dark',
  className = '',
}: {
  variant?: Variant
  className?: string
}) {
  return (
    <div className={`flex flex-col gap-3 sm:flex-row ${className}`}>
      <AppStoreBadge variant={variant} />
      <PlayStoreBadge variant={variant} />
    </div>
  )
}
