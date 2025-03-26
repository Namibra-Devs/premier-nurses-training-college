import React from "react";

const ContactForm = () => {
  return (
    <form className="space-y-6">
      {/* Row 1 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <input
          type="text"
          placeholder="Full Name"
          className="block w-full border-b border-gray-300 bg-transparent text-gray-800 placeholder-gray-600 focus:outline-none focus:border-b-2 focus:border-blue-500 py-2"
        />
        <input
          type="email"
          placeholder="Email Address"
          className="block w-full border-b border-gray-300 bg-transparent text-gray-800 placeholder-gray-600 focus:outline-none focus:border-b-2 focus:border-blue-500 py-2"
        />
        <input
          type="tel"
          placeholder="Phone Number"
          className="block w-full border-b border-gray-300 bg-transparent text-gray-800 placeholder-gray-600 focus:outline-none focus:border-b-2 focus:border-blue-500 py-2"
        />
      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <input
          type="text"
          placeholder="Message Title"
          className="block w-full border-b border-gray-300 bg-transparent text-gray-800 placeholder-gray-600 focus:outline-none focus:border-b-2 focus:border-blue-500 py-2"
        />
        <input
          type="text"
          placeholder="Interest Area"
          className="block w-full border-b border-gray-300 bg-transparent text-gray-800 placeholder-gray-600 focus:outline-none focus:border-b-2 focus:border-blue-500 py-2"
        />
        <input
          type="text"
          placeholder="Location"
          className="block w-full border-b border-gray-300 bg-transparent text-gray-800 placeholder-gray-600 focus:outline-none focus:border-b-2 focus:border-blue-500 py-2"
        />
      </div>

      {/* Row 3 */}
      <div>
        <textarea
          rows="4"
          placeholder="Write your message here..."
          className="block w-full border-b border-gray-300 bg-transparent text-gray-800 placeholder-gray-600 focus:outline-none focus:border-b-2 focus:border-blue-500 py-2"
        ></textarea>
      </div>

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          className="px-6 py-3 bg-primary text-white font-medium rounded-3xl shadow hover:bg-blue-700 transition"
        >
          Leave us a Message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
