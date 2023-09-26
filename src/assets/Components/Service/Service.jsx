import React from 'react'
import icon from '../../Images/service-icon.png'

const Service = () => {
return (
<>
    <section className='pb-5 lg:pb-[100px] bg-bg'>
        <div className="max-w-container mx-auto">
            <div className='w-full text-center'>
                <p className='text-[#F95C19] text-xl sm:text-2xl lg:text-[30px] font-bold font-oxa'>SERVICES</p>
            </div>
            <div className='w-full text-center'>
                <p className='text-[#11111D] text-[28px] sm:text-[34px] lg:text-[40px] font-extrabold font-ral mt-2 mb-[50px]'>Our services for you
                </p>
            </div>
            <div className='w-full flex flex-wrap md:justify-evenly justify-around text-center'>

                <div className='w-[90%] sm:w-[60%] md:w-[46%] lg:w-[30%] bg-w py-10 lg:py-[60px] px-[40px] rounded-[20px] group shadow-xl mb-6 lg:mb-0'>
                    <div className='w-full text-center flex justify-center'>
                        <img src={icon} className='max-w-[50px] lg:max-w-[100px]' alt="" />
                    </div>
                    <div className='w-full text-center flex flex-col justify-start '>
                        <p className='text-gray-800 text-xl lg:text-[25px] font-extrabold font-ral mt-[30px]'>Business Services</p>
                        <p className='text-gray-600 text-sm lg:text-base font-ral text-left mt-[32px]'>We give you complete reliable delivery for your company. We will take full responsibility of
                            the deliveries.</p>
                        <ul className='mt-[20px] mb-[50px] pl-[15px] text-left list-disc'>
                            <li className='text-gray-600 text-sm lg:text-base font-ral'>Corporate goods</li>
                            <li className='text-gray-600 text-sm lg:text-base font-ral'>Shipment</li>
                            <li className='text-gray-600 text-sm lg:text-base font-ral'>Accesories</li>
                        </ul>
                        <a href="#" className='text-[#F95C19] text-sm lg:text-[20px] font-bold font-oxa py-[10px] lg:py-[12px] rounded-[10px] border-[1px] border-[#F95C19] group-hover:bg-[#F95C19] group-hover:text-w transition-all ease-linear'>Learn more</a>
                    </div>
                </div>

                <div className='w-[90%] sm:w-[60%] md:w-[46%] lg:w-[30%] bg-w py-10 lg:py-[60px] px-[40px] rounded-[20px] group shadow-xl mb-6 lg:mb-0'>
                    <div className='w-full text-center flex justify-center'>
                        <img src={icon} className='max-w-[50px] lg:max-w-[100px]' alt="" />
                    </div>
                    <div className='w-full text-center flex flex-col justify-start group'>
                        <p className='text-gray-800 text-xl lg:text-[25px] font-extrabold font-ral mt-[30px]'>Statewide Services</p>
                        <p className='text-gray-600 text-sm lg:text-base font-ral text-left mt-[32px]'>We give you complete reliable delivery for your company. We will take full responsibility of
                            the deliveries.</p>
                        <ul className='mt-[20px] mb-[50px] pl-[15px] text-left list-disc'>
                            <li className='text-gray-600 text-sm lg:text-base font-ral'>Corporate goods</li>
                            <li className='text-gray-600 text-sm lg:text-base font-ral'>Shipment</li>
                            <li className='text-gray-600 text-sm lg:text-base font-ral'>Accesories</li>
                        </ul>
                        <a href="#" className='text-[#F95C19] text-sm lg:text-[20px] font-bold font-oxa py-[10px] lg:py-[12px] rounded-[10px] border-[1px] border-[#F95C19] group-hover:bg-[#F95C19] group-hover:text-w transition-all ease-linear'>Learn more</a>
                    </div>
                </div>

                <div className='w-[90%] sm:w-[60%] md:w-[46%] lg:w-[30%] bg-w py-10 lg:py-[60px] px-[40px] rounded-[20px] group shadow-xl mb-6 lg:mb-0'>
                    <div className='w-full text-center flex justify-center'>
                        <img src={icon} className='max-w-[50px] lg:max-w-[100px]' alt="" />
                    </div>
                    <div className='w-full text-center flex flex-col justify-start'>
                        <p className='text-gray-800 text-xl lg:text-[25px] font-extrabold font-ral mt-[30px]'>Personal Services</p>
                        <p className='text-gray-600 text-sm lg:text-base font-ral text-left mt-[32px]'>We give you complete reliable delivery for your company. We will take full responsibility of
                            the deliveries.</p>
                        <ul className='mt-[20px] mb-[50px] pl-[15px] text-left list-disc'>
                            <li className='text-gray-600 text-sm lg:text-base font-ral'>Corporate goods</li>
                            <li className='text-gray-600 text-sm lg:text-base font-ral'>Shipment</li>
                            <li className='text-gray-600 text-sm lg:text-base font-ral'>Accesories</li>
                        </ul>
                        <a href="#" className='text-[#F95C19] text-sm lg:text-[20px] font-bold font-oxa py-[10px] lg:py-[12px] rounded-[10px] border-[1px] border-[#F95C19] group-hover:bg-[#F95C19] group-hover:text-w transition-all ease-linear'>Learn more</a>
                    </div>
                </div>

            </div>
        </div>
    </section>
</>
)
}

export default Service