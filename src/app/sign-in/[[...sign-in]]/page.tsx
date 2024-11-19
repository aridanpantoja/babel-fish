import { SignInForm } from '@/components/auth/sign-in-form'

export default function SignInPage() {
  return (
    <div className="mx-auto flex max-w-96 flex-col items-center gap-4 rounded-md bg-background p-6 shadow-2xl">
      <SignInForm />
    </div>
  )
}
