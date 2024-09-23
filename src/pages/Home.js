import React, { useState, useEffect, useContext } from 'react';
import backgroundVideo from '../images/waterfall.mp4'; // Update the path to your MP4 video file
import backgroundImg from '../images/home_windmill.webp';
import LanguageContext from "../context/LanguageContext";

const Home = () => {
  const backgroundImage1 = require('../images/renewable_transport_img.webp');
  const backgroundImage2 = require('../images/carbon_management_img.webp');
  const backgroundImage3 = require('../images/carbon_negative_power_img.webp');
  const backgroundImage4 = require('../images/clean_hydro_img.webp');
  const backgroundImage5 = require('../images/green_ammonia_img.webp');

  const { selectedLanguage } = useContext(LanguageContext);

  const homeContent = {
    English: {
      landingText: "Welcome to Our Site",
      landingSubHeader: "Leading the Future of Clean Energy",
      landingSubDesc: "Innovating for a sustainable tomorrow.",
      sectionOneHeader: "About Our Mission",
      paragraph1: "We are committed to providing clean energy solutions.",
      bulletTitle1: "Sustainability",
      bulletDesc1: "We focus on sustainable energy sources.",
      bulletTitle2: "Innovation",
      bulletDesc2: "Bringing innovative solutions to the market.",
      bulletTitle3: "Efficiency",
      bulletDesc3: "Maximizing efficiency in all our projects.",
      bulletTitle4: "Community",
      bulletDesc4: "Engaging with communities worldwide.",
      paragraph2: "Join us in making the world a greener place.",
      section2Title: "Our Services",
      card1: "Renewable Transport",
      card2: "Carbon Management",
      card3: "Carbon Negative Power",
      card4: "Clean Hydro",
      card5: "Green Ammonia"
    },
    French: {
      landingText: "Bienvenue sur notre site",
      landingSubHeader: "Diriger l'avenir de l'énergie propre",
      landingSubDesc: "Innover pour un avenir durable.",
      sectionOneHeader: "À propos de notre mission",
      paragraph1: "Nous nous engageons à fournir des solutions énergétiques propres.",
      bulletTitle1: "Durabilité",
      bulletDesc1: "Nous nous concentrons sur des sources d'énergie durables.",
      bulletTitle2: "Innovation",
      bulletDesc2: "Apporter des solutions innovantes sur le marché.",
      bulletTitle3: "Efficacité",
      bulletDesc3: "Maximiser l'efficacité dans tous nos projets.",
      bulletTitle4: "Communauté",
      bulletDesc4: "S'engager avec des communautés dans le monde entier.",
      paragraph2: "Rejoignez-nous pour rendre le monde plus vert.",
      section2Title: "Nos services",
      card1: "Transport renouvelable",
      card2: "Gestion du carbone",
      card3: "Énergie négative en carbone",
      card4: "Hydro propre",
      card5: "Ammoniac vert"
    }
  };

  const homeData = homeContent[selectedLanguage];

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
          <h1 className="w-4/5 md:w-2/3 text-white text-center text-3xl md:text-6xl font-bold p-4">
            {homeData.landingText}
          </h1>
        </div>
      </div>
      <div className="flex items-center justify-center h-[16.67vh] bg-[rgba(34,139,34,0.75)] text-white text-center p-4">
        <div>
          <h3 className="text-xl md:text-3xl font-semibold mb-2">{homeData.landingSubHeader}</h3>
          <h6 className="text-xs md:text-base font-light">
            {homeData.landingSubDesc}
          </h6>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center h-auto md:h-[80vh] bg-white text-center p-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center relative z-10">
          <div className="w-full md:w-2/3 p-6 rounded-lg">
            <h2 className="text-left text-2xl md:text-3xl font-bold mb-4 text-green-600">{homeData.sectionOneHeader}</h2>
            <p className="text-left text-sm md:text-base text-gray-600 mb-4">
              {homeData.paragraph1}            
            </p>
            <ul className="list-disc text-left text-sm md:text-base text-gray-600 mb-4">
              <li>
                <strong>{homeData.bulletTitle1}</strong> – {homeData.bulletDesc1}
              </li>
              <li>
                <strong>{homeData.bulletTitle2}</strong> – {homeData.bulletDesc2}
              </li>
              <li>
                <strong>{homeData.bulletTitle3}</strong> – {homeData.bulletDesc3}
              </li>
              <li>
                <strong>{homeData.bulletTitle4}</strong> – {homeData.bulletDesc4}
              </li>
            </ul>
            <p className="text-left text-sm md:text-base text-gray-600 mb-4">
              {homeData.paragraph2}
            </p>
          </div>
          <img
            src={backgroundImg}
            alt="About Image"
            className="w-full md:w-1/3 h-auto hover:scale-110 transition-transform mb-4 md:mb-0"
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center h-auto md:h-[70vh] bg-[rgba(34,139,34,0.75)] text-white text-center p-4">
        <h1 className='text-2xl md:text-3xl font-bold mb-4 text-white'>{homeData.section2Title}</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full md:w-3/4 h-auto md:h-full">
          <div className="transform transition-transform duration-300 hover:scale-105 relative bg-white text-2xl text-white font-black p-4 rounded shadow-lg flex flex-col items-center justify-center text-base md:text-lg font-semibold col-span-1 row-span-1" 
          style={{ backgroundImage: `url(${backgroundImage1})`, backgroundSize: 'cover', height: '200px' }}>
            <div className="absolute inset-0 bg-black opacity-25 rounded"></div>
            <span className="relative z-10">{homeData.card1}</span>
          </div>
          <div className="transform transition-transform duration-300 hover:scale-105 relative bg-white text-2xl text-white font-black p-4 rounded shadow-lg flex flex-col items-center justify-center text-base md:text-lg font-semibold col-span-1 row-span-1 md:row-span-2" 
          style={{ backgroundImage: `url(${backgroundImage2})`, backgroundSize: 'cover', height: '200px' }}>
            <div className="absolute inset-0 bg-black opacity-25 rounded"></div>
            <span className="relative z-10">{homeData.card4}</span>
          </div>
          <div className="transform transition-transform duration-300 hover:scale-105 relative bg-white text-2xl text-white font-black p-4 rounded shadow-lg flex flex-col items-center justify-center text-base md:text-lg font-semibold col-span-1 row-span-1" 
          style={{ backgroundImage: `url(${backgroundImage3})`, backgroundSize: 'cover', height: '200px' }}>
            <div className="absolute inset-0 bg-black opacity-25 rounded"></div>
            <span className="relative z-10">{homeData.card3}</span>
          </div>
          <div className="transform transition-transform duration-300 hover:scale-105 relative bg-white text-2xl text-white font-black p-4 rounded shadow-lg flex flex-col items-center justify-center text-base md:text-lg font-semibold col-span-1 row-span-1" 
          style={{ backgroundImage: `url(${backgroundImage4})`, backgroundSize: 'cover', height: '200px' }}>
            <div className="absolute inset-0 bg-black opacity-25 rounded"></div>
            <span className="relative z-10">{homeData.card2}</span>
          </div>
          <div className="transform transition-transform duration-300 hover:scale-105 relative bg-white text-2xl text-white font-black p-4 rounded shadow-lg flex flex-col items-center justify-center text-base md:text-lg font-semibold col-span-1 row-span-1" 
          style={{ backgroundImage: `url(${backgroundImage5})`, backgroundSize: 'cover', height: '200px' }}>
            <div className="absolute inset-0 bg-black opacity-25 rounded"></div>
            <span className="relative z-10">{homeData.card5}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
