import { cn } from '@/lib/utils'
import { cva, VariantProps } from 'class-variance-authority'

const loadingVariants = cva('size-10 animate-spin rounded-full border-4', {
  variants: {
    variant: {
      default: 'border-muted-foreground/30 border-t-primary',
      secondary: 'border-muted/50 border-t-muted',
    },
    size: {
      default: 'size-10 border-4',
      sm: 'size-4 border-2',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
})

type LoadingProps = {
  className?: string
} & VariantProps<typeof loadingVariants>

export function Loading({ className, size, variant }: LoadingProps) {
  return (
    <div className={cn(loadingVariants({ className, variant, size }))}></div>
  )
}
