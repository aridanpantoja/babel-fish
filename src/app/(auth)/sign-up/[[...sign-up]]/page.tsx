'use client'

import { AuthHeader } from '@/components/auth/auth-header'
import { AuthSeparator } from '@/components/auth/auth-separator'
import { ClerkConnection } from '@/components/auth/clerk-connection'
import { ClerkField } from '@/components/auth/clerk-field'
import { ClerkLink, clerkLinkVariants } from '@/components/auth/clerk-link'
import { SignUpStep } from '@/components/auth/sign-up-step'
import * as SignUp from '@clerk/elements/sign-up'

export default function SignUpPage() {
  return (
    <SignUp.Root fallback={<div>Loading...</div>}>
      <SignUpStep name="start">
        <AuthHeader
          title="Crie sua conta"
          description="Preencha os campos abaixo para criar sua conta."
        />

        <div className="w-full space-y-3">
          <ClerkField label="Usuário" name="username" />
          <ClerkField label="Email" name="emailAddress" />
          <ClerkField label="Senha" name="password" />
        </div>

        <SignUpStep.Submit />

        <AuthSeparator />

        <ClerkConnection connection="github" label="Criar com Github" />

        <p className="text-center text-sm text-muted-foreground">
          Já possui uma conta?{' '}
          <ClerkLink navigate="sign-in" className="ml-0.5">
            Entre agora
          </ClerkLink>
        </p>
      </SignUpStep>

      <SignUpStep name="verifications">
        <SignUp.Strategy name="email_code">
          <AuthHeader
            title="Verifique o seu e-mail"
            description="Insira o código enviado para o seu e-mail"
          />

          <ClerkField label="Código" name="code" />

          <div className="w-full space-y-3">
            <SignUpStep.Submit />

            <SignUp.Action
              resend
              fallback={({ resendableAfter }) => (
                <p className="text-center text-sm text-muted-foreground">
                  Reenviar código em {resendableAfter} segundo(s)
                </p>
              )}
              className={clerkLinkVariants({ className: 'mx-auto block' })}
            >
              Reenviar código
            </SignUp.Action>
          </div>
        </SignUp.Strategy>
      </SignUpStep>
    </SignUp.Root>
  )
}
