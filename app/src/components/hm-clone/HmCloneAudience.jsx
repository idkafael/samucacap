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

/** @param {{ onOpenForm: () => void }} props */
export function HmCloneAudience({ onOpenForm }) {
  return (
    <section className="bg-[#020202] px-4 pb-16 pt-10 sm:px-6 sm:pb-24 sm:pt-14 md:pb-28 md:pt-16">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="m-0 text-[1.65rem] font-bold tracking-[-0.04em] text-white sm:text-4xl lg:text-[36px]">
          Esse encontro é para você que:
        </h2>
      </div>

      <div className="mx-auto mt-10 max-w-3xl sm:mt-12 md:mt-14">
        <div className="divide-y divide-white/10 rounded-sm border border-white/10 bg-black/20">
          {ROWS.map((row) => (
            <div
              key={row.n}
              className="flex flex-col gap-3 px-5 py-8 sm:flex-row sm:items-start sm:gap-8 sm:px-10 sm:py-10 sm:pl-10 md:gap-10 md:py-11 md:pl-11 md:pr-12 lg:pl-[6.375rem]"
            >
              <div
                className="shrink-0 text-[4.5rem] font-bold leading-none text-[#fa3e00] sm:w-[5.5rem] sm:text-[90px]"
                aria-hidden
              >
                {row.n}
              </div>
              <p className="m-0 flex-1 text-left text-[1.05rem] leading-relaxed text-white sm:text-[19px]">
                {row.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-10 flex justify-center sm:mt-12 md:mt-14">
        <button
          type="button"
          onClick={onOpenForm}
          className="inline-flex min-h-[3.25rem] cursor-pointer items-center justify-center rounded-[10px] bg-gradient-to-br from-[#1f99fe] to-[#5bb7ff] px-7 py-3 text-center text-lg font-semibold leading-none tracking-tight text-white sm:min-h-[3.5rem] sm:px-10 sm:text-[22px]"
        >
          PARTICIPAR GRATUITAMENTE
        </button>
      </div>
    </section>
  )
}
