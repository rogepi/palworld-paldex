'use client'

import { usePathname, useRouter } from 'next/navigation'

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
} from '~/components/ui/dialog'

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const pathname = usePathname()

  function handleReplace() {
    window.location.replace(pathname)
  }

  function handleOnOpenChange(open: boolean) {
    if (!open) {
      router.back()
    }
  }

  return (
    <Dialog open onOpenChange={handleOnOpenChange}>
      <DialogPortal>
        <DialogOverlay className="fixed inset-0 bg-black/70" />

        <DialogContent className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <DialogHeader>
            <button
              onClick={handleReplace}
              type="button"
              className="absolute right-12 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none"
            >
              <i className="i-lucide-focus" />
            </button>
          </DialogHeader>
          {children}
        </DialogContent>
      </DialogPortal>
    </Dialog>
  )
}
