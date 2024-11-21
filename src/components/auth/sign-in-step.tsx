import { Button } from '@/components/ui/button'
import { Action, Step } from '@clerk/elements/sign-in'
import { Loading } from '@/components/loading'
import { Loading as ClerkLoading } from '@clerk/elements/common'
import React from 'react'

type SignInStepProps = React.ComponentProps<typeof Step>

export function SignInStep({ name, children }: SignInStepProps) {
  return (
    <Step name={name} className="flex w-full flex-col items-center gap-6">
      {children}
    </Step>
  )
}

function SignInSubmit({
  children = 'Continuar',
  disabled = false,
}: {
  children?: React.ReactNode
  disabled?: boolean
}) {
  return (
    <Action submit asChild>
      <Button disabled={disabled} className="w-full">
        <ClerkLoading>
          {(isLoading) => {
            return isLoading ? (
              <Loading size="sm" variant="secondary" />
            ) : (
              <>{children}</>
            )
          }}
        </ClerkLoading>
      </Button>
    </Action>
  )
}

SignInStep.Submit = SignInSubmit
