import { Nunito } from 'next/font/google'

import './globals.css'

export const metadata = {
  title: 'Airbnb By Kallan',
  description: 'Full Stack Airbnb NextJS App',
}

const font = Nunito({
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
