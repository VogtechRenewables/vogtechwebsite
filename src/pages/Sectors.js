import React, { useContext } from 'react';
import LanguageContext from "../context/LanguageContext";
import sectorsBanner from '../images/sectors_banner.webp';
import sectorImage1 from '../images/sectors_img1.webp';
import sectorImage2 from '../images/sectors_img2.webp';
import sectorImage3 from '../images/sectors_img3.webp';
import sectorImage4 from '../images/sectors_img4.webp';
import sectorImage5 from '../images/sectors_img5.webp';

// Define sector content in both languages
const sectorsContent = {
  English: {
    pageTitle: "Sectors",
    card1: "Renewable Transport Fuels",
    card2: "Clean Hydrogen and Hydrogen Derivatives",
    card3: "Carbon Management",
    card4: "Carbon Negative Power",
    card5: "Green Ammonia"
  },
  French: {
    pageTitle: "SECTEURS",
    card1: "Carburants renouvelables pour les transports",
    card2: "Hydrogène propre et dérivés de l’hydrogène",
    card3: "Gestion du carbone",
    card4: "L'énergie Négative du Carbone",
    card5: "Ammoniac vert"
  }
};

const Sectors = () => {
  const { selectedLanguage } = useContext(LanguageContext);
  const content = sectorsContent[selectedLanguage];

  return (
    <div>
      <div className="relative h-96 bg-cover bg-center text-center text-white flex items-center justify-center" style={{ backgroundImage: `url(${sectorsBanner})` }}>
        <h1 className="text-7xl font-bold uppercase">{content.pageTitle}</h1>
      </div>

      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden h-fit">
            <img src={sectorImage1} alt="Renewable Transport Fuels" className="w-full h-80 object-cover" />
            <div className="p-4">
              <h3 className="text-3xl font-bold mb-2 text-green-600 text-center mt-6 pb-12">{content.card1}</h3>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden h-fit">
            <img src={sectorImage2} alt="Clean Hydrogen and Hydrogen Derivatives" className="w-full h-80 object-cover" />
            <div className="p-4">
              <h3 className="text-3xl font-bold mb-2 text-green-600 text-center mt-6 pb-12">{content.card2}</h3>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden h-fit">
            <img src={sectorImage3} alt="Carbon Management" className="w-full h-80 object-cover" />
            <div className="p-4">
              <h3 className="text-3xl font-bold mb-2 text-green-600 text-center mt-6 pb-12">{content.card3}</h3>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden h-fit">
            <img src={sectorImage4} alt="Carbon Negative Power" className="w-full h-80 object-cover" />
            <div className="p-4">
              <h3 className="text-3xl font-bold mb-2 text-green-600 text-center mt-6 pb-12">{content.card4}</h3>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden h-fit">
            <img src={sectorImage5} alt="Green Ammonia" className="w-full h-80 object-cover" />
            <div className="p-4">
              <h3 className="text-3xl font-bold mb-2 text-green-600 text-center mt-6 pb-12">{content.card5}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sectors;
