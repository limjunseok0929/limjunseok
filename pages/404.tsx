import { NextPage } from "next"

const ErrorPage: NextPage = () => {
    return (
        <div className='snap-center grid content-center h-screen'>
            <div className='flex flex-col justify-center space-y-1 absolute h-4/5 w-full'>
                <div className='flex flex-col self-center items-center w-11/12 md:w-5/6 lg:w-4/5'>
                    <div className='space-y-2 text-center'>
                        <h1 className='text-9xl text-transparent bg-clip-text from-[#7194FF] to-[#A855F7] bg-gradient-to-r bold'>404</h1>
                        <p className='text-6xl bold'>Not Found</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ErrorPage