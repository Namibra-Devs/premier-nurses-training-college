import React from 'react'
import {Link} from "react-router-dom"

const ButtonLogin = ({url, label}) => {
  return (
    <Link to={url}>
      <button
        className="bg-transparent border-2 border-white hover:bg-primary hover:border-primary rounded-3xl hover:shadow-custom-light 
        duration-500 ease text-white px-8 py-2 text-sm font-medium hover:scale-110 md:ml-3">
        {label}
      </button>
    </Link>
  )
}

export default ButtonLogin