import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

const OPTIONS = [
  'Consultoria',
  'Mentoria',
  'Agência de tráfego ou marketing',
  'Trabalho nos bastidores com mentorias ou infoprodutos',
  'Sou especialista no corporativo / Trabalho no CLT',
  'Profissional liberal',
  'Vendo produtos físicos',
  'Sou afiliado / PLR',
  'Nenhuma dessas opções',
]

/**
 * @param {{ open: boolean, onClose: () => void }} props
 */
export function HmCloneFormModal({ open, onClose }) {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: { segmento: '' },
  })

  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [open, onClose])

  useEffect(() => {
    if (open) reset({ segmento: '' })
  }, [open, reset])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="hm-clone-form-title"
    >
      <button
        type="button"
        className="absolute inset-0 z-0 cursor-default"
        aria-label="Fechar"
        onClick={onClose}
      />

      <div className="relative z-10 w-full max-w-lg rounded-lg border border-white/10 bg-[#0a0a0a] px-5 py-6 shadow-2xl sm:px-8 sm:py-8">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-md text-lg text-white/70 hover:bg-white/10 hover:text-white"
          aria-label="Fechar formulário"
        >
          ×
        </button>

        <h2 id="hm-clone-form-title" className="m-0 pr-8 text-center text-xl font-bold text-white sm:text-[25px]">
          Faça sua Inscrição
        </h2>
        <p className="mt-3 text-center text-sm font-semibold uppercase tracking-wide text-white/90">INSIRA SEUS DADOS ABAIXO</p>

        <form
          className="mt-6 space-y-4"
          onSubmit={handleSubmit(() => {
            onClose()
          })}
        >
          <div>
            <label htmlFor="hm-segmento" className="mb-2 block text-sm font-medium text-white/90">
              Qual tipo de negócio você atua?
            </label>
            <select
              id="hm-segmento"
              className="hm-clone-select w-full rounded-md border border-white/15 bg-black px-3 py-3 text-sm text-white outline-none focus:border-[#289dfe] focus:ring-1 focus:ring-[#289dfe]"
              {...register('segmento', { required: true })}
            >
              <option value="">Selecione…</option>
              {OPTIONS.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="flex w-full min-h-[3rem] items-center justify-center rounded-[10px] bg-gradient-to-br from-[#1f99fe] to-[#5bb7ff] px-4 text-base font-semibold text-white sm:text-[18px]"
          >
            PARTICIPAR GRATUITAMENTE
          </button>
        </form>
      </div>
    </div>
  )
}
