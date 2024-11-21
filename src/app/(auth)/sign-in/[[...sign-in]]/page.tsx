'use client'

import { AuthHeader } from '@/components/auth/auth-header'
import { AuthSeparator } from '@/components/auth/auth-separator'
import { ClerkConnection } from '@/components/auth/clerk-connection'
import { ClerkField } from '@/components/auth/clerk-field'
import { ClerkLink, clerkLinkVariants } from '@/components/auth/clerk-link'
import { SignInStep } from '@/components/auth/sign-in-step'
import { Loading } from '@/components/loading'
import { Button } from '@/components/ui/button'
import * as SignIn from '@clerk/elements/sign-in'
import * as Clerk from '@clerk/elements/common'

export default function SignInPage() {
  return (
    <SignIn.Root fallback={<Loading />}>
      <Clerk.Loading>
        {(isGlobalLoading) => (
          <>
            <SignInStep name="start">
              <AuthHeader
                title="Entrar na conta"
                description="Insira seus dados para entrar na sua conta"
              />

              <ClerkField label="Usuário ou email" name="identifier" />

              <SignInStep.Submit disabled={isGlobalLoading} />

              <AuthSeparator />

              <ClerkConnection
                connection="github"
                label="Entrar com Github"
                disabled={isGlobalLoading}
              />

              <p className="text-center text-sm text-muted-foreground">
                Sem conta?{' '}
                <ClerkLink navigate="sign-up" className="ml-0.5">
                  Crie uma conta
                </ClerkLink>
              </p>
            </SignInStep>

            <SignInStep name="verifications">
              <SignIn.Strategy name="password">
                <AuthHeader
                  title={
                    <>
                      Olá, <SignIn.SafeIdentifier />
                    </>
                  }
                  description="Insira sua senha para iniciar a sessão"
                />

                <ClerkField name="password" label="Senha" />

                <div className="w-full space-y-3">
                  <SignInStep.Submit disabled={isGlobalLoading} />

                  <SignIn.Action
                    navigate="forgot-password"
                    className={clerkLinkVariants({
                      className: 'mx-auto block',
                    })}
                  >
                    Esqueceu a senha?
                  </SignIn.Action>
                </div>
              </SignIn.Strategy>

              <SignIn.Strategy name="reset_password_email_code">
                <AuthHeader
                  title="Verifique o seu e-mail"
                  description={
                    <>
                      Nós enviamos um código para <SignIn.SafeIdentifier />.
                    </>
                  }
                />

                <ClerkField name="code" label="Código do Email" />

                <SignInStep.Submit disabled={isGlobalLoading} />
              </SignIn.Strategy>
            </SignInStep>

            <SignIn.Step
              name="forgot-password"
              className="flex w-full flex-col items-start gap-6"
            >
              <AuthHeader
                title="Esqueceu a senha?"
                description="Clique no botão abaixo para receber um código de verificação no seu e-mail."
              />

              <div className="grid w-full grid-cols-2 gap-2">
                <SignIn.Action navigate="previous" asChild>
                  <Button variant="outline">Voltar</Button>
                </SignIn.Action>

                <SignIn.SupportedStrategy
                  name="reset_password_email_code"
                  asChild
                >
                  <Button>Resetar senha</Button>
                </SignIn.SupportedStrategy>
              </div>

              <SignIn.Strategy name="reset_password_email_code">
                <AuthHeader
                  title="Verifique o seu e-mail"
                  description={
                    <>
                      Nós enviamos um código para <SignIn.SafeIdentifier />.
                    </>
                  }
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

                <SignInStep.Submit disabled={isGlobalLoading} />
              </SignIn.Strategy>
            </SignIn.Step>

            <SignInStep name="reset-password">
              <AuthHeader
                title="Crie uma senha"
                description="Escolha uma nova senha para sua conta."
              />
              <ClerkField label="Nova senha" name="password" />
              <ClerkField label="Confirme a senha" name="confirmPassword" />

              <SignInStep.Submit disabled={isGlobalLoading} />
            </SignInStep>
          </>
        )}
      </Clerk.Loading>
    </SignIn.Root>
  )
}
