// components/pagesections/HeroSection.tsx
import Link from 'next/link'

export const HeroSection = () => {
    return (
        <section className='w-svw h-svh flex flex-col justify-center items-center heroBackground'>
            <h1 className='text-5xl font-bold tracking-widest text-center'>TATTOOMI tattoo studio</h1>
            <p className='text-xl mt-2'>Greater Kailash 2, M Block Market, Delhi</p>
            <Link href="#portfolio" className='mt-10 border-2 border-rose-500 px-10 py-3 hover:bg-rose-600 transition-colors duration-150 ease-out'>see more</Link>
        </section>
    )
}
