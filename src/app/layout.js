import './globals.css'
import { Inter } from 'next/font/google'
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio | Sam Doncaster',
  description: 'Portfolio created by Sam Doncaster using NextJS',
  keywords: ['Sam Doncaster', 'Portfolio', 'SamDoncaster'],
  robots: {
    googleBot: {
      index: true
    }
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
