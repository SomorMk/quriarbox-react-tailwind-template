import React from 'react'

const Delivery = () => {
  return (
    <>
        <section className='py-0 md:px-5 lg:px-0 lg:py-[100px] bg-bg'>
            <div className='lg:max-w-[95%] xl:max-w-container mx-auto h-[350px] lg:h-[580px] bg-delivery-bg re bg-left bg-no-repeat p-6 lg:p-[50px] rounded-[20px] flex justify-center items-center relative z-[1] after:absolute after:content-[""] after:top-0 after:left-0 after:w-full after:h-full after:bg-black after:opacity-[.7] after:rounded-[20px] after:z-[-1]'>

              <div className='text-center'>
                <i className="text-p1 text-5xl lg:text-[70px] bg-w rounded-full fa-solid fa-circle-play"></i>
                <p className='text-p1 text-2xl lg:text-[32px] font-bold font-oxa mt-[20px] mb-[20px]'>FASTEST DELIVERY</p>
                <p className='text-w text-sm lg:text-[25px] font-ral mx-auto lg:leading-9'>
                  <span className='lg:block'>You can get your valuable item in the fastest period of</span>
                  <span className='lg:block'>time with safety. Because your emergency</span>
                  <span className='lg:block'>is our first priority.</span>
                </p>
              </div>

            </div>
        </section>
    </>
  )
}

export default Delivery