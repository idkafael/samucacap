/** Ícones em traço fino; use com `className="text-gold"` (monocromático). */

export function LpIconCalendar({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <rect x="3.5" y="5" width="17" height="16" rx="2" />
      <path strokeLinecap="round" d="M8 3v3M16 3v3M4 10h16" />
    </svg>
  )
}

export function LpIconClock({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <circle cx="12" cy="12" r="8.5" />
      <path strokeLinecap="round" d="M12 8v5l3 2" />
    </svg>
  )
}

export function LpIconLive({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <circle cx="12" cy="12" r="3" />
      <path
        strokeLinecap="round"
        d="M5.5 9.5a7 7 0 0 1 0 5M18.5 9.5a7 7 0 0 0 0 5M7 11a4 4 0 0 1 0 2M17 11a4 4 0 0 0 0 2"
      />
    </svg>
  )
}
