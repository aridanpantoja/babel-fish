import { Fish } from 'lucide-react'

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="grid h-full w-full grid-cols-1 p-4 lg:grid-cols-2">
      <div className="relative hidden h-full w-full flex-col justify-between rounded-2xl bg-primary p-10 text-primary-foreground lg:flex">
        <div className="flex items-center justify-start gap-2">
          <Fish className="size-8" />
          <span className="text-2xl font-bold">Babel Fish</span>
        </div>

        <p className="text-xl font-medium">
          The easiest way to understand your fish.
        </p>
      </div>
      <div className="mx-auto flex w-full max-w-96 flex-col items-center justify-center gap-4">
        {children}
      </div>
    </div>
  )
}
