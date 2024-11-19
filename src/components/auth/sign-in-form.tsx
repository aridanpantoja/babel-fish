'use client'

import { Button, buttonVariants } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import * as Clerk from '@clerk/elements/common'
import * as SignIn from '@clerk/elements/sign-in'
import { Fish, Lock, LockKeyhole, LucideProps } from 'lucide-react'
import React from 'react'

const stepStyle = 'flex w-full flex-col items-center gap-6'

export function SignInForm() {
  return (
    <SignIn.Root fallback={<div>Loading...</div>}>
      <StartStep />
      <VerificationsStep />
      <ForgotPasswordStep />
      <ResetPasswordStep />
    </SignIn.Root>
  )
}

function StartStep() {
  return (
    <SignIn.Step name="start" className={stepStyle}>
      <SignInFormHeader Icon={Fish} title="Entre na sua conta" />
      <SignInFormConnections />
      <SignInFormSeparator />
      <SignInFormField label="Usuário ou email" name="identifier" />

      <SignIn.Action asChild submit>
        <Button className="w-full">Continuar</Button>
      </SignIn.Action>
    </SignIn.Step>
  )
}

function VerificationsStep() {
  return (
    <SignIn.Step name="verifications" className={stepStyle}>
      <SignIn.Strategy name="password">
        <SignInFormHeader Icon={Lock} title={`Digite sua senha`} />

        <SignInFormField name="password" label="Senha" />

        <div className="flex w-full flex-col items-center space-y-3">
          <SignIn.Action submit asChild>
            <Button className="w-full">Continuar</Button>
          </SignIn.Action>

          <SignIn.Action
            navigate="forgot-password"
            className="text-xs text-muted-foreground underline-offset-4 hover:underline"
          >
            Esqueceu a senha?
          </SignIn.Action>
        </div>
      </SignIn.Strategy>

      <SignIn.Strategy name="reset_password_email_code">
        <SignInFormHeader Icon={Fish} title="Verifique o seu email" />

        <p className="text-center text-muted-foreground">
          Nós enviamos um código para <SignIn.SafeIdentifier />.
        </p>

        <SignInFormField name="code" label="Código do Email" />

        <SignIn.Action submit asChild>
          <Button className="w-full">Continuar</Button>
        </SignIn.Action>
      </SignIn.Strategy>
    </SignIn.Step>
  )
}

function ForgotPasswordStep() {
  return (
    <SignIn.Step
      name="forgot-password"
      className="flex w-full flex-col items-center gap-6 text-center"
    >
      <SignInFormHeader Icon={Fish} title="Esqueceu sua senha?" />

      <div className="grid w-full grid-cols-2 gap-2">
        <SignIn.Action navigate="previous" asChild>
          <Button variant="outline">Voltar</Button>
        </SignIn.Action>

        <SignIn.SupportedStrategy name="reset_password_email_code" asChild>
          <Button>Resetar senha</Button>
        </SignIn.SupportedStrategy>
      </div>
    </SignIn.Step>
  )
}

function ResetPasswordStep() {
  return (
    <SignIn.Step name="reset-password" className={stepStyle}>
      <SignInFormHeader Icon={LockKeyhole} title="Crie uma nova senha" />

      <SignInFormField label="Nova senha" name="password" />
      <SignInFormField label="Confirme a senha" name="confirmPassword" />

      <SignIn.Action submit asChild>
        <Button className="w-full">Continuar</Button>
      </SignIn.Action>
    </SignIn.Step>
  )
}

function SignInFormHeader({
  title,
  Icon,
}: {
  title: string
  Icon: React.ComponentType<LucideProps>
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <div className="flex items-center justify-center rounded-full bg-primary p-4 text-white">
        <Icon className="size-8" />
      </div>

      <h1 className="text-xl font-bold">{title}</h1>
    </div>
  )
}

function SignInFormField({ name, label }: { name: string; label: string }) {
  return (
    <Clerk.Field name={name} className="flex w-full flex-col gap-2">
      <Clerk.Label className="data-[invalid]:text-red-500">{label}</Clerk.Label>
      <Clerk.Input asChild>
        <Input className="data-[invalid]:border-red-500 data-[invalid]:focus-visible:ring-red-500" />
      </Clerk.Input>
      <Clerk.FieldError className="text-sm text-red-500" />
    </Clerk.Field>
  )
}

function SignInFormConnections() {
  const authConnections = ['Google', 'Github']

  return (
    <div className="grid w-full gap-3">
      {authConnections.map((con, i) => (
        <Clerk.Connection
          key={i}
          name={con.toLowerCase() as 'google' | 'github'}
          className={buttonVariants({ variant: 'outline' })}
        >
          {`Entrar com ${con}`}
          <Clerk.Icon className="size-4" />
        </Clerk.Connection>
      ))}
    </div>
  )
}

function SignInFormSeparator() {
  return (
    <div className="grid w-full grid-cols-7 items-center gap-1 text-muted-foreground">
      <Separator className="col-span-3" />
      <span className="justify-self-center">ou</span>
      <Separator className="col-span-3" />
    </div>
  )
}
