import React from 'react'

const SubmitButton = ({label}) => {
  return (
    <button
                type="submit"
                className="w-full py-2 px-4 bg-gradient-to-r from-blue-800 to bg-primary text-white rounded-3xl font-semibold hover:bg-blue-800 transition duration-300"
              >
                {label}
              </button>
  )
}

export default SubmitButton