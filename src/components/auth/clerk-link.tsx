import { cn } from '@/lib/utils'
import * as Clerk from '@clerk/elements/common'
import { cva, VariantProps } from 'class-variance-authority'

export const clerkLinkVariants = cva(
  'font-medium text-sm text-primary underline underline-offset-4 outline-none hover:text-primary/80',
  {
    variants: {
      variant: {
        default: '',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

interface ClerkLinkProps
  extends React.ComponentProps<typeof Clerk.Link>,
    VariantProps<typeof clerkLinkVariants> {
  className?: string
}

export function ClerkLink({
  navigate,
  className,
  variant,
  children,
}: ClerkLinkProps) {
  return (
    <Clerk.Link
      navigate={navigate}
      className={cn(clerkLinkVariants({ variant, className }))}
    >
      {children}
    </Clerk.Link>
  )
}
