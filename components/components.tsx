import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

type TextType = { text: string; key?: number }
type BtnType = {
    src?: string;
    key: number;
    name: string;
    link?: string;
    id?: string;
}

export const Header = () => {
    const [openMenu, setOpenMenu] = useState(false)
    return (
        <>
            <header className='fixed w-full h-16 bg-white shadow-md z-50 py-5 flex items-center justify-center'>
                <div className='flex justify-start items-center sm:hidden'>
                {
                    !openMenu
                    ?
                    <svg
                        className="w-6 h-6 fill-gray-500 cursor-pointer hover:bg-gray-200 transition-colors rounded-md"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        onClick={() => setOpenMenu(!openMenu)}
                    >
                    <path
                        fillRule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clipRule="evenodd"
                    />
                    </svg>
                    :
                    <svg
                        className="w-6 h-6 fill-gray-500 cursor-pointer hover:bg-gray-200 transition-colors rounded-md"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        onClick={() => setOpenMenu(!openMenu)}
                    >
                    <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    />
                    </svg>
                }
                </div>
                <nav className='hidden sm:block'>
                    <div className='flex justify-center h-12 py-3 items-center space-x-10'>
                        <div className='w-10'>
                        <Image src='/img/logo.png' alt='logo' width='100%' height='100%' />
                        </div>
                        <div className='border-r border-gray-400 h-full' />
                        <div className='flex space-x-10'>
                        {
                            ['Introduce','Skills','Projects','Career','Socials'].map((_,i)=><Link key={i} href={`#${_.toLowerCase()}`}><a>{_}</a></Link>)
                        }
                        </div>              
                    </div>
                    </nav>
                    <nav className='block sm:hidden'>
                    <div className='h-16 py-5 flex items-center justify-center space-x-5'>
                        <div className='w-10'>
                        <Image src='/img/logo.png' alt='logo' width='100%' height='100%' />
                        </div>
                    </div>
                </nav>
            </header>
            <div className={`fixed w-full bg-white z-40 shadow-md h-2/5 pt-20 pl-12 space-y-5 ${openMenu?'block':'hidden'} h-16`}>
                {
                    ['Introduce','Skills','Projects','Career','Socials'].map((_,i)=><div key={i}><Link href={`#${_.toLowerCase()}`}><a>{_}</a></Link></div>)
                }
            </div>
        </>
    )
}

export const MainText = ({ text }: TextType) => <motion.div
    initial="hidden"
    whileInView="visible"
    transition={{
        delay: 0.2,
        duration: 1
    }}
    variants={{
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: -60 }
    }}
><h1 className='text-2xl sm:text-3xl thin'>{text}</h1></motion.div>

export const Description = ({ text }: TextType) => <motion.div
    initial={{ x: -40, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    transition={{
    type: 'spring',
    delay: 0.5,
    stiffness: 320,
    damping: 100,
    mass: 1.8
    }}
><span className='text-lg sm:text-xl thin'>{text}</span></motion.div>

export const SkillBtn = ({ src, key, name }: BtnType) => {
    return (
        <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
            type: 'spring',
            delay: 0.5,
            stiffness: 250,
            damping: 100,
            mass: 1.8
            }}
            key={key}
            className='flex bg-white shadow-md items-center space-x-1 px-5 rounded-lg cursor-pointer h-12 sm:h-16'
        >
            <div className='w-6 sm:w-10'>
                <Image src={`${src}`} alt={`skill-btn-${name}`} width="100%" height="100%" />
            </div>
            <span className='thin text-sm sm:text-base'>{name}</span>
        </motion.div>
    )
}

export const CareerText = ({ text, key }: TextType) => <motion.div
    initial={{ y: 30, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{
    type: 'spring',
    delay: 0.5,
    stiffness: 250,
    damping: 100,
    mass: 1.8
    }}
    key={key}
    className='flex space-x-5 items-center'
>
    <span>·</span>
    <span className='text-sm sm:text-base'>{text}</span>
</motion.div>

export const SocialsBtn = ({ key, name, link, id }: BtnType) => {
    return (
        <Link href={`${link}`}>
            <a target='_blank' title={name}>
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{
                    type: 'spring',
                    delay: 0.5,
                    stiffness: 250,
                    damping: 100,
                    mass: 1.8
                    }}
                    key={key}
                    className='flex bg-white shadow-md items-center px-5 rounded-lg h-12 sm:h-16 space-x-3'
                >
                    <div className='w-6 sm:w-8'>
                        <Image src={`/img/socials/${name}.svg`} alt={`socials-btn-${name}`} width="100%" height="100%" />
                    </div>
                    <span className='thin text-sm sm:text-base'>{id}</span>
                </motion.div>
            </a>
        </Link>
    )
}