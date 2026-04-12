/** Divisor ondulado (Elementor shape), fill alinhado ao fundo #020202. */
export function HmCloneWaveDivider({ flip }) {
  return (
    <div
      className={`relative h-[72px] w-full overflow-hidden sm:h-[88px] md:h-[100px] ${flip ? 'rotate-180' : ''}`}
      aria-hidden
    >
      <svg
        className="absolute bottom-0 left-0 h-full w-full text-[#020202]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 100"
        preserveAspectRatio="none"
      >
        <path fill="currentColor" d="M0,6V0h1000v100L0,6z" />
      </svg>
    </div>
  )
}
