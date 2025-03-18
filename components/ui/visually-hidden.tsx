"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface VisuallyHiddenProps extends React.HTMLAttributes<HTMLDivElement> {}

export function VisuallyHidden({ className, children, ...props }: VisuallyHiddenProps) {
  return (
    <div
      className={cn(
        "absolute w-px h-px p-0 border-0 overflow-hidden clip whitespace-nowrap",
        "m-[-1px]", // Use negative margin instead of -m-px to avoid Tailwind class
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
} 