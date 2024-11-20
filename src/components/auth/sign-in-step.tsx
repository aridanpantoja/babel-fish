import { Button } from '@/components/ui/button'
import { Action, Step } from '@clerk/elements/sign-in'
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
}: {
  children?: React.ReactNode
}) {
  return (
    <Action asChild submit>
      <Button className="w-full">{children}</Button>
    </Action>
  )
}

SignInStep.Submit = SignInSubmit
