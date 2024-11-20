import { Separator } from '@/components/ui/separator'

export function AuthSeparator() {
  return (
    <div className="grid w-full grid-cols-7 items-center gap-1 text-muted-foreground">
      <Separator className="col-span-3" />
      <span className="justify-self-center">ou</span>
      <Separator className="col-span-3" />
    </div>
  )
}
