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
      <DialogContent className={`${sizeClasses[size]} ${size === "full" ? "overflow-y-auto" : ""} border-primary/20`}>
        <DialogHeader>
          <DialogTitle className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            {title}
          </DialogTitle>
          <DialogDescription className={narrative ? "" : "sr-only"}>
            {narrative || `Details for ${title}`}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          {points && points.length > 0 && (
            <div className="space-y-2">
              {points.map((point) => (
                <p key={point} className="text-sm text-foreground leading-relaxed flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  {point}
                </p>
              ))}
            </div>
          )}

          {iframe ? (
            <iframe
              title={iframe.title}
              src={iframe.src}
              className="w-full min-h-[320px] border-0 rounded-lg"
            />
          ) : null}

          {children}

          {footer ? footer : null}
        </div>
      </DialogContent>
    </Dialog>
  )
}
