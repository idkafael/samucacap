import { HmCloneWaveDivider } from './HmCloneWaveDivider'

/** @param {{ onScrollToCapture: () => void }} props */
export function HmCloneAuthority({ onScrollToCapture }) {
  return (
    <section className="bg-[#020202]">
      <HmCloneWaveDivider />
      <div className="mx-auto max-w-4xl px-4 pb-12 pt-4 sm:px-6 sm:pb-16 md:pb-20 md:pt-6">
        <div className="mx-auto mb-6 max-w-md sm:mb-8 md:max-w-lg">
          <img
            src="/images/icon.jpg"
            alt="Samuel Souza"
            width={800}
            height={1000}
            loading="lazy"
            decoding="async"
            className="h-auto w-full rounded-2xl object-cover shadow-lg shadow-black/40 sm:rounded-3xl"
          />
        </div>

        <h2 className="m-0 text-center text-[1.65rem] font-bold tracking-[-0.04em] text-white sm:text-4xl lg:text-[36px]">
          Quem é Samuel Souza?
        </h2>

        <h3 className="mx-auto mt-6 max-w-3xl text-center text-[1.05rem] font-normal leading-relaxed text-white sm:mt-8 sm:text-[19px]">
          Samuel Souza, o Samuca, é mentor e estrategista com quase duas décadas ajudando empresários e equipes a alinhar
          propósito, liderança e performance. Ele acredita que o CNPJ espelha a frequência do CPF: quando o líder eleva
          consciência, corpo e mentalidade, o negócio deixa de reagir ao caos e passa a vibrar em outro patamar.
        </h3>

        <h3 className="mx-auto mt-6 max-w-3xl text-center text-[1.05rem] font-normal leading-relaxed text-white sm:mt-8 sm:text-[19px]">
          Já impactou mais de <span className="font-semibold text-[#fa3e00]">+100 mil pessoas,</span> acompanhou{' '}
          <span className="font-semibold text-[#fa3e00]">+1.000 empresas</span> e soma{' '}
          <span className="font-semibold text-[#fa3e00]">18 anos</span> construindo metodologia aplicada no dia a dia de quem
          lidera negócios.
        </h3>

        <h3 className="mx-auto mt-6 max-w-3xl text-center text-[1.05rem] font-normal leading-relaxed text-white sm:mt-8 sm:text-[19px]">
          Nesse encontro você terá o Samuel frente a frente e poderá tirar dúvidas diretamente com ele.
        </h3>

        <div className="mt-10 flex justify-center sm:mt-12">
          <button
            type="button"
            onClick={onScrollToCapture}
            className="hm-clone-btn-cta inline-flex min-h-[3.25rem] cursor-pointer items-center justify-center rounded-[10px] px-6 py-3 text-center text-base font-semibold leading-none tracking-tight text-white sm:min-h-[3.5rem] sm:px-9 sm:text-lg md:text-[22px]"
            aria-label="Ir para o formulário de inscrição no topo da página"
          >
            QUERO PARTICIPAR DO ENCONTRO
          </button>
        </div>
      </div>
      <HmCloneWaveDivider flip />
    </section>
  )
}
