import React, { useContext } from 'react';
import LanguageContext from "../context/LanguageContext";
import projectsBanner from '../images/projects_banner.webp';
import projectsImage1 from '../images/projects1.webp';
import projectsImage2 from '../images/projects2.webp';
import projectsImage3 from '../images/projects3.webp';
import projectsImage4 from '../images/projects4.webp';
import projectsImage5 from '../images/projects5.webp';

// Define project content in both languages
const projectsContent = {
  English: {
    pageTitle: "Projects",
    pageSubTitle: "Discover VogTech Renewables' innovative and sustainable energy solutions, harnessing the power of hydrogen, ammonia, and more to create a greener, cleaner future.",
    card1Title: "Clean Hydrogen and Hydrogen Derivatives",
    card1Desc: "Clean hydrogen and hydrogen derivatives are eco-friendly energy solutions produced from renewable feedstocks. Clean hydrogen, often termed green or blue hydrogen, is created through processes like electrolysis using renewable energy sources, or by capturing and storing carbon emissions. These feedstocks ensure sustainability while hydrogen derivatives, including ammonia and synthetic fuels, serve as environmentally friendly alternatives for energy storage and transportation.",
    card2Title: "Carbon Management",
    card2Desc: "VogTech's Carbon Management technology represents an innovative solution for sustainable environmental practices. Leveraging advanced carbon capture and storage methods, VogTech efficiently captures and securely stores carbon emissions. This cutting-edge technology plays a pivotal role in mitigating climate change by reducing greenhouse gas emissions and promoting a cleaner, more sustainable future.",
    card3Title: "Carbon Negative Power",
    card3Desc: "Carbon Negative Power technology, developed by VogTech, is a groundbreaking solution that goes beyond carbon neutrality. By effectively removing more carbon dioxide from the atmosphere than it generates, this technology actively combats climate change. It harnesses renewable energy sources and carbon capture techniques, delivering a net reduction in atmospheric carbon, making it a critical tool for a greener, more sustainable future.",
    card4Title: "Green Ammonia",
    card4Desc: "Green Ammonia technology by VogTech is a pioneering solution that transforms ammonia production into an eco-friendly process. It utilizes renewable energy sources and sustainable feedstocks to produce ammonia, reducing carbon emissions significantly. This technology contributes to a cleaner environment, aligning with the transition to green energy and sustainable industrial practices, promoting a more sustainable and environmentally responsible future.",
    card5Title: "Renewable Transport Fuels",
    card5Desc: "VogTech's Renewable Transport Fuels technology is an innovative solution that addresses the transportation sector's environmental challenges. It produces fuels from renewable feedstocks like biomass or waste materials, significantly reducing greenhouse gas emissions. These eco-friendly fuels serve as a sustainable alternative to traditional fossil fuels, promoting cleaner mobility and contributing to a greener, more sustainable transportation system."
  },
  French: {
    pageTitle: "PROJECTS",
    pageSubTitle: "Découvrez les solutions énergétiques innovantes et durables de VogTech Renewables, qui exploitent la puissance de l'hydrogène, de l'ammoniac et d'autres éléments pour créer un avenir plus vert et plus propre.",
    card1Title: "Hydrogène propre et dérivés de l’hydrogène",
    card1Desc: "L’hydrogène produit de l’hydrogène propre et des dérivés d’hydrogène propres sous forme d’énergie, de carburant et de matière première décarbonés. Hyterra produit de l’hydrogène propre et des dérivés d’hydrogène propre sous forme d’énergie, de carburant et de matière première décarbonés. L'entreprise utilise des technologies entièrement commercialisées à grande échelle, tirant parti de la technologie de captage du carbone fournie par CAPIO pour séquestrer les émissions de CO2.",
    card2Title: "Gestion du carbone",
    card2Desc: "La technologie de gestion du carbone de VogTech représente une solution innovante pour des pratiques environnementales durables. En s'appuyant sur des méthodes avancées de capture et de stockage du carbone, VogTech capture efficacement les émissions de carbone et les stocke en toute sécurité. Cette technologie de pointe joue un rôle essentiel dans l'atténuation du changement climatique en réduisant les émissions de gaz à effet de serre et en favorisant un avenir plus propre et plus durable.",
    card3Title: "L'énergie négative en carbone",
    card3Desc: "La technologie Carbon Negative Power, mise au point par VogTech, est une solution révolutionnaire qui va au-delà de la neutralité carbone. En éliminant de l'atmosphère plus de dioxyde de carbone qu'elle n'en génère, cette technologie lutte activement contre le changement climatique. Elle exploite les sources d'énergie renouvelables et les techniques de capture du carbone, ce qui permet une réduction nette du carbone atmosphérique et en fait un outil essentiel pour un avenir plus vert et plus durable.",
    card4Title: "Ammoniac vert",
    card4Desc: "La technologie Green Ammonia de VogTech est une solution novatrice qui transforme la production d'ammoniac en un processus respectueux de l'environnement. Elle utilise des sources d'énergie renouvelables et des matières premières durables pour produire de l'ammoniac, réduisant ainsi considérablement les émissions de carbone. Cette technologie contribue à un environnement plus propre, en s'alignant avec la transition vers une énergie verte et des pratiques industrielles durables, favorisant un avenir plus durable et responsable sur le plan environnemental.",
    card5Title: "Carburants renouvelables pour les transports",
    card5Desc: "La technologie Renewable Transport Fuels de VogTech est une solution innovante qui permet de relever les défis environnementaux du secteur des transports. Elle produit des carburants à partir de matières premières renouvelables telles que la biomasse ou les déchets, ce qui permet de réduire considérablement les émissions de gaz à effet de serre. Ces carburants respectueux de l'environnement constituent une alternative durable aux carburants fossiles traditionnels, favorisant une mobilité plus propre et contribuant à un système de transport plus écologique et plus durable."
  }
};

const Projects = () => {
  const { selectedLanguage } = useContext(LanguageContext);
  const content = projectsContent[selectedLanguage];

  return (
    <div>
      <div className="flex-col relative h-96 bg-cover bg-center text-center text-white flex items-center justify-center" style={{ backgroundImage: `url(${projectsBanner})` }}>
        <h1 className="text-7xl font-bold uppercase mb-12">{content.pageTitle}</h1>
        <p className='text-lg w-1/2'>{content.pageSubTitle}</p>
      </div>

      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white overflow-hidden h-fit">
            <img src={projectsImage1} alt="Clean Hydrogen and Hydrogen Derivatives" className="w-full h-80 object-cover" />
            <div className="p-4">
              <h3 className="text-3xl font-bold mb-4 text-green-600 text-center mt-6">{content.card1Title}</h3>
              <p>{content.card1Desc}</p>
            </div>
          </div>
          <div className="bg-white overflow-hidden h-fit">
            <img src={projectsImage2} alt="Carbon Management" className="w-full h-80 object-cover" />
            <div className="p-4">
              <h3 className="text-3xl font-bold mb-4 text-green-600 text-center mt-6">{content.card2Title}</h3>
              <p>{content.card2Desc}</p>
            </div>
          </div>
          <div className="bg-white overflow-hidden h-fit">
            <img src={projectsImage3} alt="Carbon Negative Power" className="w-full h-80 object-cover" />
            <div className="p-4">
              <h3 className="text-3xl font-bold mb-4 text-green-600 text-center mt-6">{content.card3Title}</h3>
              <p>{content.card3Desc}</p>
            </div>
          </div>
          <div className="bg-white overflow-hidden h-fit">
            <img src={projectsImage4} alt="Green Ammonia" className="w-full h-80 object-cover" />
            <div className="p-4">
              <h3 className="text-3xl font-bold mb-4 text-green-600 text-center mt-6">{content.card4Title}</h3>
              <p className='text-gray-700'>{content.card4Desc}</p>
            </div>
          </div>
          <div className="bg-white overflow-hidden h-fit">
            <img src={projectsImage5} alt="Renewable Transport Fuels" className="w-full h-80 object-cover" />
            <div className="p-4">
              <h3 className="text-3xl font-bold mb-4 text-green-600 text-center mt-6">{content.card5Title}</h3>
              <p className='text-gray-700'>{content.card5Desc}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects;
