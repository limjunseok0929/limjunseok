'use client'
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import SkillBtn from './components/SkillBtn';
import SocialBtn from './components/SocialBtn';
import { useEffect, useState } from 'react';


const SkillIconsArray = [
  'html',
  'css',
  'javascript',
  'typescript',
  'node.js',
  'react',
  'next.js',
  'tailwindcss'
]

const SocialIconsArray = [
  [
    'github',
    'https://github.com/limjunseok0929'
  ],
  [
    'facebook',
    'https://www.facebook.com/profile.php?id=100088201783682'
  ],
  [
    'instagram',
    'https://www.instagram.com/jxnse0k_'
  ],
  [
    'solved.ac',
    'https://solved.ac/profile/junseok_lim09'
  ],
  [
    'npm',
    'https://www.npmjs.com/~limjunseok'
  ],
  [
    'stackoverflow',
    'https://stackoverflow.com/users/18835395/limjunseok'
  ]
]

const hello = ['Hello.', 'こんにちは.', '你好。', 'Hola.', 'Bonjour.', 'Здравствуйте.', '안녕하세요.']

const date = new Date()
let age = date.getFullYear() - 2009;
const m = date.getMonth() - 9;
if (m < 0 || (m === 0 && date.getDate() < 29)) {
    age--;
}

const Home: NextPage = () => {
  const [helloText, setHelloText] = useState('안녕하세요.')
  const [helloI, setHelloI] = useState(0)

  useEffect(() => {
    const hellointerval = setInterval(() => {
      setHelloText(hello[helloI])
      if(helloI == hello.length - 1) setHelloI(0)
      else setHelloI(helloI + 1)
    }, 3000)
    return () => clearInterval(hellointerval)
  }, [helloI])

  return (
    <div>
      <Head>
        <title>Junseok Lim</title>
      </Head>

      <div className='snap-start grid h-screen'>
        <div className='flex flex-col justify-center pt-20 space-y-1 absolute h-4/5 w-full'>
          <div className='flex flex-col self-center w-11/12 md:w-5/6 lg:w-4/5'>
            <div className='space-y-10'>
              <div className='space-y-3'>
                <h1 className='font-bold text-3xl sm:text-4xl md:text-5xl'>{helloText}</h1>
                <div className='flex justify-between'>
                  <h1 className='text-5xl sm:text-6xl md:text-7xl font-bold'><span className='text-5xl sm:text-6xl md:text-7xl text-transparent bg-clip-text from-[#7194FF] to-[#A855F7] bg-gradient-to-r font-black'>임준석</span>입니다.</h1>
                  <div><h1><span className='text-7xl sm:text-8xl md:text-9xl text-transparent bg-clip-text from-[#7194FF] to-[#A855F7] bg-gradient-to-r font-black'>{'</>'}</span></h1></div>
                </div>
              </div>
              <div className='px-2'>
                <p className='text-2xl'>
                  {date.getFullYear() - 2008}살 (만 {age}살) 개발자 임준석이라고 합니다.
                  <div className='p-0.5' />
                  주로 웹페이지 개발을 하고 있습니다.
                  <div className='p-0.5' />
                  풀스택 개발자와 대기업 합격을 꿈꾸며 꾸준히 개발하고 성장하고 있는 개발자입니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='snap-start grid h-screen'>
        <div className='flex flex-col justify-center pt-20 space-y-1 absolute h-4/5 w-full'>
          <div className='flex flex-col self-center w-11/12 md:w-5/6 lg:w-4/5 space-y-5'>
            <div>
              <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold'>My <span className='text-3xl sm:text-4xl md:text-5xl text-transparent bg-clip-text from-[#7194FF] to-[#A855F7] bg-gradient-to-r font-bold'>Skills</span></h1>
              <span className='font-thin text-base sm:text-lg md:text-xl'>What I can use in programming</span>
            </div>
            <div className='flex flex-row flex-grow flex-wrap pt-4 space-x-6 sm:space-x-8 md:space-x-10 items-center text-center'>
              {
                SkillIconsArray.map((_,i) => (
                  <div key={i}>
                    <SkillBtn skillName={_} />
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>

      <div className='snap-start grid h-screen'>
        <div className='flex flex-col justify-center pt-20 space-y-1 absolute h-4/5 w-full'>
          <div className='flex flex-col self-center w-11/12 md:w-5/6 lg:w-4/5 space-y-5'>
            <div>
              <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold'>My <span className='text-3xl sm:text-4xl md:text-5xl text-transparent bg-clip-text from-[#7194FF] to-[#A855F7] bg-gradient-to-r font-bold'>Projects</span></h1>
              <h1 className='font-thin text-base sm:text-lg md:text-xl'>The projects that I made by programming</h1>
            </div>
            <div className='flex flex-row flex-grow flex-wrap pt-4 space-x-10 items-center text-center'>
              <p className='text-sm sm:text-base md:text-lg'>
                Not any projects yet.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='snap-start grid h-screen'>
        <div className='flex flex-col justify-center pt-20 space-y-1 absolute h-4/5 w-full'>
          <div className='flex flex-col self-center w-11/12 md:w-5/6 lg:w-4/5 space-y-5'>
            <div>
              <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold'>My <span className='text-3xl sm:text-4xl md:text-5xl text-transparent bg-clip-text from-[#7194FF] to-[#A855F7] bg-gradient-to-r font-bold'>Socials</span></h1>
              <h1 className='font-thin text-base sm:text-lg md:text-xl'>You can see me on Social Network</h1>
            </div>
            <div className='flex flex-row flex-grow flex-wrap pt-4 space-x-6 sm:space-x-8 md:space-x-10 items-center text-center'>
              {
                SocialIconsArray.map((_,i) => (
                  <div key={i}>
                    <SocialBtn socialName={_[0]} socialLink={_[1]} />
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>

      <footer className='flex justify-center items-center snap-end text-center'>
        <div>
          <Link target='_blank' href='https://github.com/limjunseok0929/limjunseok' className='hover:underline text-xs sm:text-sm md:text-base'>
            Made With ❤️
          </Link>
          <div className='flex items-center space-x-2'>
            <h1 className='text-xs sm:text-sm md:text-base'>Copyright &copy; {date.getFullYear()}, Junseok Lim. All Rights Reserved.</h1>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home