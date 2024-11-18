'use client'

import { buttonVariants } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import * as Clerk from '@clerk/elements/common'
import * as SignIn from '@clerk/elements/sign-in'
import { Fish } from 'lucide-react'

export default function SignInPage() {
  return (
    <div className="mx-auto flex max-w-96 flex-col items-center gap-4 rounded-md bg-background p-6 shadow-2xl">
      <SignIn.Root fallback={<div>Loading...</div>}>
        <div></div>

        <SignIn.Step
          name="start"
          className="flex w-full flex-col items-center gap-6"
        >
          <div className="flex flex-col items-center justify-center gap-3">
            <div className="flex items-center justify-center rounded-full bg-primary p-4 text-white">
              <Fish className="size-8" />
            </div>

            <h1 className="text-xl font-bold">Sign in to your account</h1>
          </div>

          <div className="grid w-full gap-3">
            <Clerk.Connection
              name="google"
              className={buttonVariants({ variant: 'outline' })}
            >
              Sign in with Google <Clerk.Icon className="size-4" />
            </Clerk.Connection>

            <Clerk.Connection
              name="github"
              className={buttonVariants({ variant: 'outline' })}
            >
              Sign in with Github <Clerk.Icon className="size-4" />
            </Clerk.Connection>
          </div>

          <div className="grid w-full grid-cols-7 items-center gap-1 text-muted-foreground/50">
            <Separator className="col-span-3" />
            <span className="justify-self-center">ou</span>
            <Separator className="col-span-3" />
          </div>

          <Clerk.Field name="identifier" className="flex w-full flex-col gap-2">
            <Clerk.Label className="data-[invalid]:text-red-500">
              Email or username
            </Clerk.Label>
            <Clerk.Input asChild>
              <Input className="data-[invalid]:border-red-500 data-[invalid]:focus-visible:ring-red-500" />
            </Clerk.Input>
            <Clerk.FieldError className="text-sm text-red-500" />
          </Clerk.Field>

          <SignIn.Action
            className={buttonVariants({ className: 'w-full' })}
            submit
          >
            Continue
          </SignIn.Action>
        </SignIn.Step>

        <SignIn.Step
          name="verifications"
          className="flex w-full flex-col items-center gap-6"
        >
          <SignIn.Strategy name="password">
            <div className="flex flex-col items-center justify-center gap-3">
              <div className="flex items-center justify-center rounded-full bg-primary p-4 text-white">
                <Fish className="size-8" />
              </div>

              <h1 className="text-xl font-bold">Enter your password</h1>
            </div>

            <Clerk.Field name="password" className="flex w-full flex-col gap-2">
              <Clerk.Label className="data-[invalid]:text-red-500">
                Password
              </Clerk.Label>
              <Clerk.Input asChild>
                <Input className="data-[invalid]:border-red-500 data-[invalid]:focus-visible:ring-red-500" />
              </Clerk.Input>
              <Clerk.FieldError className="text-sm text-red-500" />
            </Clerk.Field>

            <div className="flex w-full flex-col items-center space-y-3">
              <SignIn.Action
                className={buttonVariants({ className: 'w-full' })}
                submit
              >
                Continue
              </SignIn.Action>
              <SignIn.Action
                navigate="forgot-password"
                className="text-xs text-muted-foreground underline-offset-4 hover:underline"
              >
                Forgot password?
              </SignIn.Action>
            </div>
          </SignIn.Strategy>

          <SignIn.Strategy name="reset_password_email_code">
            <h1>Check your email</h1>
            <p>
              We sent a code to <SignIn.SafeIdentifier />.
            </p>

            <Clerk.Field name="code">
              <Clerk.Label>Email code</Clerk.Label>
              <Clerk.Input />
              <Clerk.FieldError />
            </Clerk.Field>

            <SignIn.Action submit>Continue</SignIn.Action>
          </SignIn.Strategy>
        </SignIn.Step>

        <SignIn.Step name="forgot-password">
          <h1>Forgot your password?</h1>

          <SignIn.SupportedStrategy name="reset_password_email_code">
            Reset password
          </SignIn.SupportedStrategy>

          <SignIn.Action navigate="previous">Go back</SignIn.Action>
        </SignIn.Step>

        <SignIn.Step name="reset-password">
          <h1>Reset your password</h1>

          <Clerk.Field name="password">
            <Clerk.Label>New password</Clerk.Label>
            <Clerk.Input />
            <Clerk.FieldError />
          </Clerk.Field>

          <Clerk.Field name="confirmPassword">
            <Clerk.Label>Confirm password</Clerk.Label>
            <Clerk.Input />
            <Clerk.FieldError />
          </Clerk.Field>

          <SignIn.Action submit>Reset password</SignIn.Action>
        </SignIn.Step>
      </SignIn.Root>
    </div>
  )
}
