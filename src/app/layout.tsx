import '~/styles/globals.css'

import { Provider } from 'jotai'
import { Inter } from 'next/font/google'
import Link from 'next/link'

import { AppearanceSwitch } from '~/components/appearance-switch'
import { cn } from '~/lib/utils'

import { ThemeProvider } from './theme-provider'

const inter = Inter({
  subsets: ['latin'],
})

export const metadata = {
  title: 'Palworld Paldex',
  description: 'Palworld Paldex',
  icons: [{ rel: 'icon', url: '/pal.png' }],
}

export default function RootLayout({
  modal,
  children,
}: {
  modal: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn('flex min-h-screen flex-col', inter.className)}>
        <Provider>
          <ThemeProvider>
            <header className="p-4 text-center text-4xl font-bold">
              <Link href="/">Palworld Paldex</Link>
            </header>
            <main className="mx-auto mt-8 w-full max-w-4xl flex-1">
              {children}
            </main>
            <footer className="flex items-center justify-center gap-2 p-4">
              <span className="font-semibold">
                Inspired by&nbsp;
                <a
                  className="underline"
                  href="https://github.com/mlg404/palworld-paldex-api"
                >
                  mlg404/palworld-paldex-api
                </a>
              </span>
              <AppearanceSwitch />
            </footer>
            {modal}
          </ThemeProvider>
        </Provider>
      </body>
    </html>
  )
}
