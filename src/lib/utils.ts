import { clsx, type ClassValue } from 'clsx'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getLocalStorage(key: string) {
  if (typeof window === 'undefined') return

  const value = localStorage.getItem(key)

  if (!value) return

  return JSON.parse(value)
}

export function setLocalStorage(key: string, value: string) {
  if (typeof window === 'undefined') return

  localStorage.setItem(key, value)
}

export function formatDate(value: Date) {
  return format(value, 'PPP', { locale: ptBR })
}
