import { HmCloneWaveDivider } from './HmCloneWaveDivider'

/** @param {{ onOpenForm: () => void }} props */
export function HmCloneAuthority({ onOpenForm }) {
  return (
    <section className="bg-[#020202]">
      <HmCloneWaveDivider />
      <div className="mx-auto max-w-4xl px-4 pb-12 pt-4 sm:px-6 sm:pb-16 md:pb-20 md:pt-6">
        <h2 className="m-0 text-center text-[1.65rem] font-bold tracking-[-0.04em] text-white sm:text-4xl lg:text-[36px]">
          Quem é Henrique Marinho?
        </h2>

        <h3 className="mx-auto mt-6 max-w-3xl text-center text-[1.05rem] font-normal leading-relaxed text-white sm:mt-8 sm:text-[19px]">
          Pioneiro em High Ticket no Perpétuo, vendendo serviços, mentorias, consultorias e ofertas caras todos os dias no Brasil.
        </h3>

        <h3 className="mx-auto mt-6 max-w-3xl text-center text-[1.05rem] font-normal leading-relaxed text-white sm:mt-8 sm:text-[19px]">
          Já mentorou <span className="font-semibold text-[#fa3e00]">+500 negócios,</span> validou sua metodologia em{' '}
          <span className="font-semibold text-[#fa3e00]">+250 nichos diferentes</span> e faturou, em resultado somado para suas
          clientes, mais de <span className="font-semibold text-[#fa3e00]">meio BILHÃO de Reais.</span>
        </h3>

        <h3 className="mx-auto mt-6 max-w-3xl text-center text-[1.05rem] font-normal leading-relaxed text-white sm:mt-8 sm:text-[19px]">
          Você encontrará Henrique frente a frente nesse encontro e poderá fazer uma pergunta diretamente a ele.
        </h3>

        <div className="mt-10 flex justify-center sm:mt-12">
          <button
            type="button"
            onClick={onOpenForm}
            className="inline-flex min-h-[3.25rem] cursor-pointer items-center justify-center rounded-[10px] bg-gradient-to-br from-[#1f99fe] to-[#5bb7ff] px-6 py-3 text-center text-base font-semibold leading-none tracking-tight text-white sm:min-h-[3.5rem] sm:px-9 sm:text-lg md:text-[22px]"
          >
            QUERO PARTICIPAR DO ENCONTRO
          </button>
        </div>
      </div>
      <HmCloneWaveDivider flip />
    </section>
  )
}
