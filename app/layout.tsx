import Link from 'next/link'
import './globals.css'
import { Metadata } from 'next'

const NAV = [
  '홈*/',
  '경력*/career',
  '프로젝트*/project',
  '계정*/account',
  '블로그*https://undeokum.github.io'
].map(t => t.split('*'))

export const metadata: Metadata = {
  title: '임준석 Junseok Lim',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='ko'>
      <body className='font-regular pb-3'>
        <nav className='fixed w-full px-64 py-6 flex justify-between text-gray-500 z-50 bg-white border-b border-gray-100'>
          {
            NAV.map(([name, path], i) => (
              <Link href={`${path}`} className='hover:text-black' key={i}>{name}</Link>
            ))
          }
        </nav>
        <div className='pt-5'>{children}</div>
        <footer className='flex flex-col items-center space-y-1'>
          <div>
            <Link href='https://github.com/undeokum/limjunseok' className='hover:text-blue-600 hover:underline'>Made With ❤️</Link>
          </div>
          <p>Copyright &copy; {new Date().getFullYear()}, 임준석. All Rights Reserved.</p>
        </footer>
      </body>
    </html>
  )
}
