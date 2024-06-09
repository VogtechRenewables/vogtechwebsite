import React from 'react';
import contactBanner from '../images/contact_banner.webp';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <div>
      <div className="flex-col relative h-96 bg-cover bg-center text-center text-white flex items-center justify-center" style={{ backgroundImage: `url(${contactBanner})` }}>
        <h1 className="text-7xl font-bold mb-12 w-3/5">Contact Us</h1>
      </div>
      <div className="container mx-auto py-12 px-4 md:px-12 flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 mb-12 md:mb-0">
          <h2 className="text-3xl font-bold mb-6">Our Office</h2>
          <div className="flex items-center mb-4">
            <FaMapMarkerAlt className="text-green-600 text-2xl mr-2" />
            <p>1730 St. Laurent Blvd Suite #852, Ottawa, ON K1G 3Y7, Canada</p>
          </div>
          <div className="flex items-center mb-4">
            <FaEnvelope className="text-green-600 text-2xl mr-2" />
            <p>info@vogtech.ca</p>
          </div>
          <div className="flex items-center mb-4">
            <FaPhone className="text-green-600 text-2xl mr-2" />
            <p>(613) 555-1234</p>
          </div>
          <div className="flex space-x-4">
            <FaFacebook className="text-3xl text-blue-700 cursor-pointer" />
            <FaTwitter className="text-3xl text-blue-400 cursor-pointer" />
            <FaLinkedin className="text-3xl text-blue-500 cursor-pointer" />
            <FaInstagram className="text-3xl text-pink-600 cursor-pointer" />
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
          <form className="space-y-4">
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <input type="text" placeholder="First Name" className="w-full p-2 border border-gray-300 rounded" />
              <input type="text" placeholder="Last Name" className="w-full p-2 border border-gray-300 rounded" />
            </div>
            <input type="email" placeholder="Email" className="w-full p-2 border border-gray-300 rounded" />
            <input type="tel" placeholder="Phone Number" className="w-full p-2 border border-gray-300 rounded" />
            <textarea placeholder="Message" className="w-full p-2 border border-gray-300 rounded" rows="5"></textarea>
            <button type="submit" className="w-full p-2 bg-green-600 text-white font-bold rounded">Send Message</button>
          </form>
        </div>
      </div>
      <div className="container mx-auto my-12 px-4 md:px-12">
        <h2 className="text-3xl font-bold mb-6 text-center">Our Location</h2>
        <div className="w-full h-96">
          <iframe
            title="Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.433587537452!2d-75.63846038480145!3d45.40430187910073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce041648396f69%3A0x503c4bf72a0a7a0!2s1730%20St%20Laurent%20Blvd%20%23852%2C%20Ottawa%2C%20ON%20K1G%203Y7%2C%20Canada!5e0!3m2!1sen!2sus!4v1622648277582!5m2!1sen!2sus"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default Contact;
