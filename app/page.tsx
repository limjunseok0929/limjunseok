'use client'
import type { NextPage } from 'next'
import Head from 'next/head'

const CAREER_LIST = [
  {
    content: '웹 개발자 / 디자이너',
    date: null
  },
  {
    content: 'FEARNOT 피어나',
    date: '(2023.11.01 ~ )'
  },
]

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Junseok Lim</title>
      </Head>
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
              <div className='space-y-3'>
                <h1 className='text-3xl font-medium'>임준석 | Lim Junseok</h1>
                <ul className='font-regular text-xl'>
                  {
                    CAREER_LIST.map(({content, date}, i) => (
                      <li key={i} className='space-x-2 before:content-["-_"]'>
                        <span>{content}</span>
                        <span>{date != null && date}</span>
                      </li>
                    ))
                  }
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home