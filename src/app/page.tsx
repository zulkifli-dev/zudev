import Button from '@/components/button/button'
import ButtonIcon from '@/components/button/button-icon'
import Navbar from '@/components/layout/navbar'
import SectionAboutMe from '@/components/section/section-about-me'
import SectionContact from '@/components/section/section-contact'
import SectionProject from '@/components/section/section-project'
import SectionService from '@/components/section/section-service'
import getYear from '@/utils/getYear'
import Image from 'next/image'
import React from 'react'

function Page() {
  return (
    <div className='max-w-7xl mx-auto p-4 flex flex-col gap-4 h-screen'>
      <header>
        <h1 className='text-4xl'>DEV.</h1>
      </header>
      <div className='grid grid-cols-3 space-x-4 h-full overflow-hidden'>
        <aside className='w-full flex flex-col rounded-2xl overflow-hidden  max-h-[704px] relative'>
          <Image alt='photo-profile' src='/profile.png' width={180} height={180} className=' border-[5px] border-white rounded-[50px] bg-black absolute left-0 right-0 mx-auto' />
          <div className='bg-secondary flex flex-col w-full justify-between items-center h-full rounded-2xl p-5 mt-[90px] pt-[110px]'>
            <div className='flex flex-col gap-2'>
              <h3 className='text-3xl leading-4'>Zulkifli, S.Kom.</h3>
              <h4 className='font-light text-white/90 text-xl'>Fullstack Developer</h4>
              <div className='flex gap-2 justify-center'>
                <ButtonIcon href='' alt='github' src={'/svg/github.svg'} />
                <ButtonIcon href='' alt='linkedin' src={'/svg/linkedin.svg'} />
              </div>
            </div>
            <div className=' w-full bg-gradient-to-bl from-blue-1/50 to-blue-2/50  rounded-md p-4 flex flex-col gap-y-2'>
              <div className="flex z-20 gap-2">
                <div className='flex items-center justify-center'>
                  <ButtonIcon href='' alt='telp' src={'/svg/phone.svg'} />
                </div>
                <div>
                  <h5 className='text-sm text-white/90'>Telepon</h5>
                  <p>085955126468</p>
                </div>
              </div>
              <hr className=' opacity-50' />
              <div className="flex z-20 gap-2">
                <div className='flex items-center justify-center'>
                  <ButtonIcon href='' alt='telp' src={'/svg/location.svg'} />
                </div>
                <div>
                  <h5 className='text-sm text-white/90'>Location</h5>
                  <p>Makassar, Indonesia</p>
                </div>
              </div>
              <hr className=' opacity-50' />
              <div className="flex z-20 gap-2">
                <div className='flex items-center justify-center'>
                  <ButtonIcon href='' alt='telp' src={'/svg/email.svg'} />
                </div>
                <div>
                  <h5 className='text-sm text-white/90'>Email</h5>
                  <p>kifliaapp@gmail.com</p>
                </div>
              </div>
              <hr className=' opacity-50' />
              <div className="flex z-20 gap-2">
                <div className='flex items-center justify-center'>
                  <ButtonIcon href='' alt='telp' src={'/svg/date.svg'} />
                </div>
                <div>
                  <h5 className='text-sm text-white/90'>Age</h5>
                  <p>{getYear({ startDate: new Date('1999-01-02'), endDate: new Date() })} tahun</p>
                </div>
              </div>
            </div>
            <div className='flex gap-4'>
              <Button href='#contact' className='min-w-[120px]'>Contact Me</Button>
            </div>
          </div>
        </aside>
        <div className='col-span-2 flex flex-col gap-y-4 h-full overflow-y-scroll rounded-2xl relative scroll-smooth hide-scrollbar '>
          <Navbar />
          <main className='z-10 gap-y-4 flex flex-col bg-black'>
            <SectionAboutMe />
            <SectionService />
            <SectionProject />
            <SectionContact />
          </main>
        </div>


      </div >
    </div >
  )
}

export default Page