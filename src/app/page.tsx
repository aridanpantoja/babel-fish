'use client'

import { RegistrationForm } from '@/components/registration-form'
import { buttonVariants } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { useFish } from '@/providers/fish-context'
import { Fish } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  const { name, isLoading } = useFish()

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-3">
        <div className="flex items-center justify-center rounded-full bg-primary p-4 text-white">
          <Fish className="size-8" />
        </div>

        {!isLoading ? (
          <>
            <h1 className="text-xl font-bold">
              {name ? `Olá, ${name}!` : 'Bem-vindo ao Peixe Babel!'}
            </h1>

            <p className="text-center text-muted-foreground">
              Sua dashboard está sendo construída para ajudá-lo a gerenciar tudo
              com facilidade e eficiência.
            </p>
          </>
        ) : (
          <Skeleton className="h-6 w-full" />
        )}
      </div>

      {!isLoading ? (
        name ? (
          <Link
            href="/dashboard"
            className={buttonVariants({ className: 'w-full' })}
          >
            Ir para a Dashboard →
          </Link>
        ) : (
          <RegistrationForm />
        )
      ) : (
        <Skeleton className="h-32 w-full" />
      )}
    </>
  )
}
