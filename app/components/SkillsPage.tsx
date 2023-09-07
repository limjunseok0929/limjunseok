import { FC, Key } from 'react'
import SkillBtn from './SkillBtn'

interface SkillsType {
    array: string[],
    section: string,
    key: Key
}

const Skills: FC<SkillsType> = (props) => {
    return (
        <div className='space-y-5'>
            <h1 className='text-4xl font-black'>{props.section}</h1>
            <div className='flex space-x-10'>
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