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

const ITEMS = [
  'Você para de viver em conflito entre trabalho e família',
  'Começa a ter clareza do que fazer todos os dias',
  'Diminui a autossabotagem',
  'Sente mais consistência nas suas ações',
  'Começa a ver evolução real, não só tentativa',
]

export function HmCafeBenefits() {
  return (
    <section className="hm-cafe-benefits bg-[#020202] px-5 pb-20 pt-2 sm:px-6 sm:pb-24 sm:pt-4 md:pb-28">
      <div className="mx-auto max-w-xl sm:max-w-2xl">
        <h2 className="m-0 text-center text-[1.55rem] font-bold leading-snug tracking-[-0.04em] text-white sm:text-4xl lg:text-[36px]">
          O que começa a mudar quando você participa
        </h2>

        <div className="mt-8 space-y-4 sm:mt-10 sm:space-y-5">
          {ITEMS.map((text) => (
            <div key={text} className="hm-cafe-benefits-item">
              <span className="hm-cafe-benefits-icon" aria-hidden>
                <IconCheckCircle className="h-6 w-6 sm:h-7 sm:w-7" />
              </span>
              <p className="m-0 text-left text-[1.02rem] leading-relaxed text-white/90 sm:text-[19px]">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

