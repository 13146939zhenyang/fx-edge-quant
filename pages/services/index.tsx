import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { ServicesBanner, Footer } from '@/components'
import { AboutBg } from '@/public'

const services = () => {
  const router = useRouter()
  return (
    <>
      <Head>
        <title>FX-QUANT</title>
        <meta name="description" content="EDGE QUANT FINICIAL TRADING" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.svg" />
      </Head>
      <main className='w-full relative'>
        <div className='w-full h-[80vh] relative' style={{ backgroundImage: `url(${AboutBg.src})`, backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', backgroundSize: 'cover', backgroundPosition: 'top' }}>
          <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 flex justify-center items-center text-white text-center'>
            <ServicesBanner />
          </div>
        </div>
        <div className='w-full bg-[#373737]'>
          <div className='paragraph-container text-white'>
            <h3 className='font-normal text-3xl underline decoration-gray-300 decoration-[1px] decoration-offline underline-offset-[20px] text-center capitalize'>edge quant services</h3>
            <div className='flex flex-row flex-wrap justify-center gap-20'>
              <div className='flex flex-col gap-4 bg-transparent button-shadow pt-4 pb-8 px-4 rounded-lg drop-shadow-lg shadow-lg max-w-[300px] text-white cursor-pointer' onClick={()=>router.push('/services/mda-services')}>
                <div className='text-center capitalize text-lg font-semibold'>M.D.A Services</div>
                <div className='flex flex-col text-center text-sm'>Financial advisers often use MDAs to manage portfolios for their clients.</div>
              </div>
              <div className='flex flex-col gap-4 bg-transparent button-shadow pt-4 pb-8 px-4 rounded-lg drop-shadow-lg shadow-lg max-w-[300px] text-white cursor-pointer' onClick={()=>router.push('/services/financial-advice')}>
                <div className='text-center capitalize text-lg font-semibold'>Financial Advice</div>
                <div className='flex flex-col text-center text-sm'>
                  <span>General financial advice doesn't take into account your personal situation or goals, or how it might affect you personally.</span>
                  <span>Personal financial advice helps to develop a financial plan to reach your financial goals. This covers things like savings, investments, insurance and super and retirement planning.</span>
                </div>
              </div>
              <div className='flex flex-col gap-4 bg-transparent button-shadow pt-4 pb-8 px-4 rounded-lg drop-shadow-lg shadow-lg max-w-[300px] text-white cursor-pointer' onClick={()=>router.push('/services/sustainable-investment')}>
                <div className='text-center capitalize text-lg font-semibold'>sustainable investment</div>
                <div className='flex flex-col text-center text-sm'>Sustainable Investing is the practice of using ESG — environmental, social and governance — objectives, themes, and related considerations as a key driver for selecting investments. Combined with traditional financial analysis, this lens is an inclusive category that contains numerous approaches for pursuing better risk-adjusted returns.</div>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full relative cursor-default text-white' style={{ backgroundImage: `url(${AboutBg.src})`, backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className='footer-container'>
            <div className='w-full flex flex-row justify-center gap-10'>
              <span className='capitalize text-3xl'>get your free initial consultation</span>
              <button className='border-[1px] border-white rounded-sm button-shadow flex items-center justify-center px-4 py-2'>Contact Us</button>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  )
}

export default services