/** Convite público do grupo; sobrescreva com VITE_WHATSAPP_GROUP_URL na Vercel. */
export const WHATSAPP_GROUP_INVITE_URL =
  (import.meta.env.VITE_WHATSAPP_GROUP_URL && String(import.meta.env.VITE_WHATSAPP_GROUP_URL).trim()) ||
  'https://chat.whatsapp.com/LxJOptAAoHM7FzwrCGxNx4?mode=gi_t'
