import React from 'react'
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const Counter = ({ end }) => {
    const { ref, inView } = useInView({
      triggerOnce: true, 
      threshold: 0.5,     
    });
  
    return (
      <div ref={ref}>
        {inView && (
          <CountUp
            start={0}
            end={end}
            duration={2}   // Count duration in seconds
            separator=","
          />
        )}
      </div>
    );
  };

const Totals = () => {
  return (
    <div className='bg-TotalsBg bg-bottom bg-no-repeat bg-origin-border bg-cover g-auto 
    rounded-br-3xl rounded-bl-3xl py-8 px-14 w-full'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
            {/* Total 1 */}
            <div className='flex flex-col items-center gap-2 relative text-center rounded-3xl p-4'>
                <h1 className='font-bold text-5xl text-yellow-400'>2015</h1>
                <h3 className='font-semibold text-base text-white'>College Inauguration</h3>
            </div>
            {/* Total 1 */}
            <div className='flex flex-col items-center gap-2 relative text-center rounded-3xl p-4'>
                <span className='absolute right-8 top-2 text-lg text-white'>+</span>
                <h1 className='font-bold text-5xl text-yellow-400'><Counter end={340}></Counter></h1>
                <h3 className='font-semibold text-base text-white'>Enrolled Students</h3>
            </div>
            {/* Total 1 */}
            <div className='flex flex-col items-center gap-2 relative text-center rounded-3xl p-4'>
                <span className='absolute right-8 top-2 text-lg text-white'>+</span>
                <h1 className='font-bold text-5xl text-yellow-400'><Counter end={35}></Counter></h1>
                <h3 className='font-semibold text-base text-white'>Staff</h3>
            </div>
            {/* Total 1 */}
            <div className='flex flex-col items-center gap-2 relative text-center rounded-3xl p-4'>
                <span className='absolute right-8 top-2 text-lg text-white'>+</span>
                <h1 className='font-bold text-5xl text-yellow-400'><Counter end={25}></Counter></h1>
                <h3 className='font-semibold text-base text-white'>Programmes</h3>
            </div>
        </div>
    </div>
  )
}

export default Totals