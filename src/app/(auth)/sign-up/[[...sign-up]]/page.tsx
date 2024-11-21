'use client'

import { AuthHeader } from '@/components/auth/auth-header'
import { AuthSeparator } from '@/components/auth/auth-separator'
import { ClerkConnection } from '@/components/auth/clerk-connection'
import { ClerkField } from '@/components/auth/clerk-field'
import { ClerkLink, clerkLinkVariants } from '@/components/auth/clerk-link'
import { SignUpStep } from '@/components/auth/sign-up-step'
import * as SignUp from '@clerk/elements/sign-up'
import * as Clerk from '@clerk/elements/common'
import { Loading } from '@/components/loading'

export default function SignUpPage() {
  return (
    <SignUp.Root fallback={<Loading />}>
      <Clerk.Loading>
        {(isGlobalLoading) => (
          <>
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

              <SignUpStep.Submit disabled={isGlobalLoading} />

              <AuthSeparator />

              <ClerkConnection
                connection="github"
                label="Entrar com Github"
                disabled={isGlobalLoading}
              />

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

                <Clerk.Field name="code">
                  <Clerk.Input
                    type="otp"
                    required
                    className="flex justify-center gap-1"
                    render={({ value, status }) => (
                      <div
                        data-status={status}
                        className="relative h-10 w-8 rounded-md bg-background ring-1 ring-inset ring-input data-[status=selected]:bg-primary/10 data-[status=selected]:ring-primary"
                      >
                        {value && (
                          <span className="absolute inset-0 flex items-center justify-center">
                            {value}
                          </span>
                        )}
                        {status === 'cursor' && (
                          <div className="absolute inset-0 z-10 rounded-[inherit] border border-primary bg-primary/10" />
                        )}
                      </div>
                    )}
                  />
                </Clerk.Field>

                <div className="w-full space-y-3">
                  <SignUpStep.Submit disabled={isGlobalLoading} />

                  <SignUp.Action
                    resend
                    fallback={({ resendableAfter }) => (
                      <p className="text-center text-sm text-muted-foreground">
                        Reenviar código em {resendableAfter} segundo(s)
                      </p>
                    )}
                    className={clerkLinkVariants({
                      className: 'mx-auto block',
                    })}
                  >
                    Reenviar código
                  </SignUp.Action>
                </div>
              </SignUp.Strategy>
            </SignUpStep>
          </>
        )}
      </Clerk.Loading>
    </SignUp.Root>
  )
}
