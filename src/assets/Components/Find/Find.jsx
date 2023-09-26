import React from 'react'

const Find = () => {
  return (
    <>
        <section className='py-[50px] lg:py-[100px] bg-bg'>
            <div className="max-w-container mx-auto flex flex-wrap justify-between">

                <div className='w-full text-center'>
                    <p className='text-[#F95C19] text-xl lg:text-[30px] font-bold font-oxa'>FIND US</p>
                </div>
                <div className='w-full text-center'>
                    <p className='text-[#11111D] text-[28px] lg:text-[40px] font-extrabold font-ral mt-2 mb-[50px]'>Access us easily</p>
                </div>

                <div className='w-[90%] mx-auto lg:w-[60%] rounded-tl-3xl'>
                    <iframe className='rounded-tl-[20px] rounded-bl-[20px] rounded-[15px] lg:rounded-tr-none lg:rounded-br-none h-[200px] sm:h-[300px] lg:h-[100%] mb-5 lg:mb-0'
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14588.8183063636!2d90.2150885!3d23.  917808849999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755ef2ec4aa88ad%3A0xb6e3fa5a5d6be4f2!2sDhamrai%20Govt.   %20College!5e0!3m2!1sen!2sbd!4v1695585903612!5m2!1sen!2sbd"
                    width="100%" height="428px" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>

                <div className='w-full lg:w-[38%] mx-auto lg:rounded-tr-[20px] lg:rounded-br-[20px] bg-w p-10 lg:p-20'>
                    <p className='text-gray-800 text-[20px] font-bold font-ral mb-10'>Contact with us</p>
                    <ul>
                        <li className='text-gray-700 text-sm lg:text-base font-ral py-0 pl-8 mb-5 relative'>
                            <i className="absolute top-0 left-0 text-base text-p1 fa-solid fa-location-dot"></i>
                            2277 Lorem Ave, San Diego, CA 22553
                        </li>
                        <li className='text-gray-700 text-sm lg:text-base font-ral py-0 pl-8 mb-5 relative'>
                            <i className="absolute top-1 left-0 text-base text-p1 fa-regular fa-clock"></i>
                            Monday - Friday: 10 am - 10pm <br />
                            Sunday: 11 am - 9pm
                        </li>
                        <li className='text-gray-700 text-sm lg:text-base font-ral py-0 pl-8 mb-5 relative'>
                            <i className="absolute top-0 left-0 text-base text-p1 fa-regular fa-envelope"></i>
                            info@quriarbox.com
                        </li>
                    </ul>
                    <ul className='flex mt-8'>
                        <li className='mr-4'><a href="#"><i className="text-p1 text-xl fa-brands fa-square-facebook"></i></a></li>
                        <li className='mr-4'><a href="#"><i className="text-p1 text-xl fa-brands fa-instagram"></i></a></li>
                        <li className='mr-4'><a href="#"><i className="text-p1 text-xl fa-brands fa-square-twitter"></i></a></li>
                    </ul>
                </div>

                <div className='w-2/3 lg:w-1/2 mx-auto'>
                    <a className='py-3 w-full text-w text-sm lg:text-base font-medium font-oxa bg-p1 rounded-xl mt-8 border-[1px] text-center border-transparent group hover:bg-w hover:text-p1 hover:border-p1 inline-block transition-all ease-linear' href="#">
                    <i className="mr-4 text-xl hidden lg:inline fa-solid fa-phone"></i>
                    Call us to delivery  123-456789
                    </a>
                </div>

            </div>
        </section>
    </>
  )
}

export default Find