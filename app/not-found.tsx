'use client'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Error = () => {
    const nav = usePathname()
    return (
        <div className='grid h-screen'>
            <div className='flex flex-col justify-center pt-20 space-y-1 absolute h-4/5 w-full'>
                <div className='flex flex-col self-center w-11/12 md:w-5/6 lg:w-4/5 space-y-20'>
                    <div>
                        <h1 className='text-7xl text-red-500 font-bold'>404</h1>
                        <h1 className='text-5xl font-bold'>앗, 여기가 아닌가봐요.</h1>
                    </div>
                    <div className='space-y-3'>
                        <div className='flex items-center space-x-3 text-xl'>
                            <span className='py-1 px-2 bg-gray-200 rounded underline text-blue-600'>{`https://limjunseok.vercel.app${nav}`}</span>
                            <div>은 존재하지 않는 주소에요.</div>
                        </div>
                        <button className='hover:opacity-60'>
                            <Link href='/' className='flex items-center space-x-2'>
                                <FontAwesomeIcon icon={faHome} className='w-6 text-4xl' />
                                <span className='text-xl'>홈으로 돌아가기</span>
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Error