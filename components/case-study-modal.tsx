"use client"

import type { ReactNode } from "react"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

type CaseStudyModalProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  title: string
  narrative?: string
  points?: string[]
  iframe?: {
    src: string
    title: string
  }
  footer?: ReactNode
  children?: ReactNode
  size?: "default" | "large" | "full"
}

export function CaseStudyModal({
  open,
  onOpenChange,
  title,
  narrative,
  points,
  iframe,
  footer,
  children,
  size = "default",
}: CaseStudyModalProps) {
  const sizeClasses = {
    default: "sm:max-w-2xl",
    large: "sm:max-w-4xl",
    full: "sm:max-w-6xl max-h-[90vh]",
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className={`${sizeClasses[size]} ${size === "full" ? "overflow-y-auto" : ""}`}>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {narrative && <DialogDescription>{narrative}</DialogDescription>}
        </DialogHeader>

        <div className="space-y-4">
          {points && points.length > 0 && (
            <div className="space-y-2">
              {points.map((point) => (
                <p key={point} className="text-sm text-foreground leading-relaxed">
                  {point}
                </p>
              ))}
            </div>
          )}

          {iframe ? (
            <iframe
              title={iframe.title}
              src={iframe.src}
              className="w-full min-h-[320px] border-0"
            />
          ) : null}

          {children}

          {footer ? footer : null}
        </div>
      </DialogContent>
    </Dialog>
  )
}
