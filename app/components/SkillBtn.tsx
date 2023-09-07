import Image from 'next/image'
import { FC } from 'react'

type SkillBtnType = {
    skillName: string;
}

const SkillBtn: FC<SkillBtnType> = (props) => {
    return (
        <div className='flex flex-col items-center space-y-1'>
            <div className='w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white rounded-full shadow-md flex items-center justify-center'>
                <div className='p-3 md:p-4 z-0'>
                    <Image
                        src={`/img/skills/${props.skillName.replaceAll(' ', '')}.png`}
                        alt={`${props.skillName}`}
                        width={100}
                        height={100}
                        className='w-20'
                    />
                </div>
            </div>
            <h1 className='thin text-xs sm:text-sm md:text-base font-medium'>{props.skillName.toUpperCase()}</h1>
        </div>
    )
}

export default SkillBtn