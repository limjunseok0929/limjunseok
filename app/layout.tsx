import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '임준석 | Junseok Lim',
  description: '임준석의 포트폴리오 웹사이트 | Junseok\'s portfolio website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='ko' className='scroll-smooth snap-mandatory snap-y'>
      <body className='font-regular'>{children}</body>
    </html>
  )
}
