import { LpFimSectionShell } from './LpFimSectionShell'

/**
 * @param {{ onScrollToCapture: () => void }} props
 */
export function LpFimDoRealizadorConviteFinal({ onScrollToCapture }) {
  return (
    <LpFimSectionShell title="Participe do evento “O Fim do Realizador Frustrado”" kicker="CONVITE FINAL" tone="warm">
      <div className="mx-auto max-w-3xl text-center text-[1.02rem] leading-relaxed text-white/85 sm:text-[19px]">
        <p className="m-0">Se você continuar fazendo o que sempre fez, sua vida continua igual.</p>
        <p className="m-0 mt-3">Mas se você entender o que realmente está te travando…</p>
        <p className="m-0 mt-3">Você muda completamente a forma como vive, decide e cresce.</p>

        <div className="mt-10 sm:mt-12">
          <p className="mt-4 text-center text-sm font-semibold text-white/80 sm:text-[15px]">
            Gratuito • Online • Acesso pelo grupo exclusivo
          </p>
        </div>
      </div>
    </LpFimSectionShell>
  )
}

