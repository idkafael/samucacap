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
  'rounded-lg border border-gold/25 bg-black/80 transition-colors focus-within:border-gold/55 focus-within:shadow-[0_0_0_1px_rgba(201,168,76,0.2)]'

export function Captura({ onSubmitLead }) {
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

  return (
    <section
      id="captura"
      className="relative z-[1] border-t-2 border-gold px-5 py-10 md:px-6 md:py-14"
    >
      <div className="mx-auto max-w-md">
        <h2 className="text-center font-display text-[clamp(1.75rem,4vw,2.75rem)] font-light text-white-cream">
          Dê o primeiro passo
        </h2>
        <p className="mt-3 text-center font-body text-sm leading-relaxed text-white2 md:text-base">
          Preencha abaixo e um especialista entrará em contato com você.
        </p>

        <AnimatePresence mode="wait">
          {submitOk ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.45 }}
              className="mt-10 rounded-lg border border-gold/40 bg-dark2 px-6 py-8 text-center font-body text-white-cream"
            >
              ✓ Recebemos seu contato! Em breve um especialista entrará em contato.
            </motion.div>
          ) : (
            <motion.div
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mt-10"
            >
              <div className="space-y-5">
                <div>
                  <label htmlFor="email" className="mb-2 block font-body text-sm font-medium text-gold-light">
                    E-mail
                  </label>
                  <div className={`relative ${fieldShell}`}>
                    <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-gold/65">
                      <IconEmail className="h-5 w-5" />
                    </span>
                    <input
                      id="email"
                      type="email"
                      autoComplete="email"
                      placeholder="Digite seu melhor e-mail:"
                      className="input-gold-focus w-full rounded-lg border-0 bg-transparent py-3.5 pl-12 pr-4 font-body text-white-cream placeholder:text-white2/45 focus:ring-0"
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
                    <p className="mt-1.5 text-sm text-error">{errors.email.message}</p>
                  ) : null}
                </div>

                <div>
                  <label htmlFor="whatsapp" className="mb-2 block font-body text-sm font-medium text-gold-light">
                    WhatsApp
                  </label>
                  <div className={`flex overflow-hidden ${fieldShell}`}>
                    <div
                      className="flex shrink-0 items-center gap-2 border-r border-gold/25 bg-dark px-3 py-3 md:px-3.5"
                      aria-hidden
                    >
                      <FlagBr className="h-5 w-[1.4rem] shrink-0 shadow-sm" />
                      <span className="font-body text-sm font-medium tracking-wide text-white-cream">BR</span>
                      <span className="font-body text-sm text-white2">+55</span>
                      <IconChevronDown className="h-4 w-4 text-gold/55" />
                    </div>
                    <input
                      id="whatsapp"
                      type="tel"
                      inputMode="numeric"
                      autoComplete="tel-national"
                      placeholder="WhatsApp com DDD — Ex: (11) 98765-4321"
                      className="input-gold-focus min-w-0 flex-1 border-0 bg-transparent px-3 py-3.5 font-body text-white-cream placeholder:text-white2/45 focus:ring-0 md:px-4"
                      {...whatsappRegister}
                      onChange={(e) => {
                        const masked = maskWhatsApp(e.target.value)
                        setValue('whatsapp', masked, { shouldValidate: true })
                      }}
                    />
                  </div>
                  {errors.whatsapp ? (
                    <p className="mt-1.5 text-sm text-error">{errors.whatsapp.message}</p>
                  ) : null}
                </div>

                {submitError ? <p className="text-sm text-error">{submitError}</p> : null}

                <motion.button
                  type="button"
                  onClick={submitHandler}
                  className="mt-2 w-full rounded-lg bg-gold py-4 font-body text-sm font-semibold uppercase tracking-wide text-black shadow-[0_0_24px_rgba(201,168,76,0.2)] md:text-base"
                  whileHover={{ scale: 1.03, boxShadow: '0 0 32px rgba(201,168,76,0.35)' }}
                  whileTap={{ scale: 0.98 }}
                >
                  Quero viver a alta frequência
                </motion.button>

                <p className="text-center text-sm text-white2/85">
                  🔒 Seus dados estão seguros. Não enviamos spam.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
