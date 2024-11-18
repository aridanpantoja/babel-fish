import { siteConfig } from '@/config'
import { cn } from '@/lib/utils'
import { Providers } from '@/providers'
import type { Metadata } from 'next'
import { Plus_Jakarta_Sans as PlusJarkartaSans } from 'next/font/google'
import './globals.css'

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
    <Providers>
      <html lang="pt-BR" className="h-full">
        <body
          className={cn(
            'flex h-full items-center justify-center bg-primary/20 antialiased',
            plusJarkarta.className,
          )}
        >
          <div className="w-full">{children}</div>
        </body>
      </html>
    </Providers>
  )
}
