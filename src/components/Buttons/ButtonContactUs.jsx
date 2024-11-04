import React from 'react'

const ButtonContactUs = () => {
  return (
    <a href="/contactus" className="inline-block">
    <button
        className="bg-transparent hover:bg-white border-2 border-white hover:border-white text-white hover:text-primary px-11 py-3 md:px-24 md:py-4 rounded-full text-sm 
       uppercase font-semibold transition-transform duration-500 transform hover:-translate-y-2"
      >
        Contact Us
      </button>
      </a>
  )
}

export default ButtonContactUs