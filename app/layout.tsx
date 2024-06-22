import Link from 'next/link'
import './globals.css'
import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { Metadata } from 'next'

const ID = 'undeokum'

const NAV = [
  {
    name: '홈',
    path: ''
  },
  {
    name: '경력',
    path: 'career'
  },
  {
    name: '프로젝트',
    path: 'projects'
  },
  {
    name: '계정',
    path: 'accounts'
  },
  {
    name: '블로그',
    path: 'blog'
  },
]

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
            NAV.map(({name, path}, i) => (
              <Link href={`/${path}`} className='hover:text-black' key={i}>{name}</Link>
            ))
          }
        </nav>
        <div>{children}</div>
        <footer className='flex flex-col items-center space-y-3'>
          <div>
            <Link href='https://github.com/undeokum/limjunseok' className='hover:text-blue-600 hover:underline'>Made With ❤️</Link>
          </div>
          <p>Copyright &copy; {new Date().getFullYear()}, 임준석. All Rights Reserved.</p>
          <div className='flex items-center space-x-8'>
            <Link href='mailto:limjunseokdev@gmail.com'><FontAwesomeIcon icon={faEnvelope} className='w-6 h-6 transition-colors hover:opacity-60' /></Link>
            <Link target='_blank' href={`https://github.com/${ID}`}><FontAwesomeIcon icon={faGithub} className='w-6 h-6 transition-colors hover:opacity-60' /></Link>
            <Link target='_blank' href={`https://instagram.com/${ID}`}><FontAwesomeIcon icon={faInstagram} className='w-6 h-6 transition-colors hover:opacity-60' /></Link>
          </div>
        </footer>
      </body>
    </html>
  )
}
