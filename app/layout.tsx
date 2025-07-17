import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Google Übersetzer',
  description: 'Kostenlose Online-Übersetzung von Google',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  )
}
