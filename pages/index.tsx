import type { NextPage } from 'next'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import Head from 'next/head'
import { CareerText, Description, Header, MainText, SkillBtn, SocialsBtn } from '../components/components'
import Link from 'next/link'

const skillsNameArray = [
  'html',
  'css',
  'javascript',
  'typescript',
  'python',
  'golang',
  'node.js',
  'react',
  'next.js',
  'electron',
  'prisma',
  'tailwindcss'
]

const socialLinksObject = {
  github: {
    name: 'github',
    src: 'https://github.com/limjunseok0929',
    id: 'limjunseok0929',
  },
  npm: {
    name: 'npm',
    src: 'https://www.npmjs.com/~limjunseok',
    id: 'limjunseok',
  },
  stackoverflow: {
    name: 'stackoverflow',
    src: 'https://stackoverflow.com/users/18835395/limjunseok',
    id: 'limjunseok',
  },
  solved: {
    name: 'solvedac',
    src: 'https://solved.ac/profile/limjunseok_dev',
    id: 'limjunseok_dev',
  }
}

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Junseok Lim</title>
      </Head>
      <AnimatePresence>
        <Header />
        <div className="snap-center grid content-center h-screen" id='introduce'>
          <div className="flex flex-col justify-center space-y-1 absolute h-4/5 w-full">
            <div className="flex flex-col self-center items-center w-11/12 md:w-5/6 lg:w-4/5">
              <motion.div
                className="flex items-center"
                initial={{ y: -50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  type: 'spring',
                  delay: 0.4,
                  stiffness: 250,
                  damping: 100,
                  mass: 1.8
                }}
              >
                <div className='w-10 h-10 sm:w-16 sm:h-16'>
                  <Image src='/img/logo.png' alt='profile' width={100} height={100} />
                </div>
                <p className="text-2xl sm:text-4xl thin">Junseok Lim</p>
              </motion.div>
              <motion.div
                initial={{ x: -40, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  type: 'spring',
                  delay: 0.2,
                  stiffness: 250,
                  damping: 100,
                  mass: 1.8
                }}
                className='items-center flex'
              >
                <h1 className='text-3xl sm:text-5xl bg-black text-white font-black my-2'>A Student Developer</h1>
              </motion.div>
              <motion.div
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  type: 'spring',
                  delay: 0.5,
                  stiffness: 250,
                  damping: 100,
                  mass: 1.8
                }}
                className="text-sm sm:text-lg"
              >
                개발자가 되고 싶은 {
                  new Date().getFullYear()-2009+1
                }살 입니다 😎
              </motion.div>
            </div>
          </div>
        </div>
        <div className="snap-center grid content-center h-screen" id='skills'>
          <div className="flex flex-row flex-grow flex-wrap justify-center pt-4 text-center">
            <div>
              <MainText text='Skills 💪' />
              <Description text='제가 코딩할 때 사용하는 것들이에요' />
              <div className='flex flex-row flex-grow flex-wrap justify-center pt-4 space-x-5 space-y-5 items-center'>
                {
                  skillsNameArray.map((_,i)=><SkillBtn src={`/img/skills/${_}.png`} key={i} name={_.toUpperCase()} />)
                }
              </div>
            </div>
          </div>
        </div>
        <div className="snap-center grid content-center h-screen" id='projects'>
          <div className="flex flex-row flex-grow flex-wrap justify-center md:space-x-8 pt-24">
            <div className='text-center'>
              <MainText text='Projects 💡' />
              <Description text='제가 만든 프로젝트들이에요' />
              <motion.div
                initial="hidden"
                whileInView="visible"
                transition={{
                  delay: 0.1,
                  duration: 1
                }}
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: 80 }
                }}
                className='thin my-10'
              >
                아직 만든 프로젝트가 없어요.
              </motion.div>
            </div>
          </div>
        </div>
        <div className="snap-center grid content-center h-screen" id='career'>
          <div className="flex flex-row flex-grow flex-wrap justify-center md:space-x-8 pt-24">
            <div className='text-center'>
              <MainText text='Career 🎓' />
              <Description text='제 경력들이에요' />
              <div className='mt-3'>
                {
                  [
                    '2022년 SSF(선린인터넷고등학교 소프트웨어 나눔축제) 참가'
                  ].map((_,i)=><CareerText text={_} key={i} />)
                }
              </div>
            </div>
          </div>
        </div>
        <div className='snap-center h-screen grid content-center' id='socials'>
          <div className='text-center'>
            <MainText text='Socials 📱' />
            <Description text='저를 인터넷에서 만나보세요' />
            <div className='flex flex-row flex-grow flex-wrap justify-center pt-4 space-x-5 space-y-5 items-center'>
              {Object.entries(socialLinksObject).map(([_,k],i)=><SocialsBtn name={k.name} key={i} link={k.src} id={k.id} />)}
            </div>
          </div>
        </div>
        <footer className='snap-end flex justify-center'>
          <Link href='https://github.com/limjunseok0929/limjunseok'>
            <a target='_blank' className='flex space-x-2'>
              <div className='w-6'>
                <Image src='/img/socials/github.svg' alt='repo link' width='100%' height='100%' />
              </div>
              <span className='thin'>REPO</span>
            </a>
          </Link>
        </footer>
      </AnimatePresence>
    </>
  )
}

export default Home