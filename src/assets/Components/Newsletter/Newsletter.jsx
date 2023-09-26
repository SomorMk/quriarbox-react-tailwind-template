import React from 'react'

const Newsletter = () => {
  return (
    <>
        <section className='py-[50px] lg:pt-[80px] lg:pb-[100px] bg-[#222132]'>
            <div className="max-w-container mx-auto flex flex-wrap justify-between items-center">

                <div className='w-[90%] mx-auto lg:w-[40%] text-center lg:text-start mb-9 lg:mb-0'>
                    <p className='text-w text-2xl lg:text-[40px] font-extrabold font-ral'>Get an update every week</p>
                    <p className='text-gray-300 text-xs lg:text-base font-ral leading-[160%] mt-5'>We ensure that your product is delivered in the safest possible manner, at the correct location, at the right time.</p>
                </div>
                
                <div className='w-[90%] sm:w-[60%] mx-auto lg:w-[40%]'>
                    <p className='text-p1 text-base lg:text-lg font-bold font-oxa mb-5 text-center lg:text-start'>SUBSCRIBE TO NEWSLETTER</p>
                    <div className='w-full flex flex-wrap justify-between items-center'>
                        <div className='w-full lg:w-[78%]'>
                            <input className='py-[10px] lg:py-[15px] pl-5 w-full bg-transparent border-[1px] text-w border-[#C5C5D2] rounded-lg' type="text" placeholder='Enter your mail' />
                        </div>
                        <div className='w-full lg:w-[20%] mt-3 lg:mt-0'>
                            <a href="#" className='py-[15px] w-full text-w text-xs lg:text-base font-medium font-oxa bg-p1 rounded-lg border-[1px] text-center border-transparent group hover:bg-w hover:text-p1 hover:border-p1 inline-block transition-all ease-linear'>Subscribe</a>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    </>
  )
}

export default Newsletter