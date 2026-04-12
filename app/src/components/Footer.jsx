import { SectionDivider } from './SectionDivider'

/** @param {{ compact?: boolean }} props */
export function Footer({ compact = false }) {
  return (
    <footer
      className={`relative z-[1] md:px-6 ${compact ? 'px-4 pb-6 pt-2' : 'px-5 pb-10 pt-6'}`}
    >
      <SectionDivider />
      <div className="mx-auto max-w-6xl text-center">
        <p
          className={`font-body font-semibold tracking-wide text-white-cream ${compact ? 'text-xs sm:text-sm' : 'text-sm sm:text-base'}`}
        >
          GRUPO ALTA FREQUÊNCIA <span className="text-gold">⚡</span>
        </p>

        <nav
          className={`flex flex-wrap items-center justify-center gap-3 text-white2 md:gap-6 ${compact ? 'mt-3 text-xs sm:text-sm' : 'mt-8 text-sm'}`}
        >
          <a href="#" className="font-body transition-colors hover:text-gold">
            Termos de Uso
          </a>
          <span className="text-gold/30" aria-hidden>
            |
          </span>
          <a href="#" className="font-body transition-colors hover:text-gold">
            Política de Privacidade
          </a>
        </nav>

        <p
          className={`font-body text-white2/80 ${compact ? 'mt-3 text-[0.65rem] sm:text-xs' : 'mt-8 text-sm'}`}
        >
          © 2025 Grupo Alta Frequência. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
