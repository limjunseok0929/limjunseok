import Link from 'next/link'
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '임준석 | Junseok Lim',
  description: '임준석의 포트폴리오 웹사이트 | Junseok\'s portfolio website',
  icons: {
    icon: '/favicon.ico'
  },
  verification: {
    google: 'KMrOUbtD2ESScbxaagmrIG2uVE0B2qPaq2_elIQMiu8'
  },
}

const date = new Date()

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='ko'>
      <body className='font-regular'>
        <div>{children}</div>
        <footer className='flex flex-col px-8 sm:px-18 md:px-28 xl:px-48 pt-28 pb-2 bg-black text-white font-medium space-y-10'>
          <div className='flex justify-between'>
            <div className='hidden md:flex items-center space-x-5'>
              <div>
                <h1 className='font-black md:text-5xl xl:text-7xl'>임준석</h1>
                <h1 className='font-bold md:text-xl xl:text-3xl pl-1'>Junseok Lim</h1>
              </div>
              <div className='font-black md:text-5xl xl:text-7xl'>
                {'</>'}
              </div>
            </div>
            <div>
              <div className='md:flex md:space-x-10 space-y-5 md:space-y-0'>
                <div className='space-y-3'>
                  <h1 className='font-bold text-2xl md:text-3xl xl:text-4xl'>연락처</h1>
                  <div className='text-base md:text-lg xl:text-xl'>
                    <p>010-3054-4357</p>
                    <p>limjunseokdev@gmail.com</p>
                  </div>
                </div>
                <div className='space-y-3'>
                  <h1 className='font-bold text-2xl md:text-3xl xl:text-4xl'>SNS</h1>
                  <div className='text-base md:text-lg xl:text-xl'>
                    <Link target='_blank' href='https://github.com/limjunseok0929'><p className='hover:underline'>깃허브</p></Link>
                    <Link target='_blank' href='https://instagram.com/jxnse0k_'><p className='hover:underline'>인스타그램</p></Link>
                    <Link target='_blank' href='https://www.facebook.com/profile.php?id=100088201783682'><p className='hover:underline'>페이스북</p></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='text-base xl:text-lg flex flex-col md:items-center'>
            <Link target='_blank' href='https://github.com/limjunseok0929/limjunseok'><p className='hover:underline'>Made with ❤️</p></Link>
            <p>Copyright &copy; {date.getFullYear()}, Junseok Lim. All Rights Reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
