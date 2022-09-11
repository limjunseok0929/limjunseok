import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link';

type TextType = { text: string; key?: number }
type BtnType = {
    src?: string;
    key: number;
    name: string;
    link?: string;
    id?: string;
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
><h1 className='text-3xl thin'>{text}</h1></motion.div>

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
><span className='text-xl thin'>{text}</span></motion.div>

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
            className='flex bg-white shadow-md items-center space-x-1 px-5 rounded-lg cursor-pointer h-16'
        >
            <div className='w-10'>
                <Image src={`${src}`} alt={`skill-btn-${name}`} width="100%" height="100%" />
            </div>
            <span className='thin'>{name}</span>
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
    <div>{text}</div>
</motion.div>

export const SocialsBtn = ({ key, name, link, id }: BtnType) => {
    return (
        <Link href={`${link}`}>
            <a about='_blank' title={name}>
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
                    className='flex bg-white shadow-md items-center px-5 rounded-lg h-16 space-x-3'
                >
                    <div className='w-8'>
                        <Image src={`/img/socials/${name}.svg`} alt={`socials-btn-${name}`} width="100%" height="100%" />
                    </div>
                    <span className='thin'>{id}</span>
                </motion.div>
            </a>
        </Link>
    )
}