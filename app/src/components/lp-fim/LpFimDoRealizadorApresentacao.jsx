import { LpFimSectionShell } from './LpFimSectionShell'

const ITEMS = [
  'O que está bloqueando seu crescimento hoje',
  'Por que você entra em ciclos de frustração, sabotagem ou estagnação',
  'Como desenvolver estrutura interna para sustentar evolução',
  'Como alinhar sua vida pessoal e profissional sem precisar sacrificar uma pela outra',
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

export function LpFimDoRealizadorApresentacao() {
  return (
    <LpFimSectionShell title="O que é o evento “O Fim do Realizador Frustrado”" kicker="APRESENTAÇÃO DO EVENTO">
      <div className="mx-auto max-w-3xl text-center text-[1.02rem] leading-relaxed text-white/85 sm:text-[19px]">
        <p className="m-0">
          Esse evento foi criado para te mostrar, de forma clara e aplicável, por que você está travado e o que precisa ser
          ajustado para começar a avançar.
        </p>
        <p className="m-0 mt-6">Você vai entender:</p>

        <div className="mt-7 space-y-4 sm:mt-8 sm:space-y-5">
          {ITEMS.map((text) => (
            <div key={text} className="hm-cafe-invite-item">
              <span className="hm-cafe-invite-icon" aria-hidden>
                <IconCheckCircle className="h-6 w-6 sm:h-7 sm:w-7" />
              </span>
              <p className="m-0 text-left text-[1.02rem] leading-relaxed text-white/90 sm:text-[19px]">{text}</p>
            </div>
          ))}
        </div>

        <p className="m-0 mt-10 text-[1.08rem] font-semibold leading-relaxed text-white sm:mt-12 sm:text-[20px]">
          Não é sobre motivação.
          <br />É sobre estrutura interna que gera resultado.
        </p>
      </div>
    </LpFimSectionShell>
  )
}

