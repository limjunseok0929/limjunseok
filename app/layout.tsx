'use client'
import Link from 'next/link'
import './globals.css'
import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { usePathname } from 'next/navigation'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const date = new Date()

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='ko'>
      <body className='font-regular pb-3'>
        <nav className='fixed w-full px-14 py-5 flex justify-end z-50'>
          {/* <div className='font-bold space-x-5 text-xl'>
            {
              usePathname() != '/' && <Link href='/'>HOME</Link>
            }
            {
              ['skills', 'projects', 'blog'].map((text, i) => <Link key={i} href={`/${text}`} className={`${i % 2 != 0 ? 'hover:text-cpurple' : 'hover:text-cblue'} transition-colors`}>{text.toUpperCase()}</Link>)
            }
          </div> */}
        </nav>
        <div>{children}</div>
        <footer className='flex flex-col items-center space-y-3'>
          <div className='text-center'>
            <h1 className='font-bold'>소스 SOURCE</h1>
            <div>
              {
                ['limjunseok0929/limjunseok'].map((link, i) => <Link key={i} target='_blank' href={`https://github.com/${link}`} className='hover:text-blue-600 hover:underline'>{link}</Link>)
              }
            </div>
          </div>
          <p>Copyright &copy; {new Date().getFullYear()}, Junseok Lim. All Rights Reserved.</p>
          <div className='flex items-center space-x-8'>
            <Link href='mailto:limjunseokdev@gmail.com'><FontAwesomeIcon icon={faEnvelope} className='w-6 h-6 transition-colors hover:opacity-60' /></Link>
            <Link target='_blank' href='https://github.com/limjunseok0929'><FontAwesomeIcon icon={faGithub} className='w-6 h-6 transition-colors hover:opacity-60' /></Link>
            <Link target='_blank' href='https://instagram.com/jxn5e0k'><FontAwesomeIcon icon={faInstagram} className='w-6 h-6 transition-colors hover:opacity-60' /></Link>
          </div>
        </footer>
      </body>
    </html>
  )
}
