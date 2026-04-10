/** Marca textual + ícone (sem PNG externo), alinhado ao layout da referência. */
export function HmCloneLogoMark() {
  return (
    <div className="flex max-w-md items-center gap-3 sm:gap-4">
      <div
        className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full sm:h-[4.25rem] sm:w-[4.25rem]"
        style={{
          boxShadow: 'inset 0 0 0 3px var(--hm-hero-blue, #1eb0ff)',
          background: 'radial-gradient(circle at 30% 30%, #1a1a1a 0%, #000 100%)',
        }}
      >
        <svg
          className="h-8 w-8 sm:h-9 sm:w-9"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <path
            d="M24 6L28 18H34L29 24L32 36L24 29L16 36L19 24L14 18H20L24 6Z"
            fill="url(#hmRocket)"
          />
          <defs>
            <linearGradient id="hmRocket" x1="14" y1="36" x2="34" y2="8" gradientUnits="userSpaceOnUse">
              <stop stopColor="var(--hm-hero-orange-glow, #ff8f5a)" />
              <stop offset="1" stopColor="var(--hm-hero-orange-deep, #e03610)" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="min-w-0 leading-tight">
        <p className="text-[0.65rem] font-bold uppercase tracking-[0.14em] text-[var(--hm-hero-heading,#fafaf9)] sm:text-xs">
          ACELERAÇÃO
        </p>
        <p className="text-lg font-bold tracking-tight text-[var(--hm-hero-heading,#fafaf9)] sm:text-[1.35rem]">HIGH TICKET</p>
        <p className="text-[0.6rem] font-semibold uppercase tracking-[0.28em] text-[color-mix(in_srgb,var(--hm-hero-heading)_82%,transparent)] sm:text-[0.7rem]">
          NO PERPÉTUO
        </p>
      </div>
    </div>
  )
}
