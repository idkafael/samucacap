import { useState } from 'react'
import { AnimatedCard } from './AnimatedCard'

const TELEFONE_PATTERN = '^\\([0-9]{2}\\) [0-9]{4,5}-[0-9]{4}$'

function formatTelefone(value) {
  const digits = value.replace(/\D/g, '').slice(0, 11)
  if (digits.length <= 2) return digits ? `(${digits}` : ''
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`
}

export function OfertaSection() {
  const [nomeCompleto, setNomeCompleto] = useState('')
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')

  function handleTelefoneChange(e) {
    setTelefone(formatTelefone(e.target.value))
  }

  function handleSubmit(e) {
    e.preventDefault()
    // TODO: enviar para API ou integração
    console.log({ nomeCompleto, telefone, email })
  }

  return (
    <section id="oferta" className="relative py-20 md:py-28 bg-background overflow-hidden px-4">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[2px] bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[100px]" />
      <div className="relative z-10 max-w-xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold mb-4 text-center">
          Garanta sua vaga no Evento{' '}
          <span className="underline-gold"><span className="gradient-text-gold">Esquadria Milionária</span></span>
        </h2>
        <p className="text-muted text-base md:text-lg text-center mb-2 font-medium">
          Preencha seus dados abaixo e receba o acesso.
        </p>
        <p className="text-muted text-sm text-center mb-8 font-medium">
          As vagas são limitadas.
        </p>

        <AnimatedCard className="p-6 md:p-8" innerBg="bg-surface">
          <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="nome" className="block text-white text-sm font-medium mb-2">
              Nome completo
            </label>
            <input
              id="nome"
              type="text"
              value={nomeCompleto}
              onChange={(e) => setNomeCompleto(e.target.value)}
              required
              placeholder="Seu nome completo"
              className="w-full px-4 py-3 rounded-lg bg-background border border-surface-light text-white placeholder:text-muted focus:outline-none focus:border-gold/50 transition-colors"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-white text-sm font-medium mb-2">
              E-mail
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="seu@email.com"
              className="w-full px-4 py-3 rounded-lg bg-background border border-surface-light text-white placeholder:text-muted focus:outline-none focus:border-gold/50 transition-colors"
            />
          </div>
          <div>
            <label htmlFor="telefone" className="block text-white text-sm font-medium mb-2">
              Número de contato
            </label>
            <input
              id="telefone"
              type="tel"
              value={telefone}
              onChange={handleTelefoneChange}
              required
              pattern={TELEFONE_PATTERN}
              title="Use o formato (00) 00000-0000 ou (00) 0000-0000"
              placeholder="(00) 00000-0000"
              className="w-full px-4 py-3 rounded-lg bg-background border border-surface-light text-white placeholder:text-muted focus:outline-none focus:border-gold/50 transition-colors"
            />
          </div>
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold text-background bg-gold hover:bg-gold-light transition-all duration-200 rounded-full shadow-lg shadow-black/20 hover:shadow-gold/30 uppercase tracking-wider"
          >
            Quero participar do Evento Esquadria Milionária
          </button>
          </form>
        </AnimatedCard>
      </div>
    </section>
  )
}
