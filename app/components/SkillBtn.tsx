import Image from 'next/image'
import { FC } from 'react'
import { SkillBtnType } from './types'

const SkillBtn: FC<SkillBtnType> = (props) => {
    return (
        <div>
            <div className='w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white rounded-full shadow-md flex items-center justify-center'>
                <div className='p-3 sm:p-3 md:p-4 z-0'>
                    <Image src={`/img/skills/${props.skillName}.png`} alt={`${props.skillName}`} width={100} height={100} />
                </div>
            </div>
            <h1 className='thin text-xs sm:text-sm md:text-base'>{props.skillName[0].toUpperCase() + props.skillName.slice(1,props.skillName.length)}</h1>
        </div>
    )
}

export default SkillBtn