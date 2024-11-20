type AuthHeaderProps = {
  title: React.ReactNode
  description: React.ReactNode
}

export function AuthHeader({ description, title }: AuthHeaderProps) {
  return (
    <div className="flex w-full flex-col items-start justify-center gap-3">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="text-muted-foreground">{description}</p>
    </div>
  )
}
