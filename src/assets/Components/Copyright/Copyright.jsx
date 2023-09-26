import React from 'react'

const Copyright = () => {
  return (
    <>
        <section className='py-[20px] lg:py-[30px] bg-[#222132]'>
            <div className="lg:max-w-[95%] xl:max-w-container mx-auto flex flex-wrap items-center">
                <div className='w-full lg:w-1/2'>
                    <p className='text-gray-200 text-xs lg:text-sm font-medium font-ral text-center lg:text-left'>All rights Reserved © Your Company, 2023</p>
                </div>
                <div className='w-full lg:w-1/2 mt-1 lg:mt-0'>
                    <p className='text-gray-200 text-xs lg:text-sm font-medium font-ral text-center lg:text-right'>Made with heart by <a className='text-p1 font-medium' href="#">Somor</a></p>
                </div>
            </div>
        </section>
    </>
  )
}

export default Copyright