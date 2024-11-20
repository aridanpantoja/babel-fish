import { Input } from '@/components/ui/input'
import * as Clerk from '@clerk/elements/common'

export function ClerkField({ name, label }: { name: string; label: string }) {
  return (
    <Clerk.Field name={name} className="flex w-full flex-col gap-2">
      <Clerk.Label className="font-medium data-[invalid]:text-red-500">
        {label}
      </Clerk.Label>
      <Clerk.Input asChild>
        <Input className="data-[invalid]:border-red-500 data-[invalid]:focus-visible:ring-red-500" />
      </Clerk.Input>
      <Clerk.FieldError className="text-sm text-red-500" />
    </Clerk.Field>
  )
}
