import { ptBR } from '@clerk/localizations'
import { ClerkProvider } from '@clerk/nextjs'

export function Providers({ children }: { children: React.ReactNode }) {
  return <ClerkProvider localization={ptBR}>{children}</ClerkProvider>
}
