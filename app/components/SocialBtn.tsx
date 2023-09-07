import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

export type SocialBtnType = {
    name: string;
    link: string;
}

const SocialBtn: FC<SocialBtnType> = (props) => {
    return (
        <Link href={props.link} target='_blank' className='flex flex-col items-center space-y-1'>
            <div className='w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white rounded-full shadow-md flex items-center justify-center'>
                <div className='p-3 sm:p-3 md:p-4 z-0'>
                    <Image
                        src={`/img/socials/${props.name}.png`}
                        alt={`${props.name}`}
                        // className='rounded-full'
                        width={100}
                        height={100}
                    />
                </div>
            </div>
            <h1 className='thin text-xs sm:text-sm md:text-base'>{props.name.toUpperCase()}</h1>
        </Link>
    )
}

export default SocialBtn