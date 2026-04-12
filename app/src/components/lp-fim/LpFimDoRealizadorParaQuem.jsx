import { LpFimSectionShell } from './LpFimSectionShell'

const FOR = [
  'Sente que está travado mesmo tentando crescer',
  'Vive dividido entre trabalho e vida pessoal',
  'Tem dificuldade de manter consistência',
  'Sabe que pode mais, mas não consegue acessar isso',
  'Quer evoluir sem sacrificar o que realmente importa',
]

const NOT_FOR = ['Está confortável com a vida que tem hoje', 'Não quer mudar nada', 'Busca apenas motivação momentânea']

function IconDot({ className }) {
  return <span className={`mt-2 inline-flex h-1.5 w-1.5 shrink-0 rounded-full bg-white/70 ${className}`} aria-hidden />
}

export function LpFimDoRealizadorParaQuem() {
  return (
    <LpFimSectionShell title="Esse evento é pra você que:" kicker="PARA QUEM É">
      <div className="grid gap-5 sm:gap-6 md:grid-cols-2">
        <div className="hm-cafe-pain-card overflow-hidden">
          <div className="hm-cafe-pain-card-header px-7 py-6 sm:px-9 sm:py-7">
            <p className="m-0 text-center text-sm font-bold uppercase tracking-[0.16em] text-white sm:text-base">
              Esse evento é pra você que:
            </p>
          </div>
          <div className="px-7 pb-8 pt-6 sm:px-9 sm:pb-10 sm:pt-8">
            <ul className="m-0 space-y-3 p-0 sm:space-y-4">
              {FOR.map((t) => (
                <li key={t} className="flex items-start gap-3 text-[1.02rem] leading-relaxed text-white/85 sm:text-[19px]">
                  <IconDot />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="hm-cafe-pain-card overflow-hidden">
          <div className="hm-cafe-pain-card-header px-7 py-6 sm:px-9 sm:py-7">
            <p className="m-0 text-center text-sm font-bold uppercase tracking-[0.16em] text-white sm:text-base">
              E NÃO É PRA VOCÊ QUE:
            </p>
          </div>
          <div className="px-7 pb-8 pt-6 sm:px-9 sm:pb-10 sm:pt-8">
            <ul className="m-0 space-y-3 p-0 sm:space-y-4">
              {NOT_FOR.map((t) => (
                <li key={t} className="flex items-start gap-3 text-[1.02rem] leading-relaxed text-white/75 sm:text-[19px]">
                  <IconDot className="bg-white/55" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </LpFimSectionShell>
  )
}

