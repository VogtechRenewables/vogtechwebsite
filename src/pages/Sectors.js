import React from 'react'
import sectorsBanner from '../images/sectors_banner.webp';
import sectorImage1 from '../images/sectors_img1.webp';
import sectorImage2 from '../images/sectors_img2.webp';
import sectorImage3 from '../images/sectors_img3.webp';
import sectorImage4 from '../images/sectors_img4.webp';
import sectorImage5 from '../images/sectors_img5.webp';

const Sectors = () => {
  return (
    <div>
      <div className="relative h-96 bg-cover bg-center text-center text-white flex items-center justify-center" style={{ backgroundImage: `url(${sectorsBanner})` }}>
        <h1 className="text-7xl font-bold uppercase">Sectors</h1>
      </div>

      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden h-fit">
            <img src={sectorImage1} alt="Sector 1" className="w-full h-80 object-cover" />
            <div className="p-4">
              <h3 className="text-3xl font-bold mb-2 text-green-600 text-center mt-6 pb-12">Renewable Transport Fuels</h3>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden h-fit">
            <img src={sectorImage2} alt="Sector 2" className="w-full h-80 object-cover" />
            <div className="p-4">
              <h3 className="text-3xl font-bold mb-2 text-green-600 text-center mt-6 pb-12">Carbon Management</h3>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden h-fit">
            <img src={sectorImage3} alt="Sector 3" className="w-full h-80 object-cover" />
            <div className="p-4">
              <h3 className="text-3xl font-bold mb-2 text-green-600 text-center mt-6 pb-12">Carbon Negative Power</h3>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden h-fit">
            <img src={sectorImage4} alt="Sector 4" className="w-full h-80 object-cover" />
            <div className="p-4">
              <h3 className="text-3xl font-bold mb-2 text-green-600 text-center mt-6 pb-12">Clean Hydrogen and Hydrogen Derivatives</h3>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden h-fit">
            <img src={sectorImage5} alt="Sector 5" className="w-full h-80 object-cover" />
            <div className="p-4">
              <h3 className="text-3xl font-bold mb-2 text-green-600 text-center mt-6 pb-12">Green Ammonia</h3>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Sectors