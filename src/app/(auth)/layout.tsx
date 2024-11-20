export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="grid h-full min-h-screen w-full grid-cols-1 p-4 lg:grid-cols-2">
      <div className="relative hidden h-full w-full items-center justify-center rounded-2xl bg-primary/80 lg:flex"></div>
      <div className="mx-auto flex w-full max-w-96 flex-col items-center justify-center gap-4">
        {children}
      </div>
    </div>
  )
}
