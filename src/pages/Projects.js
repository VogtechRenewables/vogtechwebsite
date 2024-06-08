import React from 'react'
import projectsBanner from '../images/projects_banner.webp';
import projectsImage1 from '../images/projects1.webp';
import projectsImage2 from '../images/projects2.webp';
import projectsImage3 from '../images/projects3.webp';
import projectsImage4 from '../images/projects4.webp';
import projectsImage5 from '../images/projects5.webp';

const Projects = () => {
  return (
    <div>
      <div className="flex-col relative h-96 bg-cover bg-center text-center text-white flex items-center justify-center" style={{ backgroundImage: `url(${projectsBanner})` }}>
        <h1 className="text-7xl font-bold uppercase mb-12">Projects</h1>
        <p className='text-lg w-1/2'>Discover VogTech Renewables' innovative and sustainable energy solutions, harnessing the power of hydrogen, ammonia, and more to create a greener, cleaner future.</p>
      </div>

      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white overflow-hidden h-fit">
          <img src={projectsImage1} alt="Sector 1" className="w-full h-80 object-cover" />

            <div className="p-4">
              <h3 className="text-3xl font-bold mb-4 text-green-600 text-center mt-6">Clean Hydrogen and Hydrogen Derivatives</h3>
              <p>Clean hydrogen and hydrogen derivatives are eco-friendly energy solutions produced from renewable feedstocks. Clean hydrogen, often termed green or blue hydrogen, is created through processes like electrolysis using renewable energy sources, or by capturing and storing carbon emissions. These feedstocks ensure sustainability while hydrogen derivatives, including ammonia and synthetic fuels, serve as environmentally friendly alternatives for energy storage and transportation.</p>
            </div>
          </div>
          <div className="bg-white overflow-hidden h-fit">
            <img src={projectsImage2} alt="Sector 2" className="w-full h-80 object-cover" />
            <div className="p-4">
              <h3 className="text-3xl font-bold mb-4 text-green-600 text-center mt-6">Carbon Management</h3>
              <p>VogTech's Carbon Management technology represents an innovative solution for sustainable environmental practices. Leveraging advanced carbon capture and storage methods, VogTech efficiently captures and securely stores carbon emissions. This cutting-edge technology plays a pivotal role in mitigating climate change by reducing greenhouse gas emissions and promoting a cleaner, more sustainable future.</p>
            </div>
          </div>
          <div className="bg-white overflow-hidden h-fit">
            <img src={projectsImage3} alt="Sector 3" className="w-full h-80 object-cover" />
            <div className="p-4">
              <h3 className="text-3xl font-bold mb-4 text-green-600 text-center mt-6">Carbon Negative Power</h3>
              <p>Carbon Negative Power technology, developed by VogTech, is a groundbreaking solution that goes beyond carbon neutrality. By effectively removing more carbon dioxide from the atmosphere than it generates, this technology actively combats climate change. It harnesses renewable energy sources and carbon capture techniques, delivering a net reduction in atmospheric carbon, making it a critical tool for a greener, more sustainable future.</p>
            </div>
          </div>
          <div className="bg-white overflow-hidden h-fit">
          <img src={projectsImage4} alt="Sector 4" className="w-full h-80 object-cover" />

            <div className="p-4">
              <h3 className="text-3xl font-bold mb-4 text-green-600 text-center mt-6 ">Green Ammonia</h3>
              <p className='text-gray-700'>Green Ammonia technology by VogTech is a pioneering solution that transforms ammonia production into an eco-friendly process. It utilizes renewable energy sources and sustainable feedstocks to produce ammonia, reducing carbon emissions significantly. This technology contributes to a cleaner environment, aligning with the transition to green energy and sustainable industrial practices, promoting a more sustainable and environmentally responsible future.</p>
            </div>
          </div>
          <div className="bg-white overflow-hidden h-fit">
            <img src={projectsImage5} alt="Sector 5" className="w-full h-80 object-cover" />
            
            <div className="p-4">
              <h3 className="text-3xl font-bold mb-4 text-green-600 text-center mt-6">Renewable Transport Fuels</h3>
              <p className='text-gray-700'>VogTech's Renewable Transport Fuels technology is an innovative solution that addresses the transportation sector's environmental challenges. It produces fuels from renewable feedstocks like biomass or waste materials, significantly reducing greenhouse gas emissions. These eco-friendly fuels serve as a sustainable alternative to traditional fossil fuels, promoting cleaner mobility and contributing to a greener, more sustainable transportation system.</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Projects