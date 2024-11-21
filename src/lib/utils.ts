import { clsx, type ClassValue } from 'clsx'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(value: Date) {
  return format(value, 'PPP', { locale: ptBR })
}
