import React from 'react'
import { Link } from 'react-router-dom'

const ButtonContactUs = () => {
  return (
    <Link to="/contactus" className="inline-block">
    <button
        className="bg-transparent hover:bg-white border-2 border-white hover:border-white
         text-white hover:text-primary px-10 py-3 md:px-24 md:py-4 rounded-full text-sm 
       uppercase font-semibold transition-transform duration-500 transform hover:-translate-y-2"
      >
        Contact Us
      </button>
      </Link>
  )
}

export default ButtonContactUs