import { Button } from '@/components/ui/button'
import { Action, Step } from '@clerk/elements/sign-up'
import React from 'react'

type SignUpStepProps = React.ComponentProps<typeof Step>

export function SignUpStep({ name, children }: SignUpStepProps) {
  return (
    <Step name={name} className="flex w-full flex-col items-center gap-6">
      {children}
    </Step>
  )
}

function SignUpSubmit({
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

SignUpStep.Submit = SignUpSubmit
