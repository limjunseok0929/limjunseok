import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import SkillBtn from '../components/SkillBtn';
import SocialBtn from '../components/SocialBtn';


const SkillIconsArray = [
  'html',
  'css',
  'javascript',
  'typescript',
  'python',
  'c',
  'c++',
  'go',
  'node.js',
  'react',
  'next.js',
  'electron',
  'prisma',
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
    'https://www.instagram.com/junseok_lim09'
  ],
  [
    'solved.ac',
    'https://solved.ac/profile/dlawnstjr'
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


const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Junseok Lim</title>
      </Head>
      {/* Main */}
      <div className='snap-center grid content-center h-screen'>
        <div className='flex flex-col justify-center space-y-1 absolute h-4/5 w-full'>
          <div className='flex flex-col self-center items-center w-11/12 md:w-5/6 lg:w-4/5'>
            <div className='space-y-2'>
              <h1 className='thin text-2xl sm:text-3xl md:text-4xl'>Junseok Lim</h1>
              <h1 className='text-3xl sm:text-4xl md:text-5xl bold'>A <span className='text-3xl sm:text-4xl md:text-5xl bold text-transparent bg-clip-text from-[#7194FF] to-[#A855F7] bg-gradient-to-r'>Student</span> Developer.</h1>
              <h1 className='thin text-base sm:text-lg md:text-xl'>Korean middle school students who mainly develop with JS and TS</h1>
            </div>
          </div>
        </div>
      </div>
      {/* Skills */}
      <div className='snap-center grid content-center h-screen'>
        <div className='flex flex-col justify-center space-y-1 absolute h-4/5 w-full'>
          <div className='flex flex-col self-center items-center w-11/12 md:w-5/6 lg:w-4/5 space-y-5'>
            <div>
              <h1 className='text-3xl sm:text-4xl md:text-5xl bold'>My <span className='text-3xl sm:text-4xl md:text-5xl text-transparent bg-clip-text from-[#7194FF] to-[#A855F7] bg-gradient-to-r bold'>Skills</span></h1>
              <h1 className='thin text-base sm:text-lg md:text-xl'>What I can use in programming</h1>
            </div>
            <div className='flex flex-row flex-grow flex-wrap justify-center pt-4 space-x-6 sm:space-x-8 md:space-x-10 items-center text-center'>
              {
                SkillIconsArray.map((_,i) => (
                  <div key={i}>
                    <div>
                        <div className='w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white rounded-full shadow-md flex items-center justify-center'>
                            <div className='p-3 sm:p-3 md:p-4 z-0'>
                                <Image src={`/img/skills/${_}.png`} alt={`${_}`} width='100%' height='100%' />
                            </div>
                        </div>
                        <h1 className='thin text-xs sm:text-sm md:text-base'>{_[0].toUpperCase() + _.slice(1,_.length)}</h1>
                    </div>
                </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
      {/* Projects */}
      <div className='snap-center grid content-center h-screen'>
        <div className='flex flex-col justify-center space-y-1 absolute h-4/5 w-full'>
          <div className='flex flex-col self-center items-center w-11/12 md:w-5/6 lg:w-4/5 space-y-5'>
            <div>
              <h1 className='text-3xl sm:text-4xl md:text-5xl bold'>My <span className='text-3xl sm:text-4xl md:text-5xl text-transparent bg-clip-text from-[#7194FF] to-[#A855F7] bg-gradient-to-r bold'>Projects</span></h1>
              <h1 className='thin text-base sm:text-lg md:text-xl'>The projects that I made by programming</h1>
            </div>
            <div className='flex flex-row flex-grow flex-wrap justify-center pt-4 space-x-10 items-center text-center'>
              <p className='text-sm sm:text-base md:text-lg'>
                Not any projects yet.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Socials */}
      <div className='snap-center grid content-center h-screen'>
        <div className='flex flex-col justify-center space-y-1 absolute h-4/5 w-full'>
          <div className='flex flex-col self-center items-center w-11/12 md:w-5/6 lg:w-4/5 space-y-5'>
            <div>
              <h1 className='text-3xl sm:text-4xl md:text-5xl bold'>My <span className='text-3xl sm:text-4xl md:text-5xl text-transparent bg-clip-text from-[#7194FF] to-[#A855F7] bg-gradient-to-r bold'>Socials</span></h1>
              <h1 className='thin text-base sm:text-lg md:text-xl'>You can see me on Social Network</h1>
            </div>
            <div className='flex flex-row flex-grow flex-wrap justify-center pt-4 space-x-6 sm:space-x-8 md:space-x-10 items-center text-center'>
              {
                SocialIconsArray.map((_,i) => (
                  <div key={i}>
                    <Link href={_[1]}>
                        <a target='_blank'>
                            <div className='w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white rounded-full shadow-md flex items-center justify-center'>
                                <div className='p-3 sm:p-3 md:p-4 z-0'>
                                    <Image
                                        src={`/img/socials/${_[0]}.png`}
                                        alt={`${_[0]}`}
                                        className='rounded-full'
                                        width='100%'
                                        height='100%'
                                    />
                                </div>
                            </div>
                            <h1 className='thin text-xs sm:text-sm md:text-base'>{_[0][0].toUpperCase() + _[0].slice(1,_[0].length)}</h1>
                        </a>
                    </Link>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer className='flex justify-center items-center snap-end text-center'>
        <div>
          <Link href='https://github.com/limjunseok0929/limjunseok'>
            <a target='_blank' className='hover:underline text-xs sm:text-sm md:text-base'>Made With ❤️</a>
          </Link>
          <div className='flex items-center space-x-2'>
            <h1 className='text-xs sm:text-sm md:text-base'>&copy; Junseok Lim</h1>
            <div className='w-4 sm:w-5 md:'>
              <Image src='/img/profile-t.png' alt='profile' width='100%' height='100%' />
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home