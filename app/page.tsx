import type { NextPage } from 'next'
import Image from 'next/image'

const INTRODUCE = [
  '한국인 개발자에요.*korea',
  '웹/앱 개발에 관심이 있어요.*labtop',
  '주로 풀스택 개발에 도전하고 있어요.*muscle',
  'UI/UX 디자인은 스스로 하는 편이에요.*pallet'
]

const INTRODUCE_SPLIT = INTRODUCE.map(t => t.split('*'))

const Home: NextPage = () => {
  return (
    <div className='grid h-screen'>
      <div className='flex flex-col justify-center pt-20 space-y-1 absolute h-4/5 w-full'>
        <div className='flex flex-col self-center w-11/12 md:w-5/6 lg:w-4/5'>
          <div className='space-y-8'>
            <div className='space-y-2'>
              <h1 className='text-5xl font-bold'>
                <span className='font-black text-cblue'>ANTIFRAGILE</span> Developer
              </h1>
              <h1 className='text-5xl font-bold'>
                From <span className='font-black text-cpurple'>FEARLESS</span> Challenges.
              </h1>
            </div>
            <h1 className='text-3xl font-medium'>임준석 | Lim Junseok</h1>
            <ul className='font-regular text-xl space-y-1'>
              {
                INTRODUCE_SPLIT.map(([content, emoji], i) => (
                  <li key={i} className='space-x-3 before:content-["-_"] flex'>
                    <span>{content}</span>
                    <Image src={`/img/emoji/${emoji}.svg`} className='w-6' alt='img' width={10} height={10} />
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home