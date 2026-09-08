import Link from 'next/link'
import React from 'react'

export const HeroSection = () => {
    return (
        <section className='w-svw h-svh flex flex-col justify-center items-center heroBackground'>
            <h1 className='text-5xl font-bold tracking-widest'>TATTOOMI</h1>
            <h2 className='text-5xl font-bold tracking-widest mt-2'>Tattoo Studio</h2>
            <Link href="#portfolio" className='mt-10 border-2 border-rose-500 px-10 py-3 hover:bg-rose-600 transition-colors duration-150 ease-out'>see more</Link>
        </section>
    )
}
