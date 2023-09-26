import React, { useState } from 'react'
import logo from '../../Images/Logo.png'

const Navbar = () => {
  let [show, setShow] = useState(true)
  let navClick = ()=>{
  setShow(!show);
  }

  return (
    <>
      <section className='py-[10px] bg-w'>
        <div className='md:max-w-[98%] lg:max-w-[95%] xl:max-w-container mx-auto flex flex-wrap md:flex-nowrap items-center'>

          <div className='w-[95%] mx-auto md:w-[25%]'>
            <div className='flex justify-between items-center md:block'>
              <a href="#"><img className='w-full max-w-[180px]' src={logo} alt="LOGO" /></a>
              {
              show == true? <i onClick={navClick}
                className="text-p1 text-2xl cursor-pointer md:hidden fa-solid fa-bars-staggered"></i> : <i
                onClick={navClick} class="text-p1 text-3xl cursor-pointer md:hidden fa-solid fa-xmark"></i>
              }
            </div>
          </div>

          <div className={`w-full mt-5 md:mt-0 md:w-[75%] md:block ${show == true? 'hidden' : 'block'}`}>
            <ul className='flex flex-wrap md:flex-nowrap flex-col md:flex-row justify-end items-center'>

              <li className='ml-0 py-3 md:ml-[25px]'>
                <a className='text-p1 md:text-xs lg:text-base font-bold font-ral hover:text-p1 transition-all ease-linear'
                  href="#">Home</a>
              </li>
              <li className='ml-0 py-3 md:ml-[25px]'>
                <a className='text-[#817382] md:text-xs lg:text-base font-bold font-ral hover:text-p1 transition-all ease-linear'
                  href="#">Our Service</a>
              </li>
              <li className='ml-0 py-3 md:ml-[25px]'>
                <a className='text-[#817382] md:text-xs lg:text-base font-bold font-ral hover:text-p1 transition-all ease-linear'
                  href="#">About us</a>
              </li>
              <li className='ml-0 py-3 md:ml-[25px]'>
                <a className='text-[#817382] md:text-xs lg:text-base font-bold font-ral hover:text-p1 transition-all ease-linear'
                  href="#">What's New?</a>
              </li>

              <li className='ml-0 py-3 md:py-0 md:ml-[25px]'>
                <ul className='flex flex-wrap md:flex-nowrap justify-end items-center'>

                  <li className='ml-0 py-3 md:ml-1 lg:ml-[25px]'>
                    <a className='w-10 h-10 md:w-[50px] md:h-[50px] lg:w-[60px] lg:h-[60px] leading-10 md:leading-[50px] lg:leading-[60px] text-center bg-[#FFEDC9] inline-block rounded-[5px] group hover:bg-p1 transition-all ease-linear'
                      href="#">
                      <i
                        className="md:text-base lg:text-[20px] text-[#FFAF0F] group-hover:text-w transition-all ease-linear fa-solid fa-magnifying-glass"></i>
                    </a>
                  </li>

                  <li className='ml-[25px] py-3 md:ml-1 lg:ml-[25px]'>
                    <a className='px-[20px] h-10 md:h-[50px] lg:h-[60px] leading-10 md:leading-[50px] lg:leading-[60px] bg-[#FFE4D9] inline-block md:text-xs lg:text-base text-[#F95C19] font-bold font-oxa rounded-[5px]  hover:text-w hover:bg-p1 transition-all ease-linear'
                      href="#">Contact Us</a>
                  </li>

                </ul>
              </li>

            </ul>
          </div>

        </div>
      </section>
    </>
  )
}

export default Navbar