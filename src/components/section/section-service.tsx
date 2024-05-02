import React from 'react'
import HeadingSection from '../heading/heading-section'
import Image from 'next/image'

function SectionService() {
    return (
        <section id='service' className='bg-secondary rounded-2xl px-5 py-4 flex flex-col gap-3 z-10'>
            <div className='flex justify-between items-start mb-4 py-4 sticky -top-1  bg-secondary'>
                <HeadingSection>Layanan Saya</HeadingSection>
            </div>
            <div className='grid grid-cols-2 gap-3'>
                <div className='bg-gradient-to-bl from-blue-1/50 to-blue-2/50 rounded-lg p-5 flex flex-col gap-2 items-center'>
                    <Image alt='web' src={'/svg/web.svg'} width={64} height={64} />
                    <h4 className='text-xl font-semibold'>Pembuatan Website</h4>
                    <ul className='list-disc text-white/80 w-full px-4'>
                        <li>Website statis dan dinamis</li>
                        <li>Landing page & website e-commerce</li>
                        <li>Responsive design dan SEO-friendly.</li>
                    </ul>
                </div>
                <div className='bg-gradient-to-bl from-blue-1/50 to-blue-2/50 rounded-lg p-5 flex flex-col gap-2 items-center'>
                    <Image alt='app' src={'/svg/app.svg'} width={64} height={64} />
                    <h4 className='text-xl font-semibold'>Pembuatan Aplikasi</h4>
                    <ul className='list-disc text-white/80 w-full px-4'>
                        <li>Aplikasi native dan hybrid.</li>
                        <li>Aplikasi Android dan iOS.</li>
                        <li>Aplikasi desktop</li>
                    </ul>
                </div>
            </div>

            <p className='text-white/80 text-base  font-light text-center mt-4'>
                Saya menawarkan fleksibilitas dalam bekerja sama dengan klien, baik secara pribadi maupun dengan tim.
            </p>
        </section>
    )
}

export default SectionService