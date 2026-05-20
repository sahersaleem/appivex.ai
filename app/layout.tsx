import type { Metadata } from 'next'
import { Syne, Manrope } from 'next/font/google'
import './globals.css'

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-syne',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-manrope',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Appovex — We Build the Tech That Helps You Scale',
  description:
    'Big-Tech quality. Startup speed. Appovex helps small businesses and entrepreneurs enter the AI era with AI automation, SaaS development, Voice AI, and premium web design.',
  keywords: [
    'AI automation',
    'SaaS development',
    'Voice AI',
    'web design',
    'startup tech agency',
  ],
  openGraph: {
    title: 'Appovex — We Build the Tech That Helps You Scale',
    description:
      'Big-Tech quality. Startup speed. Custom GPTs, SaaS builds, Voice AI, and high-conversion web design for entrepreneurs worldwide.',
    type: 'website',
    url: 'https://appovex.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${syne.variable} ${manrope.variable}`}>
      <body>{children}</body>
    </html>
  )
}
