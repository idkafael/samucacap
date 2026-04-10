const ROWS = [
  {
    n: '01',
    text: 'Vende mentoria e quer escalar agressivamente em 2026 sem inflar seu CAC.',
  },
  {
    n: '02',
    text: 'Já tentou rodar mais de um funil ao mesmo tempo, mas só aumentou o CAC e a complexidade… e não o resultado.',
  },
  {
    n: '03',
    text: 'Tem metas ambiciosas para 2026 e quer acessar o que há de mais atualizado nesse mercado para não se frustrar no próximo ano.',
  },
]

/** @param {{ onScrollToCapture: () => void }} props */
export function HmCloneAudience({ onScrollToCapture }) {
  return (
    <section className="hm-clone-audience bg-[#020202] px-5 pb-20 pt-14 sm:px-6 sm:pb-24 sm:pt-16 md:pb-28">
      <div className="mx-auto max-w-xl text-center sm:max-w-2xl">
        <h2 className="m-0 text-[1.65rem] font-bold leading-snug tracking-[-0.04em] text-white sm:text-4xl lg:text-[36px]">
          Esse encontro é para você que:
        </h2>
      </div>

      <div className="mx-auto mt-10 grid max-w-xl gap-[25px] sm:mt-12 sm:max-w-2xl md:mt-14">
        {ROWS.map((row) => (
          <div key={row.n} className="hm-clone-audience-card">
            <div className="hm-clone-audience-card-num" aria-hidden>
              {row.n}
            </div>
            <p className="hm-clone-audience-card-text m-0 text-left">{row.text}</p>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-10 flex justify-center sm:mt-12 md:mt-14">
        <button
          type="button"
          onClick={onScrollToCapture}
          className="hm-clone-btn-cta inline-flex min-h-[3.25rem] cursor-pointer items-center justify-center rounded-[10px] px-7 py-3 text-center text-lg font-semibold leading-none tracking-tight text-white sm:min-h-[3.5rem] sm:px-10 sm:text-[22px]"
          aria-label="Ir para o formulário de inscrição no topo da página"
        >
          PARTICIPAR GRATUITAMENTE
        </button>
      </div>
    </section>
  )
}
