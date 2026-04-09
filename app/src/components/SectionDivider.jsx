export function SectionDivider() {
  return (
    <div className="relative flex items-center justify-center py-4 md:py-5" aria-hidden="true">
      <div className="absolute inset-x-0 top-1/2 h-px bg-gold/35" />
      <span className="relative bg-black px-4 font-display text-xl text-gold md:text-2xl">
        ⚡
      </span>
    </div>
  )
}
