import { FC, Key } from 'react'
import SkillBtn from './SkillBtn'

interface SkillsType {
    array: string[],
    section: string,
}

const Skills: FC<SkillsType> = (props) => {
    return (
        <div className='space-y-3'>
            <h1 className='text-xl sm:text-2xl md:text-3xl font-black'>{props.section}</h1>
            <div className='flex flex-row flex-grow flex-wrap pt-4 space-x-6 sm:space-x-8 md:space-x-10 items-center'>
            {
                props.array.map((name, i) => (
                    <div key={i}>
                        <SkillBtn skillName={name} />
                    </div>
                ))
            }
            </div>
        </div>
    )
}

export default Skills