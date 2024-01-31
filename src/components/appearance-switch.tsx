'use client'

import { useDark } from '~/hooks/use-dark'
import { cn } from '~/lib/utils'

export function AppearanceSwitch({ className = '' }: { className?: string }) {
  const { toggleDark } = useDark()

  return (
    <button
      type="button"
      onClick={toggleDark}
      className={cn('flex', className)}
    >
      <div className="i-lucide-sun rotate-0 scale-100 transition-transform duration-500 dark:-rotate-90 dark:scale-0" />
      <div className="i-lucide-moon absolute rotate-90 scale-0 transition-transform duration-500 dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}
