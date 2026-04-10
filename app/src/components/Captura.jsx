import { CapturaForm } from './CapturaForm'

/** Seção completa de captação (ex.: subpáginas). Na home o formulário fica no Hero. */
export function Captura({ onSubmitLead }) {
  return (
    <section
      id="captura"
      className="relative z-[1] border-t-2 border-gold px-5 py-10 md:px-6 md:py-14"
    >
      <CapturaForm onSubmitLead={onSubmitLead} embedded={false} />
    </section>
  )
}
