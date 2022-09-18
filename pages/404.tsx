import { NextPage } from "next"

const ErrorPage: NextPage = () => {
    return (
        <div className='flex justify-center items-center text-center'>
            <div>
                <h1 className='text-7xl sm:text-9xl font-black'>404</h1>
                <p className='text-3xl sm:text-5xl font-black'>Page Not Found</p>
            </div>
        </div>
    )
}

export default ErrorPage