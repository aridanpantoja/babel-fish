import { Button } from '@/components/ui/button'
import * as Clerk from '@clerk/elements/common'

interface ClerkConnectionProps {
  label: string
  connection: 'github'
  disabled?: boolean
}

export function ClerkConnection({
  label,
  connection,
  disabled = false,
}: ClerkConnectionProps) {
  return (
    <Clerk.Connection name={connection} asChild>
      <Button variant="outline" className="w-full" disabled={disabled}>
        {label} <Clerk.Icon className="size-4" />
      </Button>
    </Clerk.Connection>
  )
}
