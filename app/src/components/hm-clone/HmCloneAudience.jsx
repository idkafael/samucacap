const ITEMS = [
  'Tenta organizar a vida.',
  'Tenta crescer no trabalho.',
  'Tenta dar atenção pra família.',
  'Mas no final…',
  'Ou você sacrifica o trabalho',
  'Ou você sacrifica a família',
  'Ou tenta equilibrar tudo… e não cresce em nada',
  'E o pior:',
  'Você sente que poderia mais… mas não consegue acessar isso.',
]

function IconXCircle({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
      <path d="M9 9l6 6M15 9l-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

/** @param {{ onScrollToCapture: () => void; showCta?: boolean }} props */
export function HmCloneAudience({ onScrollToCapture, showCta = true }) {
  return (
    <section className="hm-clone-audience bg-[#020202] px-5 pb-20 pt-14 sm:px-6 sm:pb-24 sm:pt-16 md:pb-28">
      <div className="mx-auto max-w-xl sm:max-w-2xl">
        <div className="hm-cafe-pain-card overflow-hidden">
          <div className="hm-cafe-pain-card-header px-7 py-6 sm:px-10 sm:py-7">
            <h2 className="m-0 text-center text-sm font-bold uppercase tracking-[0.16em] text-white sm:text-base">
              Se você sente que está tentando… mas não está avançando, isso é pra você
            </h2>
          </div>

          <div className="px-7 pb-8 pt-6 sm:px-10 sm:pb-10 sm:pt-8">
            <ul className="m-0 space-y-4 p-0 sm:space-y-5">
              {ITEMS.map((text) => (
                <li key={text} className="flex items-start gap-3 text-left text-[1.02rem] leading-relaxed text-white/75 sm:text-[19px]">
                  <span className="mt-0.5 shrink-0 text-white/70">
                    <IconXCircle className="h-6 w-6" />
                  </span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {showCta ? (
        <div className="mx-auto mt-10 flex justify-center sm:mt-12 md:mt-14">
          <button
            type="button"
            onClick={onScrollToCapture}
            className="hm-clone-btn-cta inline-flex min-h-[3.25rem] cursor-pointer items-center justify-center rounded-[10px] px-7 py-3 text-center text-lg font-semibold leading-none tracking-tight text-white sm:min-h-[3.5rem] sm:px-10 sm:text-[22px]"
            aria-label="Ir para o formulário de inscrição no topo da página"
          >
            ENTRAR NO GRUPO DO CAFÉ COM REALIZAÇÃO
          </button>
        </div>
      ) : null}
    </section>
  )
}
