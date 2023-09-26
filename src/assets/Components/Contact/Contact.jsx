import React from 'react'
import img from '../../Images/contact-img.png'

const Contact = () => {
  return (
    <>
        <section className='py-0 lg:py-[100px] bg-bg'>
            <div className="max-w-container mx-auto">

                <div className='w-[95%] lg:w-[70%] mx-auto py-5 flex flex-wrap justify-between items-center'>

                    <div className='w-full md:w-1/2 text-center lg:text-start mb-8 lg:mb-0'>
                        <img className='max-w-[200px] lg:max-w-[400px] mx-auto lg:mx-0' src={img} alt="Contact Image" />
                        <p className='text-p1 text-2xl lg:text-2xl font-bold font-oxa'>REQUEST A CALLBACK</p>
                        <p className='text-gray-1000 text-base lg:text-lg lg:text-[40px] font-bold font-ral leading-10 mt-1 lg:mt-5 mb-2 lg:mb-5'>We will contact in the shortest time.</p>
                        <p className='text-gray-500 text-base lg:text-2xl font-semibold font-ral'>Monday to Friday, 9am-5pm.</p>
                    </div>

                    <div className='w-[85%] mx-auto md:w-1/2'>
                        <form>
                            <input className='w-full py-2 px-[20px] bg-transparent border-[1px] border-[#C5C5D2] rounded-[8px] mb-4 focus-visible:outline-p1' type="text" placeholder='Name' />
                            <input className='w-full py-2 px-[20px] bg-transparent border-[1px] border-[#C5C5D2] rounded-[8px] mb-4 focus-visible:outline-p1' type="email" placeholder='Email' />
                            <textarea className='w-full py-2 px-[20px] bg-transparent border-[1px] border-[#C5C5D2] rounded-[8px] mb-4 focus-visible:outline-p1' placeholder='Message' rows="7"></textarea>

                            <button className='py-2 w-full text-w text-base font-medium font-oxa bg-p1 rounded-xl mt-3 lg:mt-8 border-[1px] border-transparent group hover:bg-w hover:text-p1 hover:border-p1 transition-all ease-linear' type="submit">Send Message
                            <i className="text-base ml-2 group-hover:text-p1 transition-all ease-linear fa-solid fa-paper-plane"></i></button>
                        </form>
                    </div>

                </div>

            </div>
        </section>
    </>
  )
}

export default Contact