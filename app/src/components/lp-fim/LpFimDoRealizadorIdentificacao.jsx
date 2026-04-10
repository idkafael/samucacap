import { LpFimSectionShell } from './LpFimSectionShell'

const LINES = [
  'Você tenta.',
  'Busca melhorar.',
  'Quer crescer.',
  'Quer dar mais resultado no trabalho.',
  'Quer ter mais presença na família.',
  'Mas na prática…',
  'Ou você cresce em uma área e perde na outra',
  'Ou tenta equilibrar tudo… e se perde no meio',
  'Ou simplesmente não sai do lugar',
  'E isso gera uma sensação silenciosa:',
  'Frustração por saber que tem potencial… mas não conseguir realizar.',
]

function IconXCircle({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
      <path d="M9 9l6 6M15 9l-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

export function LpFimDoRealizadorIdentificacao() {
  return (
    <LpFimSectionShell title="Você sente que poderia mais… mas não consegue acessar isso" kicker="IDENTIFICAÇÃO (DOR REAL)">
      <div id="lp-fim-identificacao" className="sr-only" aria-hidden />
      <div className="hm-cafe-pain-card overflow-hidden">
        <div className="hm-cafe-pain-card-header px-7 py-6 sm:px-10 sm:py-7">
          <p className="m-0 text-center text-sm font-bold uppercase tracking-[0.16em] text-white sm:text-base">
            Você sente que poderia mais… mas não consegue acessar isso
          </p>
        </div>
        <div className="px-7 pb-8 pt-6 sm:px-10 sm:pb-10 sm:pt-8">
          <ul className="m-0 space-y-4 p-0 sm:space-y-5">
            {LINES.map((text) => (
              <li
                key={text}
                className="flex items-start gap-3 text-left text-[1.02rem] leading-relaxed text-white/75 sm:text-[19px]"
              >
                <span className="mt-0.5 shrink-0 text-white/70" aria-hidden>
                  <IconXCircle className="h-6 w-6" />
                </span>
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </LpFimSectionShell>
  )
}

