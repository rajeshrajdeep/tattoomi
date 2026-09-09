// components/pagesections/AddressSection.tsx

import { ContactForm } from '../forms/ContactForm';

export const AddressSection = () => {
    return (
        <section id="contact" className='flex flex-col sm:flex-row sm:items-start justify-between max-w-5xl mx-auto items-center gap-10 py-15 px-6'>
            <div className='flex flex-col items-center sm:items-start gap-6 text-center sm:text-left'>
                <h2 className='text-4xl italic tracking-widest text-rose-500'>Find us in GK2</h2>
                <address className='text-xl not-italic'>
                    <p>3rd Floor, M-10, M Block Market</p>
                    <p>Greater Kailash 2, New Delhi - 110048</p>
                </address>

                <h2 className='text-4xl italic tracking-widest text-rose-500'>information</h2>
                <div className='flex flex-col items-center sm:items-start gap-1'>
                    <a href="mailto:tattoomistudio@gmail.com" className='italic text-xl hover:underline'>tattoomistudio@gmail.com</a>
                    <a href="tel:+918218822812" className='italic text-xl hover:underline'>(+91) 821 882 2812</a>
                </div>
            </div>
            <ContactForm />
        </section>
    )
}