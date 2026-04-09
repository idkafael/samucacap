import { supabase } from '../lib/supabase'

const TABLE_LEADS = 'leads'

/**
 * Envia lead para o Supabase (compatível com o formulário antigo e o novo).
 * @param {{ email: string, telefone?: string, whatsapp?: string }} data
 * @returns {Promise<{ ok: boolean, error?: string }>}
 */
export async function submitLead(data) {
  if (!supabase) {
    return { ok: false, error: 'Supabase não configurado. Defina VITE_SUPABASE_URL e VITE_SUPABASE_ANON_KEY no .env' }
  }

  const { email, telefone, whatsapp } = data || {}
  const emailTrim = (email || '').trim()
  const phoneRaw = (whatsapp ?? telefone ?? '').toString().trim()
  const phoneDigits = phoneRaw.replace(/\D/g, '')

  if (!emailTrim || !phoneDigits) {
    return { ok: false, error: 'E-mail e WhatsApp são obrigatórios' }
  }

  const telefoneGrave = phoneRaw.includes('+') ? phoneRaw : `+55 ${phoneRaw}`.trim()

  const { error } = await supabase
    .from(TABLE_LEADS)
    .insert([{ email: emailTrim, telefone: telefoneGrave }])

  if (error) {
    return { ok: false, error: error.message }
  }

  return { ok: true }
}
