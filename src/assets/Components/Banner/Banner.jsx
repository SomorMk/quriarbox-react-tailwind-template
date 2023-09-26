import React from 'react'
import bannerImg from '../../Images/banner-image.png'

const Banner = () => {
return (
<>
  <section className='pt-[70px] pb-[100px] lg:pt-[150px] lg:pb-[100px] bg-bg'>
    <div className="lg:max-w-[95%] xl:max-w-container mx-auto flex flex-wrap lg:justify-between">

      <div className='w-full lg:w-[48%] xl:w-[40%] order-2 lg:order-1 text-center lg:text-left'>

        <h1 className='text-[#261134] text-[35px] sm:text-[48px] font-regular font-ral text-center lg:text-left mt-5 lg:mt-0'>A trusted provider of 
        <span className='font-bold block'>courier services.</span></h1>

        <p className='text-[#4D4D4D] text-sm sm:text-xl font-medium font-ral mt-[16px] text-center lg:text-left w-[80%] lg:w-full mx-auto lg:mx-0'>We deliver your products safely to your home in a reasonable time.</p>

        <a className='py-[10px] lg:py-[15px] px-[20px] text-w text-sm lg:text-[20px] font-medium font-oxa bg-[#F95C19] inline-block mt-[40px] rounded-[10px] border-[1px] border-transparent hover:bg-w hover:text-[#F95C19] hover:border-[1px] hover:border-p1 transition-all ease-linear' href="#">Get started <i class="fa-solid fa-arrow-right"></i></a>

      </div>

      <div className='w-full lg:w-[48%] xl:w-[60%] order-1 lg:order-2'>
        <img className='max-w-[75%] sm:max-w-[70%] md:max-w-[70%] mx-auto lg:w-full lg:max-w-full' src={bannerImg} alt="" />
      </div>

    </div>
  </section>
</>
)
}

export default Banner