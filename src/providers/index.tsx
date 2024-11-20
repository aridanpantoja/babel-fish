import { FishProvider } from '@/providers/fish-context'
import { ClerkProvider } from '@clerk/nextjs'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <FishProvider>{children}</FishProvider>
    </ClerkProvider>
  )
}
