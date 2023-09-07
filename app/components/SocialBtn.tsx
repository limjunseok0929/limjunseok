import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

export type SocialBtnType = {
    socialName: string;
    socialLink: string;
}

const SocialBtn: FC<SocialBtnType> = (props) => {
    return (
        <Link href={props.socialLink} target='_blank'>
            <div className='w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white rounded-full shadow-md flex items-center justify-center'>
                <div className='p-3 sm:p-3 md:p-4 z-0'>
                    <Image
                        src={`/img/socials/${props.socialName}.png`}
                        alt={`${props.socialName}`}
                        className='rounded-full'
                        width={100}
                        height={100}
                    />
                </div>
            </div>
            <h1 className='thin text-xs sm:text-sm md:text-base'>{props.socialName[0].toUpperCase() + props.socialName.slice(1,props.socialName.length)}</h1>
        </Link>
    )
}

export default SocialBtn