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
  narrative: string
  points: string[]
  iframe?: {
    src: string
    title: string
  }
  footer?: ReactNode
}

export function CaseStudyModal({
  open,
  onOpenChange,
  title,
  narrative,
  points,
  iframe,
  footer,
}: CaseStudyModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{narrative}</DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <div className="space-y-2">
            {points.map((point) => (
              <p key={point} className="text-sm text-foreground leading-relaxed">
                {point}
              </p>
            ))}
          </div>

          {iframe ? (
            <iframe
              title={iframe.title}
              src={iframe.src}
              className="w-full min-h-[320px] border-0"
            />
          ) : null}

          {footer ? footer : null}
        </div>
      </DialogContent>
    </Dialog>
  )
}
