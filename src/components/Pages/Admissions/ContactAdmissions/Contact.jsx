import React from 'react'
import contactData from './contactData';

const ContactAdmissions = () => {
  return (
    <div className="bg-white p-8 rounded-3xl grid md:grid-cols-3 lg:grid-cols-3 gap-4">

      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-700">Email</h3>
        <p className="text-blue-500">
          <a href={`mailto:${contactData.email}`}>{contactData.email}</a>
        </p>
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-700">Phone</h3>
        {contactData.phoneNumbers.map((number, index) => (
          <p key={index} className="text-gray-600">{number}</p>
        ))}
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-700">Office Location</h3>
        <p className="text-gray-600">
          {contactData.officeLocation.addressLine1},<br />
          {contactData.officeLocation.addressLine2},<br />
          {contactData.officeLocation.city}, {contactData.officeLocation.country}
        </p>
      </div>
    </div>
  )
}

export default ContactAdmissions