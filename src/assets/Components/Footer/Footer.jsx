import React from 'react'
import logo from '../../Images/footer-logo.png'

const Footer = () => {
  return (
    <>
        <footer className='py-[30px] lg:py-[50px] bg-[#2F2E41]'>
          <div className="lg:max-w-[95%] xl:max-w-container mx-auto flex flex-wrap items-center">

            <div className='w-[90%] mx-auto lg:w-1/2'>
              <a href="#" className='block lg:inline-block text-center'><img src={logo} alt="Footer Logo" className='mx-auto' /></a>
              <p className='text-[#9291A1] text-sm lg:text-base font-semibold font-ral mt-4 text-center lg:text-left'>The most trusted Courier company in your area.</p>
            </div>

            <div className='w-[90%] mx-auto lg:w-1/2 flex flex-wrap mt-10 lg:mt-0'>

              <div className='w-1/3'>
                <p className='text-w text-sm lg:text-xl font-bold font-oxa text-center lg:text-left'>Other links</p>
                <ul className='mt-[20px] text-center lg:text-left'>
                  <li className='mb-1 lg:mb-2'><a href="#" className='text-[#9291A1] text-xs lg:text-base font-semibold font-ral hover:text-p1 transition-all ease-linear'>Blogs</a></li>
                  <li className='mb-1 lg:mb-2'><a href="#" className='text-[#9291A1] text-xs lg:text-base font-semibold font-ral hover:text-p1 transition-all ease-linear'>Movers website</a></li>
                  <li className='mb-1 lg:mb-2'><a href="#" className='text-[#9291A1] text-xs lg:text-base font-semibold font-ral hover:text-p1 transition-all ease-linear'>Traffic Update</a></li>
                </ul>
              </div>

              <div className='w-1/3'>
                <p className='text-w text-sm lg:text-xl font-bold font-oxa text-center lg:text-left'>Services</p>
                <ul className='mt-[20px] text-center lg:text-left'>
                  <li className='mb-1 lg:mb-2'><a href="#" className='text-[#9291A1] text-xs lg:text-base font-semibold font-ral hover:text-p1 transition-all ease-linear'>Corporate goods</a></li>
                  <li className='mb-1 lg:mb-2'><a href="#" className='text-[#9291A1] text-xs lg:text-base font-semibold font-ral hover:text-p1 transition-all ease-linear'>Artworks</a></li>
                  <li className='mb-1 lg:mb-2'><a href="#" className='text-[#9291A1] text-xs lg:text-base font-semibold font-ral hover:text-p1 transition-all ease-linear'>Documents</a></li>
                </ul>
              </div>

              <div className='w-1/3'>
                <p className='text-w text-sm lg:text-xl font-bold font-oxa text-center lg:text-left'>Customer Care</p>
                <ul className='mt-[20px] text-center lg:text-left'>
                  <li className='mb-1 lg:mb-2'><a href="#" className='text-[#9291A1] text-xs lg:text-base font-semibold font-ral hover:text-p1 transition-all ease-linear'>About Us</a></li>
                  <li className='mb-1 lg:mb-2'><a href="#" className='text-[#9291A1] text-xs lg:text-base font-semibold font-ral hover:text-p1 transition-all ease-linear'>Contact</a></li>
                  <li className='mb-1 lg:mb-2'><a href="#" className='text-[#9291A1] text-xs lg:text-base font-semibold font-ral hover:text-p1 transition-all ease-linear'>Get Update</a></li>
                </ul>
              </div>
              
            </div>

          </div>
        </footer>
    </>
  )
}

export default Footer