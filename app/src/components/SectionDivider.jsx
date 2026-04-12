export function SectionDivider() {
  return (
    <div className="relative flex items-center justify-center py-4 md:py-5" aria-hidden="true">
      <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-gold/35 to-transparent" />
      <span className="relative bg-black px-4 font-display text-xl text-gold drop-shadow-[0_0_10px_rgba(201,168,76,0.5)] md:text-2xl">
        ⚡
      </span>
    </div>
  )
}
