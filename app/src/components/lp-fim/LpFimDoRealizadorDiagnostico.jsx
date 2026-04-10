import { LpFimSectionShell } from './LpFimSectionShell'

const BULLETS = ['Faz, mas não evolui', 'Sabe, mas não aplica', 'Começa, mas não sustenta']

export function LpFimDoRealizadorDiagnostico() {
  return (
    <LpFimSectionShell title="O problema não é falta de esforço" kicker="DIAGNÓSTICO (QUEBRA DE CRENÇA)" tone="warm">
      <div className="mx-auto max-w-3xl text-center text-[1.02rem] leading-relaxed text-white/85 sm:text-[19px]">
        <p className="m-0">Se esforço resolvesse, você já teria chegado onde quer.</p>
        <p className="m-0 mt-4">O que está faltando é algo mais profundo:</p>
        <p className="m-0 mt-2 font-semibold text-white">Seu poder de realização.</p>
        <p className="m-0 mt-4">Existe um fator invisível que define seus resultados:</p>
        <p className="m-0 mt-2 text-white/90">
          <span className="font-semibold text-white">Sua frequência</span> (energia, ambiente, estado interno)
          <br />
          <span className="font-semibold text-white">Sua consciência</span> (clareza, direção, decisão)
        </p>
        <p className="m-0 mt-6">Quando isso está desalinhado, você entra em ciclos como:</p>

        <div className="mt-7 space-y-4 sm:mt-8 sm:space-y-5">
          {BULLETS.map((text) => (
            <div key={text} className="hm-cafe-benefits-item">
              <span className="hm-cafe-benefits-icon" aria-hidden>
                <span className="inline-flex h-2 w-2 rounded-full bg-[#ffa24a]" />
              </span>
              <p className="m-0 text-left text-[1.02rem] leading-relaxed text-white/90 sm:text-[19px]">{text}</p>
            </div>
          ))}
        </div>

        <p className="m-0 mt-10 text-[1.08rem] font-semibold leading-relaxed text-white sm:mt-12 sm:text-[20px]">
          Sem um alto poder de realização, sua vida continua travada, independente do quanto você tenta.
        </p>
      </div>
    </LpFimSectionShell>
  )
}

