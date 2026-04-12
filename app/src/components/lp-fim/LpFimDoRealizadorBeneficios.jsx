import { LpFimSectionShell } from './LpFimSectionShell'

const ITEMS = [
  'Você passa a ter clareza do que realmente precisa fazer',
  'Suas decisões deixam de ser confusas e passam a ser direcionadas',
  'A sensação de estar perdido começa a desaparecer',
  'Você reduz a autossabotagem e ganha mais consistência',
  'Consegue organizar melhor sua rotina e prioridades',
  'Começa a evoluir sem precisar sacrificar sua vida pessoal',
  'Sente mais controle sobre sua própria vida',
]

function IconCheckCircle({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M8.5 12.2l2.3 2.4 4.9-5.3"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function LpFimDoRealizadorBeneficios() {
  return (
    <LpFimSectionShell title="O que começa a mudar depois desse evento" kicker="BENEFÍCIOS (INTEGRADOS)" tone="warm">
      <div className="grid gap-4 sm:gap-5">
        {ITEMS.map((text) => (
          <div key={text} className="hm-cafe-benefits-item">
            <span className="hm-cafe-benefits-icon" aria-hidden>
              <IconCheckCircle className="h-6 w-6 sm:h-7 sm:w-7" />
            </span>
            <p className="m-0 text-left text-[1.02rem] leading-relaxed text-white/90 sm:text-[19px]">{text}</p>
          </div>
        ))}
      </div>

      <p className="mx-auto mt-10 max-w-3xl text-center text-[1.08rem] font-semibold leading-relaxed text-white sm:mt-12 sm:text-[20px]">
        Você deixa de apenas tentar… e começa a construir resultado com direção.
      </p>
    </LpFimSectionShell>
  )
}

