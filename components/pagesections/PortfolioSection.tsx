// components/pagesections/PortfolioSection.tsx

import Image from 'next/image'

const works = [
  { src: '/1.jpeg', category: 'Tattoo', title: 'Portrait Tattoo', alt: 'Fine line lettering tattoo on neck by TATTOOMI artist' },
  { src: '/2.jpeg', category: 'Tattoo', title: 'Fineline Tattoo', alt: 'Custom tattoo artwork by TATTOOMI, Greater Kailash 2' },
  { src: '/3.jpeg', category: 'Piercing', title: 'Hands Joye', alt: 'Piercing work by TATTOOMI studio' },
  { src: '/4.jpeg', category: 'Tattoo', title: 'Custom Tattoos', alt: 'Custom tattoo design by TATTOOMI, GK2' },
]

export const PortfolioSection = () => {
  return (
    <section id='portfolio' className='flex flex-col items-center gap-5 py-10 bg-black text-white'>
      <div className='w-full flex flex-col items-center gap-5 sm:flex-row sm:items-center sm:justify-between sm:px-16 sm:gap-0 sm:relative'>
        <div className='flex flex-col items-center sm:items-start gap-2'>
          <p className='italic text-rose-400 tracking-widest'>latest works</p>
          <h2 className='text-3xl font-bold text-center sm:text-left px-6 sm:px-0'>take a look around our portfolio</h2>
        </div>

        <button className='bg-amber-600 hover:bg-amber-700 transition-colors text-white font-semibold px-8 py-3 rounded-md sm:order-0'>
          View More
        </button>

        <p className='text-6xl sm:text-9xl font-extrabold tracking-widest opacity-20 mt-4 sm:mt-0 sm:absolute sm:right-0 sm:top-1/2 sm:-translate-y-1/2 sm:-z-10'>
          works
        </p>
      </div>

      <div className='w-full flex flex-col sm:grid sm:grid-cols-3'>
        {works.map((work, index) => (
          <div key={index} className='relative w-full aspect-3/4'>
            <Image
              src={work.src}
              alt={work.alt}
              fill
              className='object-cover'
            />
            <div className='absolute bottom-4 left-4 right-4 flex items-center justify-between bg-white/95 px-4 py-3 rounded-md'>
              <div>
                <p className='text-rose-500 font-semibold text-sm'>{work.category}</p>
                <p className='text-black font-bold text-lg'>{work.title}</p>
              </div>
              <button
                aria-label={`View ${work.title} details`}
                className='border border-black p-2 hover:bg-black hover:text-white transition-colors'
              >
                →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}