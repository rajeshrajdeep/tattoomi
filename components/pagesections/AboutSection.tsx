// components/pagesections/AboutSection.tsx

import Image from 'next/image'

export const AboutSection = () => {
    return (
        <section id='about' className='px-5 pt-10 pb-15 mt-5 flex flex-col items-center gap-5 max-w-5xl mx-auto border-b relative'>
            <p className='text-5xl sm:text-8xl font-bold tracking-widest absolute top-0 left-4 opacity-40 text-rose-500'>about</p>

            <div className='w-full flex flex-col sm:flex-row sm:items-start sm:justify-between sm:gap-10 sm:mt-16'>
                <div className='flex flex-col items-center sm:items-start gap-5 sm:max-w-md'>
                    <h2 className='text-2xl italic font-bold'>
                        about us
                    </h2>

                    <p className='text-4xl font-bold text-center sm:text-left'>
                        Delhi&apos;s trusted tattoo studio in Greater Kailash 2.
                    </p>
                </div>

                <div className='flex flex-col gap-5 sm:max-w-md sm:mt-2'>
                    <p className='text-xl font-bold text-center sm:text-left'>
                        TATTOOMI is a tattoo and piercing studio in M Block Market, GK2 — built on clean linework, custom designs, and safe practices.
                    </p>

                    <p className='text-sm font-light opacity-80 text-center sm:text-left'>
                        From fine line and minimalist tattoos to bold custom pieces and piercings, our artists work closely with every client to bring their vision to life. Every session follows strict hygiene standards, using sterile, single-use needles and professional-grade equipment — so you leave with great art and complete peace of mind.
                    </p>
                </div>
            </div>

            <div className='w-full flex flex-col sm:flex-row sm:items-center sm:gap-10 sm:mt-10'>
                <Image
                    width={600}
                    height={600}
                    src="/aboutimage.jpg"
                    alt="Tattoo artist at work inside TATTOOMI studio, Greater Kailash 2"
                    className='sm:flex-1'
                />

                <div className='sm:flex-1 sm:flex sm:flex-col sm:gap-4'>
                    <blockquote className='text-xl text-center sm:text-left font-semibold'>
                        &quot;Every tattoo tells a story — our job is to make sure yours is told right.&quot;
                    </blockquote>
                </div>
            </div>

            <div className='flex flex-col sm:flex-row justify-center items-center sm:items-start gap-15 sm:gap-10 mt-10'>
                <div className='flex flex-col justify-center items-center gap-4 text-center sm:max-w-xs'>
                    <Image width={50} height={50} src="/pencilicon.jpg" alt="Custom tattoo design process" className='rounded-full' />
                    <h3 className='text-2xl font-bold'>Design</h3>
                    <p className='text-md opacity-75'>We start with a one-on-one consultation to sketch a design that&apos;s uniquely yours, refined until you&apos;re fully happy with it.</p>
                </div>
                <div className='flex flex-col justify-center items-center gap-4 text-center sm:max-w-xs'>
                    <Image width={50} height={50} src="/machine.jpg" alt="Tattooing process at TATTOOMI studio" className='rounded-full' />
                    <h3 className='text-2xl font-bold'>Tattoo</h3>
                    <p className='text-md opacity-75'>Our artists bring the design to life with precision and care, using sterile equipment in a clean, comfortable studio.</p>
                </div>
                <div className='flex flex-col justify-center items-center gap-4 text-center sm:max-w-xs'>
                    <Image width={50} height={50} src="/aftercare.jpg" alt="Tattoo aftercare guidance" className='rounded-full' />
                    <h3 className='text-2xl font-bold'>Aftercare</h3>
                    <p className='text-md opacity-75'>We guide you through healing with clear aftercare instructions, so your tattoo stays vibrant for years to come.</p>
                </div>
            </div>
        </section>
    )
}