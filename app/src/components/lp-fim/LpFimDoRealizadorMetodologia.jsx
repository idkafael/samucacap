import { LpFimSectionShell } from './LpFimSectionShell'

function IconArrowUpRight({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M7 17L17 7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 7h7v7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const BLOCKS = [
  {
    title: 'Bloco 1',
    text: 'Você vai identificar exatamente em qual nível está hoje e por que isso define seus resultados.',
  },
  {
    title: 'Bloco 2',
    text: 'Vai entender como sua frequência influencia diretamente suas decisões, ações e consistência no dia a dia.',
  },
  {
    title: 'Bloco 3',
    text: 'Vai descobrir como desenvolver consciência para ter clareza do que fazer e parar de viver no automático.',
  },
  {
    title: 'Bloco 4',
    text: 'Vai aprender como integrar sua vida pessoal e profissional de forma estruturada, sem viver em conflito constante.',
  },
]

export function LpFimDoRealizadorMetodologia() {
  return (
    <LpFimSectionShell title="O que você vai acessar durante o evento" kicker="O QUE VOCÊ VAI APRENDER (METODOLOGIA RESUMIDA)">
      <div className="grid gap-4 sm:gap-5">
        {BLOCKS.map((b) => (
          <div key={b.title} className="hm-cafe-benefits-item">
            <div className="hm-cafe-benefits-icon" aria-hidden>
              <IconArrowUpRight className="h-6 w-6 text-[#ffa24a] sm:h-7 sm:w-7" />
            </div>
            <div className="min-w-0">
              <p className="m-0 text-left text-[11px] font-bold uppercase tracking-[0.22em] text-white/70 sm:text-xs">
                {b.title}
              </p>
              <p className="mt-2 text-left text-[1.02rem] font-semibold leading-relaxed text-white sm:text-[19px]">
                {b.text}
              </p>
            </div>
          </div>
        ))}
      </div>

      <p className="mx-auto mt-10 max-w-3xl text-center text-[1.08rem] font-semibold leading-relaxed text-white sm:mt-12 sm:text-[20px]">
        Você sai do evento entendendo o que precisa mudar… e como começar a aplicar imediatamente.
      </p>
    </LpFimSectionShell>
  )
}

