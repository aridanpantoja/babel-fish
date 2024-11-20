import { buttonVariants } from '@/components/ui/button'
import * as Clerk from '@clerk/elements/common'

interface ClerkConnectionProps {
  label: string
  connection: 'google' | 'github'
}

export function ClerkConnection({ label, connection }: ClerkConnectionProps) {
  return (
    <Clerk.Connection
      name={connection}
      className={buttonVariants({ variant: 'outline', className: 'w-full' })}
    >
      {label}
      <Clerk.Icon className="size-4" />
    </Clerk.Connection>
  )
}
