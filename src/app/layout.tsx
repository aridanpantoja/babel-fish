import type { Metadata } from 'next'
import './globals.css'
import { Plus_Jakarta_Sans as PlusJarkartaSans } from 'next/font/google'
import { cn } from '@/lib/utils'
import { siteConfig } from '@/config'
import { FishProvider } from '@/providers/fish-context'

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
}

const plusJarkarta = PlusJarkartaSans({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="h-full">
      <FishProvider>
        <body
          className={cn(
            'flex h-full items-center justify-center bg-primary/20 px-2.5 antialiased',
            plusJarkarta.className,
          )}
        >
          <div className="w-full max-w-md space-y-6 rounded-md bg-background p-4 shadow md:p-8">
            {children}
          </div>
        </body>
      </FishProvider>
    </html>
  )
}
