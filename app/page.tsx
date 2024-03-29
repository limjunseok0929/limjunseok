'use client'
import type { NextPage } from 'next';
import Head from 'next/head';
import SocialBtn from './components/SocialBtn';
import { useEffect, useState } from 'react';
import Skills from './components/SkillsPage';

const skills = [
  [
    'html',
    'css',
    'javascript',
    'typescript',
    'react',
    'next.js',
    'tailwind css'
  ],
  [
    'node.js',
    'prisma',
    'mongo db',
    'mysql',
  ],
  [
    'visual studio code',
    'figma'
  ]
]

const [prontend, backend, tools] = skills

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
    }, 2000)
    return () => clearInterval(hellointerval)
  }, [helloI])

  return (
    <div>
      <Head>
        <title>Junseok Lim</title>
      </Head>

      <div className='grid h-screen'>
        <div className='flex flex-col justify-center pt-20 space-y-1 absolute h-4/5 w-full'>
          <div className='flex flex-col self-center w-11/12 md:w-5/6 lg:w-4/5'>
            <div className='space-y-20 md:space-y-10'>
              <div className='space-y-3'>
                <h1 className='font-bold text-3xl sm:text-4xl md:text-5xl'>{helloText}</h1>
                <div className='flex justify-between'>
                  <h1 className='text-5xl sm:text-6xl md:text-7xl font-bold'><span className='text-5xl sm:text-6xl md:text-7xl text-transparent bg-clip-text from-[#7194FF] to-[#A855F7] bg-gradient-to-r font-black'>임준석</span>입니다.</h1>
                  <div><h1><span className='hidden md:block text-9xl text-transparent bg-clip-text from-[#7194FF] to-[#A855F7] bg-gradient-to-r font-black'>{'</>'}</span></h1></div>
                </div>
              </div>
              <div className='px-2'>
                <div className='text-base sm:text-lg md:text-2xl'>
                  {date.getFullYear() - 2008}살 (만 {age}살) 개발자 임준석이라고 합니다.
                  <div className='p-0.5' />
                  주로 웹페이지 개발을 하고 있습니다.
                  <div className='p-0.5' />
                  풀스택 개발자와 대기업 합격을 꿈꾸며 꾸준히 개발하고 성장하고 있는 개발자입니다.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='grid h-screen'>
        <div className='flex flex-col justify-center pt-20 space-y-1 absolute h-4/5 w-full'>
          <div className='flex flex-col self-center w-11/12 md:w-5/6 lg:w-4/5 space-y-16'>
            <div className='flex space-x-1 items-end'>
              <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold'>사용 가능한 <span className='text-4xl sm:text-5xl md:text-6xl text-transparent bg-clip-text from-[#7194FF] to-[#A855F7] bg-gradient-to-r font-black'>스킬</span></h1>
              <h1><span className='text-lg sm:text-xl md:text-2xl text-transparent bg-clip-text from-[#7194FF] to-[#A855F7] bg-gradient-to-r font-black'>SKILLS</span></h1>
            </div>
            <div className='pl-1 space-y-5'>
              <Skills array={prontend} section='PRONTEND' />
              <Skills array={backend} section='BACKEND' />
              <Skills array={tools} section='TOOLS' />
            </div>
          </div>
        </div>
      </div>

      <div className='grid h-screen'>
        <div className='flex flex-col justify-center pt-20 space-y-1 absolute h-4/5 w-full'>
          <div className='flex flex-col self-center w-11/12 md:w-5/6 lg:w-4/5 space-y-20'>
            <div className='flex space-x-1 items-end'>
              <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold'>만든 <span className='text-4xl sm:text-5xl md:text-6xl text-transparent bg-clip-text from-[#7194FF] to-[#A855F7] bg-gradient-to-r font-black'>프로젝트</span></h1>
              <h1><span className='text-lg sm:text-xl md:text-2xl text-transparent bg-clip-text from-[#7194FF] to-[#A855F7] bg-gradient-to-r font-black'>PROJECTS</span></h1>
            </div>
            <div className='pl-1'>
              <p className='text-base sm:text-lg md:text-xl font-medium'>
                아직 완성된 프로젝트가 없어요.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='grid h-screen'>
        <div className='flex flex-col justify-center pt-20 space-y-1 absolute h-4/5 w-full'>
          <div className='flex flex-col self-center w-11/12 md:w-5/6 lg:w-4/5 space-y-14'>
            <div className='flex space-x-1 items-end'>
              <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold'>사용중인 <span className='text-4xl sm:text-5xl md:text-6xl text-transparent bg-clip-text from-[#7194FF] to-[#A855F7] bg-gradient-to-r font-black'>소셜 미디어</span></h1>
              <h1><span className='text-lg sm:text-xl md:text-2xl text-transparent bg-clip-text from-[#7194FF] to-[#A855F7] bg-gradient-to-r font-black'>Socials</span></h1>
            </div>
            <div className='flex flex-row flex-grow flex-wrap pt-4 space-x-6 sm:space-x-8 md:space-x-10 items-center text-center'>
              {
                SocialIconsArray.map(([name, link],i) => (
                  <div key={i}>
                    <SocialBtn name={name} link={link} />
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home