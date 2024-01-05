import type { Metadata } from 'next'
import { montserrat } from '../utils/fonts'
import './globals.css'

export const metadata: Metadata = {
  title: 'Valorant Agentes',
  description: 'Agentes do Valorant',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body
        className={`${montserrat.className} flex min-h-screen flex-col gap-y-20 bg-[url('/background.png')] bg-cover bg-center bg-no-repeat text-base font-normal`}
      >
        {children}
      </body>
    </html>
  )
}
