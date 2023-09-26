import React from 'react'
import one from '../../Images/counter-1.png'
import two from '../../Images/counter (1).png'
import three from '../../Images/counter (2).png'
import four from '../../Images/counter (3).png'
import five from '../../Images/counter (4).png'

const Counter = () => {
  return (
    <>
        <section className='py-[50px] bg-bg'>
            <div className="max-w-container mx-auto flex flex-wrap items-center justify-evenly lg:justify-around">

                <div className='w-1/2 sm:w-[18%]  mb-6 lg:mb-0 mx-auto lg:mx-0 text-center'>
                    <img className='max-w-[30px] lg:max-w-[40px] mx-auto' src={one} alt="" />
                    <p className='text-[#F95C19] text-2xl lg:text-[40px] font-extrabold mb-[10px] mt-[10px]'>26+</p>
                    <p className='text-gray-800 text-sm lg:text-[20px] font-bold font-ral'>Awards won</p>
                </div>

                <div className='w-1/2 sm:w-[18%]  mb-6 lg:mb-0 mx-auto lg:mx-0 text-center'>
                    <img className='max-w-[30px] lg:max-w-[40px] mx-auto' src={two} alt="" />
                    <p className='text-[#F95C19] text-2xl lg:text-[40px] font-extrabold mb-[10px] mt-[10px]'>65+</p>
                    <p className='text-gray-800 text-sm lg:text-[20px] font-bold font-ral'>States covered</p>
                </div>

                <div className='w-1/2 sm:w-[18%]  mb-6 lg:mb-0 mx-auto lg:mx-0 text-center'>
                    <img className='max-w-[30px] lg:max-w-[40px] mx-auto' src={three} alt="" />
                    <p className='text-[#F95C19] text-2xl lg:text-[40px] font-extrabold mb-[10px] mt-[10px]'>689K+</p>
                    <p className='text-gray-800 text-sm lg:text-[20px] font-bold font-ral'>Happy clients</p>
                </div>

                <div className='w-1/2 sm:w-[18%]  mb-6 lg:mb-0 mx-auto lg:mx-0 text-center'>
                    <img className='max-w-[30px] lg:max-w-[40px] mx-auto' src={four} alt="" />
                    <p className='text-[#F95C19] text-2xl lg:text-[40px] font-extrabold mb-[10px] mt-[10px]'>130M+</p>
                    <p className='text-gray-800 text-sm lg:text-[20px] font-bold font-ral'>Goods delivered</p>
                </div>

                <div className='w-1/2 sm:w-[18%]  mb-6 lg:mb-0 mx-auto lg:mx-0 text-center'>
                    <img className='max-w-[30px] lg:max-w-[40px] mx-auto' src={five} alt="" />
                    <p className='text-[#F95C19] text-2xl lg:text-[40px] font-extrabold mb-[10px] mt-[10px]'>26+</p>
                    <p className='text-gray-800 text-sm lg:text-[20px] font-bold font-ral'>Business hours</p>
                </div>

            </div>
        </section>
    </>
  )
}

export default Counter