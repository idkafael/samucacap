import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { AnimatePresence, motion } from 'framer-motion'

function maskWhatsApp(value) {
  const d = value.replace(/\D/g, '').slice(0, 11)
  if (!d.length) return ''
  if (d.length <= 2) return `(${d}`
  if (d.length <= 7) return `(${d.slice(0, 2)}) ${d.slice(2)}`
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`
}

function IconEmail({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
      />
    </svg>
  )
}

function IconChevronDown({ className }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor" aria-hidden>
      <path
        fillRule="evenodd"
        d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.168l3.71-3.938a.75.75 0 1 1 1.08 1.04l-4.25 4.5a.75.75 0 0 1-1.08 0l-4.25-4.5a.75.75 0 0 1 .02-1.06z"
        clipRule="evenodd"
      />
    </svg>
  )
}

function FlagBr({ className }) {
  return (
    <svg className={className} viewBox="0 0 20 14" aria-hidden>
      <rect width="20" height="14" rx="2" fill="#009b3a" />
      <path d="M10 1.5l8.2 5.5-8.2 5.5L1.8 7 10 1.5z" fill="#ffdf00" />
      <circle cx="10" cy="7" r="2.8" fill="#002776" />
    </svg>
  )
}

const fieldShell =
  'rounded-md border border-gold/25 bg-black/80 transition-colors focus-within:border-gold/55 focus-within:shadow-[0_0_0_1px_rgba(201,168,76,0.2)]'

/**
 * @param {{ onSubmitLead: (data: { email: string, whatsapp: string }) => Promise<{ ok?: boolean, error?: string }>, embedded?: boolean }} props
 */
export function CapturaForm({ onSubmitLead, embedded = false }) {
  const [submitOk, setSubmitOk] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: { email: '', whatsapp: '' },
  })

  const whatsappRegister = register('whatsapp', {
    required: 'WhatsApp é obrigatório',
    validate: (v) => {
      const n = (v || '').replace(/\D/g, '')
      return n.length >= 10 || 'Informe um número válido com DDD'
    },
  })

  const onValid = async (data) => {
    setSubmitError('')
    const result = await onSubmitLead?.(data)
    if (result?.ok) {
      setSubmitOk(true)
    } else {
      setSubmitError(result?.error || 'Não foi possível enviar. Tente novamente.')
    }
  }

  const submitHandler = handleSubmit(onValid)

  const gap = embedded ? 'space-y-3' : 'space-y-5'
  const inputPy = embedded ? 'py-3' : 'py-3.5'

  return (
    <div className={embedded ? '' : 'mx-auto max-w-md'}>
      {!embedded ? (
        <>
          <h2
            className="text-center font-display text-[clamp(1.85rem,5.2vw,2.85rem)] font-semibold leading-tight text-transparent"
            style={{
              background: 'linear-gradient(105deg, #f0d78a 0%, #c9a84c 40%, #e8c97a 65%, #c9a84c 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
            }}
          >
            Lives diárias
          </h2>
          <p className="mt-3 text-center font-body text-sm leading-relaxed text-white2 md:text-base">
            Preencha abaixo. Primeiro você entra no grupo no WhatsApp; a partir de lá acompanha as lives ao
            vivo todos os dias.
          </p>
        </>
      ) : (
        <div className="mb-4 text-center">
          <p className="font-body text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-gold sm:text-xs">
            Grupo Alta Frequência <span className="text-gold-light">⚡</span>
          </p>
          <h2
            className="mt-2 font-display text-[clamp(1.35rem,5vw,1.85rem)] font-semibold leading-[1.1] text-transparent"
            style={{
              background: 'linear-gradient(105deg, #f0d78a 0%, #c9a84c 38%, #e8c97a 58%, #c9a84c 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
            }}
          >
            Lives diárias
          </h2>
          <p className="mt-1.5 font-body text-[0.7rem] leading-snug text-white2/90 sm:text-xs">
            Entre no grupo e receba o convite para as transmissões ao vivo todos os dias.
          </p>
        </div>
      )}

      <AnimatePresence mode="wait">
        {submitOk ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4 }}
            className={`rounded-lg border border-gold/40 bg-dark2 px-4 py-6 text-center font-body text-sm text-white-cream ${embedded ? 'mt-0' : 'mt-10'}`}
          >
            ✓ Recebemos seu contato! Acesse o grupo no WhatsApp para entrar nas lives diárias.
          </motion.div>
        ) : (
          <motion.div
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={embedded ? '' : 'mt-10'}
          >
            <div className={gap}>
              <div>
                <label
                  htmlFor="email-captura"
                  className={`mb-1.5 block font-body font-medium text-gold-light ${embedded ? 'sr-only' : 'text-sm'}`}
                >
                  E-mail
                </label>
                <div className={`relative ${fieldShell}`}>
                  <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gold/65">
                    <IconEmail className={embedded ? 'h-4 w-4' : 'h-5 w-5'} />
                  </span>
                  <input
                    id="email-captura"
                    type="email"
                    autoComplete="email"
                    placeholder="Digite seu melhor e-mail:"
                    className={`input-gold-focus w-full rounded-md border-0 bg-transparent pl-10 pr-3 font-body text-sm text-white-cream placeholder:text-white2/45 focus:ring-0 sm:pl-11 sm:text-base ${inputPy}`}
                    {...register('email', {
                      required: 'E-mail é obrigatório',
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: 'E-mail inválido',
                      },
                    })}
                  />
                </div>
                {errors.email ? (
                  <p className="mt-1 text-xs text-error sm:text-sm">{errors.email.message}</p>
                ) : null}
              </div>

              <div>
                <label
                  htmlFor="whatsapp-captura"
                  className={`mb-1.5 block font-body font-medium text-gold-light ${embedded ? 'sr-only' : 'text-sm'}`}
                >
                  WhatsApp
                </label>
                <div className={`flex overflow-hidden ${fieldShell}`}>
                  <div
                    className="flex shrink-0 items-center gap-1.5 border-r border-gold/25 bg-dark px-2 py-2 sm:gap-2 sm:px-3"
                    aria-hidden
                  >
                    <FlagBr className="h-4 w-[1.15rem] shrink-0 shadow-sm sm:h-5 sm:w-[1.4rem]" />
                    <span className="font-body text-xs font-medium text-white-cream sm:text-sm">BR</span>
                    <span className="font-body text-xs text-white2 sm:text-sm">+55</span>
                    <IconChevronDown className="hidden h-3.5 w-3.5 text-gold/55 sm:block sm:h-4 sm:w-4" />
                  </div>
                  <input
                    id="whatsapp-captura"
                    type="tel"
                    inputMode="numeric"
                    autoComplete="tel-national"
                    placeholder="WhatsApp com DDD (Ex: (11) 98765-4321)"
                    className={`input-gold-focus min-w-0 flex-1 border-0 bg-transparent px-2 font-body text-sm text-white-cream placeholder:text-white2/45 focus:ring-0 sm:px-3 sm:text-base ${inputPy}`}
                    {...whatsappRegister}
                    onChange={(e) => {
                      const masked = maskWhatsApp(e.target.value)
                      setValue('whatsapp', masked, { shouldValidate: true })
                    }}
                  />
                </div>
                {errors.whatsapp ? (
                  <p className="mt-1 text-xs text-error sm:text-sm">{errors.whatsapp.message}</p>
                ) : null}
              </div>

              {submitError ? <p className="text-xs text-error sm:text-sm">{submitError}</p> : null}

              <motion.button
                type="button"
                onClick={submitHandler}
                className={`w-full rounded-lg bg-gold font-body font-bold uppercase tracking-wide text-black shadow-[0_0_20px_rgba(201,168,76,0.35)] ${embedded ? 'py-3.5 text-xs sm:text-sm' : 'py-4 text-sm md:text-base'}`}
                whileHover={{ scale: 1.02, boxShadow: '0 0 28px rgba(201,168,76,0.45)' }}
                whileTap={{ scale: 0.98 }}
              >
                Quero entrar no grupo e nas lives
              </motion.button>

              <p className={`text-center text-white2/80 ${embedded ? 'text-[0.7rem] leading-tight' : 'text-sm'}`}>
                🔒 Seus dados estão seguros. Não enviamos spam.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
