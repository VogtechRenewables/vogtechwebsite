import React from 'react';
import backgroundVideo from '../images/waterfall.mp4'; // Update the path to your MP4 video file
import backgroundImg from '../images/home_windmill.webp';

const Home = () => {
  const backgroundImage1 = require('../images/renewable_transport_img.webp');
  const backgroundImage2 = require('../images/carbon_management_img.webp');
  const backgroundImage3 = require('../images/carbon_negative_power_img.webp');
  const backgroundImage4 = require('../images/clean_hydro_img.webp');
  const backgroundImage5 = require('../images/green_ammonia_img.webp');

  return (
    <div>
      <div className="relative h-screen">
        <video 
          className="absolute top-0 left-0 object-cover w-full h-full"
          autoPlay
          loop
          muted
        >
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <h1 className="w-2/3 text-white text-center text-4xl md:text-6xl font-bold p-4">
            Sustainable Fuels, Infinite Journeys: Powering the World Responsibly
          </h1>
        </div>
      </div>
      <div className="flex items-center justify-center h-[16.67vh] bg-[rgba(34,139,34,0.75)] text-white text-center p-4">
        <div>
          <h3 className="text-2xl md:text-3xl font-semibold mb-2">Our Mission</h3>
          <h6 className="text-sm md:text-base font-light">
            To address climate challenges and energy security through rapid development, delivery, and operation of economically rational decarbonized fuels, energy and materials, and decarbonization services.
          </h6>
        </div>
      </div>
      <div className="flex items-center justify-center h-[80vh] bg-white text-center p-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center relative z-10">
        <div className="w-full md:w-2/3 p-6 rounded-lg">
          <h2 className="text-left text-3xl font-bold mb-4 text-green-600">Who We Are</h2>
          <p className="text-left text-gray-600 mb-4">
            Vogtech Renewables is a unique decarbonization enterprise intending to develop and operate multiple synergistic large infrastructure systems that generate climate-positive, stable, and predictable EBITDA in the following global growth sectors:
          </p>
          <ul className="list-disc text-left text-gray-600 mb-4">
            <li>
              <strong>Renewable Transport Fuels</strong> – Carbon-negative sustainable aviation fuel (SAF), renewable diesel, renewable naphtha, and green hydrogen
            </li>
            <li>
              <strong>Carbon Management</strong> – Development and operation of CO2 capture, pipelines, sequestration sinks, and infrastructure
            </li>
            <li>
              <strong>Carbon Negative Power</strong> – Landfill diverted biomass power
            </li>
            <li>
              <strong>Clean Hydrogen and Hydrogen Derivatives</strong> – Carbon Negative and Climate Positive transportation fuels
            </li>
          </ul>
          <p className="text-left text-gray-600 mb-4">
            Using our proprietary framework that incorporates ESG factors throughout the project lifecycle, Vogtech Renewables optimizes total value and creates a circular economy for current and future generations. Vogtech Renewables' leadership, executive team, and partners bring over 100 years of collective infrastructure experience and have deep experience in the development, delivery, and operations of several billion-dollar large-scale complex infrastructure projects.
          </p>
        </div>

          <img
            src={backgroundImg} // Replace with your actual image path
            alt="About Image"
            className="w-full md:w-1/3 h-auto hover:scale-110 transition-transform float-left md:mr-6"
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center h-[70vh] bg-[rgba(34,139,34,0.75)] text-white text-center p-4">
        <h1 className='text-3xl font-bold mb-4 text-white'>Focus Sectors</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 w-3/4 h-full">
          <div className="transform transition-transform duration-300 hover:scale-105 relative bg-white text-2xl text-white font-black p-4 rounded shadow-lg flex flex-col items-center justify-center text-lg font-semibold col-span-1 md:col-span-1 row-span-1" 
          style={{ height: '100%', backgroundImage: `url(${backgroundImage1})`, backgroundSize: 'cover' }}>
            <div className="absolute inset-0 bg-black opacity-25 rounded"></div>
            <span className="relative z-10">Renewable Transport Fuels</span>
          </div>
          <div className="transform transition-transform duration-300 hover:scale-105 relative bg-white text-2xl text-white font-black p-4 rounded shadow-lg flex flex-col items-center justify-center text-lg font-semibold col-span-1 md:col-span-1 row-span-2" 
          style={{ height: '100%', backgroundImage: `url(${backgroundImage2})`, backgroundSize: 'cover' }}>
            <div className="absolute inset-0 bg-black opacity-25 rounded"></div>
            <span className="relative z-10">Carbon Management</span>
          </div>
          <div className="transform transition-transform duration-300 hover:scale-105 transform transition-transform duration-300 hover:scale-105 relative bg-white text-2xl text-white font-black p-4 rounded shadow-lg flex flex-col items-center justify-center text-lg font-semibold col-span-1 md:col-span-1 row-span-1" 
          style={{ height: '100%', backgroundImage: `url(${backgroundImage3})`, backgroundSize: 'cover' }}>
            <div className="absolute inset-0 bg-black opacity-25 rounded"></div>
            <span className="relative z-10">Carbon Negative Power</span>
          </div>
          <div className="transform transition-transform duration-300 hover:scale-105 relative bg-white text-2xl text-white font-black p-4 rounded shadow-lg flex flex-col items-center justify-center text-lg font-semibold col-span-1 md:col-span-1 row-span-1" 
          style={{ height: '100%', backgroundImage: `url(${backgroundImage4})`, backgroundSize: 'cover' }}>
            <div className="absolute inset-0 bg-black opacity-25 rounded"></div>
            <span className="relative z-10">Clean Hydrogen and Hydrogen Derivatives</span>
          </div>
          <div className="transform transition-transform duration-300 hover:scale-105 relative bg-white text-2xl text-white font-black p-4 rounded shadow-lg flex flex-col items-center justify-center text-lg font-semibold col-span-1 md:col-span-1 row-span-1" 
          style={{ height: '100%', backgroundImage: `url(${backgroundImage5})`, backgroundSize: 'cover' }}>
            <div className="absolute inset-0 bg-black opacity-25 rounded"></div>
            <span className="relative z-10">Green Ammonia</span>
          </div>
        </div>
      </div>



    </div>
  );
}

export default Home;
