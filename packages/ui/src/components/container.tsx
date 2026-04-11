import * as React from "react"
import { cn } from "@dynage/ui/lib/utils"

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg" | "xl" | "2xl"
}

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, size = "md", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "w-full h-full mx-auto px-5",
          size === "sm" && "max-w-screen-sm",
          size === "md" && "max-w-screen-md",
          size === "lg" && "max-w-screen-lg",
          size === "xl" && "max-w-screen-xl",
          size === "2xl" && "max-w-screen-2xl",
          className
        )}
        {...props}
      />
    )
  }
)
Container.displayName = "Container"
