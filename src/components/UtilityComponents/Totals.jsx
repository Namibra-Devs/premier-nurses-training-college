import React from 'react'

const Totals = () => {
  return (
    <div className='bg-TotalsBg bg-bottom bg-no-repeat bg-origin-border bg-cover g-auto 
    rounded-br-3xl rounded-bl-3xl py-8 px-14 w-full mt-2'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
            {/* Total 1 */}
            <div className='flex flex-col  items-center gap-2 relative  rounded-3xl p-4'>
                <span className='absolute right-8 top-2 text-lg text-white'>+</span>
                <h1 className='font-bold text-5xl text-yellow-400'>200</h1>
                <h3 className='font-semibold text-base text-white'>Admissions</h3>
            </div>
            {/* Total 1 */}
            <div className='flex flex-col  items-center gap-2 relative  rounded-3xl p-4'>
                <span className='absolute right-8 top-2 text-lg text-white'>+</span>
                <h1 className='font-bold text-5xl text-yellow-400'>200</h1>
                <h3 className='font-semibold text-base text-white'>Students</h3>
            </div>
            {/* Total 1 */}
            <div className='flex flex-col  items-center gap-2 relative  rounded-3xl p-4'>
                <span className='absolute right-8 top-2 text-lg text-white'>+</span>
                <h1 className='font-bold text-5xl text-yellow-400'>200</h1>
                <h3 className='font-semibold text-base text-white'>Staff</h3>
            </div>
            {/* Total 1 */}
            <div className='flex flex-col  items-center gap-2 relative  rounded-3xl p-4'>
                <span className='absolute right-8 top-2 text-lg text-white'>+</span>
                <h1 className='font-bold text-5xl text-yellow-400'>200</h1>
                <h3 className='font-semibold text-base text-white'>Courses</h3>
            </div>
        </div>
    </div>
  )
}

export default Totals