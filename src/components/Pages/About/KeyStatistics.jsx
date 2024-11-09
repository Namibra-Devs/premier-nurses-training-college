import React from 'react'

const KeyStatistics = () => {
  return (
    <div>
        <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-4'>
            {/* Key Statics 1 */}
            <div className='relative bg-gray-50 rounded-3xl overflow-hidden p-4'>
                <div className="mt-14">
                    <div className='absolute top-0 left-0 p-4  bg-primary rounded-br-3xl text-lg font-bold text-white'>
                      <span className=''>2015</span>  
                    </div>
                    <h3 className='text-base tracking-tight text-gray-600 font-semibold my-1'>Graduation Rate</h3>
                    <p className='text-gray-500 text-sm'>Of our student graduate every year</p>
                </div>
            </div>
            {/* Key Statics 2 */}
            <div className='relative bg-transparent rounded-3xl overflow-hidden p-4'>
                <div className="mt-14">
                    <div className='absolute top-0 left-0 p-4  bg-primary rounded-br-3xl text-lg font-bold text-white'>
                      <span className=''>2018</span>  
                    </div>
                    <h3 className='text-base tracking-tight text-white font-semibold my-1'>Job Placement Rate</h3>
                    <p className='text-white text-sm'>of our graduates secure employment within six months.</p>
                </div>
            </div>
            {/* Key Statics 3 */}
            <div className='relative bg-transparent rounded-3xl overflow-hidden p-4'>
                <div className="mt-14">
                    <div className='absolute top-0 left-0 p-4  bg-primary rounded-br-3xl text-lg font-bold text-white'>
                      <span className=''>2020</span>  
                    </div>
                    <h3 className='text-base tracking-tight text-white font-semibold my-1'>Student-to-Faculty Ratio</h3>
                    <p className='text-white text-sm'>15:1, ensuring personalized attention and support for every student.</p>
                </div>
            </div>
            {/* Key Statics 4 */}
            <div className='relative bg-transparent rounded-3xl overflow-hidden p-4'>
                <div className="mt-14">
                    <div className='absolute top-0 left-0 p-4  bg-primary rounded-br-3xl text-lg font-bold text-white'>
                      <span className=''>2024</span>  
                    </div>
                    <h3 className='text-base tracking-tight text-white font-semibold my-1'>Alumni Network</h3>
                    <p className='text-white text-sm'>Join a thriving network of over 3,000 graduates who are making a difference in healthcare globally.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default KeyStatistics