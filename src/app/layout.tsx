import clsx from 'clsx'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Grekz - Software Developer',
  description: `I'm a software developer ;)`,
}

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => (
  <html lang="en">
    <body className={clsx(inter.className, 'container')}>{children}</body>
  </html>
)

export default RootLayout
