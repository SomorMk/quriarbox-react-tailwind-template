import React from 'react'
import avatar from '../../Images/Avatar.png'

const Testimonial = () => {
  return (
    <>
        <section className='py-[50px] lg:py-[100px] bg-bg'>
            <div className="max-w-container mx-auto">

                <div className='w-full text-center relative after:hidden lg:after:block lg:after:absolute after:content-[""] after:top-0 after:left-[20%] after:bg-quote_icon after:w-[133px] after:h-[133px]'>
                    <p className='text-[#F95C19] text-xl lg:text-[30px] font-bold font-oxa'>TESTIMONIAL</p>
                </div>
                <div className='w-full text-center'>
                    <p className='text-[#11111D] text-[28px] lg:text-[40px] font-extrabold font-ral mt-2 mb-[50px]'>Our Awesome Clients</p>
                </div>

                <div className='w-[90%] lg:w-[60%] mx-auto p-10 bg-w rounded-3xl shadow-2xl'>
                    <p className='text-p1 text-2xl font-bold font-ral mb-3'>Fantastic service!</p>
                    <p className='text-gray-800 text-xs lg:text-base font-ral mb-5 leading-5 lg:leading-7'>I purchased a phone from an e-commerce site, and this courier service provider assisted me in getting it delivered to my home. I received my phone within one day, and I was really satisfied with their service when I received it. They are really quick and dependable. They give me with the option of real-time delivery status, which allows me to track the progress of my goods delivery. I get a lot of questions from call center support and key account managers. They come highly recommended. Confidently say that they are really reliable.</p>

                    <div className='flex flex-wrap justify-center lg:justify-between items-center mt-7 lg:mt-0'>

                        <div className='w-full lg:w-[50%] flex justify-center lg:justify-start'>
                            <i className="text-p1 text-xs lg:text-base mr-1 fa-solid fa-star"></i>
                            <i className="text-p1 text-xs lg:text-base mr-1 fa-solid fa-star"></i>
                            <i className="text-p1 text-xs lg:text-base mr-1 fa-solid fa-star"></i>
                            <i className="text-p1 text-xs lg:text-base mr-1 fa-solid fa-star"></i>
                            <i className="text-p1 text-xs lg:text-base mr-1 fa-solid fa-star"></i>
                        </div>

                        <div className='w-full lg:w-[50%] flex justify-center lg:justify-end items-center mt-5 lg:mt-0'>
                            <div className='text-start lg:text-end mr-3 order-2 lg:order-1'>
                                <p className='text-gray-800 text-xs lg:text-base font-bold font-ral mb-1 lg:mb-0'>Yves Tanguy</p>
                                <p className='text-gray-800 text-xs lg:text-base font-normal font-ral'>Chief Executive, DLF</p>
                            </div>
                            <div className='order-1 lg:order-2 mr-2 lg:mr-0'>
                                <img src={avatar} alt="Avatar" className='max-w-[50px]' />
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    </>
  )
}

export default Testimonial