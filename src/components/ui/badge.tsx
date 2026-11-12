import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-md px-2.5 py-1 text-xs font-medium transition-colors focus:outline-none focus:ring-1 focus:ring-[#a3e635]",
  {
    variants: {
      variant: {
        default:
          "border border-[#a3e635]/30 bg-[#a3e635]/10 text-[#a3e635]",
        secondary:
          "border border-white/10 bg-white/[0.04] text-zinc-300",
        outline:
          "border border-zinc-700 text-zinc-300",
        solid:
          "bg-[#a3e635] text-[#0d0f12] font-semibold",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
