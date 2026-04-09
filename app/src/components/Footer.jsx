import { SectionDivider } from './SectionDivider'

export function Footer() {
  return (
    <footer className="relative z-[1] px-5 pb-10 pt-6 md:px-6">
      <SectionDivider />
      <div className="mx-auto max-w-6xl text-center">
        <p className="font-body text-sm font-semibold tracking-wide text-white-cream sm:text-base">
          GRUPO ALTA FREQUÊNCIA <span className="text-gold">⚡</span>
        </p>

        <nav className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-white2 md:gap-6">
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

        <p className="mt-8 font-body text-sm text-white2/80">
          © 2025 Grupo Alta Frequência. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
