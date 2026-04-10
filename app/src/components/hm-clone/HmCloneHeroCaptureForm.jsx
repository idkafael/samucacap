import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { WHATSAPP_GROUP_INVITE_URL } from '../../config/whatsappGroup'

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

function IconWhatsApp({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

/**
 * @param {{
 *   onSubmitLead: (data: { email: string, whatsapp: string }) => Promise<{ ok?: boolean, error?: string }>,
 *   submitLabel?: string,
 * }} props
 */
export function HmCloneHeroCaptureForm({ onSubmitLead, submitLabel = 'PARTICIPAR GRATUITAMENTE' }) {
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

  if (submitOk) {
    return (
      <div className="mt-7 rounded-[10px] border border-[color:var(--hm-hero-success-border)] bg-[var(--hm-hero-input-bg)] px-4 py-5 text-center sm:mt-8">
        <p className="m-0 text-sm leading-relaxed text-[var(--hm-hero-text)]">
          Recebemos seu contato! Toque abaixo para entrar no grupo do WhatsApp agora.
        </p>
        <a
          href={WHATSAPP_GROUP_INVITE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 flex min-h-[3rem] w-full items-center justify-center gap-2 rounded-[10px] bg-[#25D366] px-4 py-3 text-center text-base font-semibold text-white shadow-[0_4px_20px_rgb(37_211_102_/_0.35)] transition-[filter,transform] hover:brightness-105 active:scale-[0.99] sm:min-h-[3.25rem] sm:text-lg"
        >
          <IconWhatsApp className="h-6 w-6 shrink-0" />
          Entrar no grupo do WhatsApp
        </a>
      </div>
    )
  }

  return (
    <form className="mt-7 space-y-3 sm:mt-8 sm:space-y-3.5" onSubmit={handleSubmit(onValid)} noValidate>
      <div>
        <label htmlFor="hm-hero-email" className="sr-only">
          E-mail
        </label>
        <div className="hm-hero-field-shell relative">
          <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[var(--hm-hero-blue)]">
            <IconEmail className="h-4 w-4 sm:h-5 sm:w-5" />
          </span>
          <input
            id="hm-hero-email"
            type="email"
            autoComplete="email"
            placeholder="Digite seu melhor e-mail:"
            className="w-full rounded-md border-0 bg-transparent py-3 pl-10 pr-3 text-sm text-[var(--hm-hero-text)] placeholder:text-[color-mix(in_srgb,var(--hm-hero-text)_45%,transparent)] outline-none focus:ring-0 sm:pl-11 sm:text-base"
            {...register('email', {
              required: 'E-mail é obrigatório',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'E-mail inválido',
              },
            })}
          />
        </div>
        {errors.email ? <p className="mt-1 text-xs text-[var(--hm-hero-error)]">{errors.email.message}</p> : null}
      </div>

      <div>
        <label htmlFor="hm-hero-wa" className="sr-only">
          WhatsApp
        </label>
        <div className="hm-hero-field-shell flex overflow-hidden">
          <div
            className="hm-hero-field-prefix flex shrink-0 items-center gap-1.5 border-r px-2 py-2 sm:gap-2 sm:px-3"
            aria-hidden
          >
            <FlagBr className="h-4 w-[1.15rem] shrink-0 sm:h-5 sm:w-[1.4rem]" />
            <span className="text-xs font-medium text-[var(--hm-hero-text)] sm:text-sm">BR</span>
            <span className="text-xs text-[color-mix(in_srgb,var(--hm-hero-text)_72%,transparent)] sm:text-sm">+55</span>
            <IconChevronDown className="hidden h-3.5 w-3.5 text-[color-mix(in_srgb,var(--hm-hero-text)_45%,transparent)] sm:block sm:h-4 sm:w-4" />
          </div>
          <input
            id="hm-hero-wa"
            type="tel"
            inputMode="numeric"
            autoComplete="tel-national"
            placeholder="WhatsApp com DDD (Ex: (11) 98765-4321)"
            className="min-w-0 flex-1 border-0 bg-transparent px-2 py-3 text-sm text-[var(--hm-hero-text)] placeholder:text-[color-mix(in_srgb,var(--hm-hero-text)_45%,transparent)] outline-none focus:ring-0 sm:px-3 sm:text-base"
            {...whatsappRegister}
            onChange={(e) => {
              const masked = maskWhatsApp(e.target.value)
              setValue('whatsapp', masked, { shouldValidate: true })
            }}
          />
        </div>
        {errors.whatsapp ? <p className="mt-1 text-xs text-[var(--hm-hero-error)]">{errors.whatsapp.message}</p> : null}
      </div>

      {submitError ? <p className="text-xs text-[var(--hm-hero-error)] sm:text-sm">{submitError}</p> : null}

      <button
        type="submit"
        className="hm-clone-btn-cta flex w-full min-h-[3.25rem] cursor-pointer items-center justify-center rounded-[10px] px-7 py-3 text-center text-lg font-semibold leading-none tracking-tight text-white sm:min-h-[3.5rem] sm:px-10 sm:text-[22px]"
      >
        {submitLabel}
      </button>
    </form>
  )
}
