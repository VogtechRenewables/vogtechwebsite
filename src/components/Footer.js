import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import LanguageContext from '../context/LanguageContext';

const Footer = () => {
    const { selectedLanguage } = useContext(LanguageContext);
    
    // English Content
    const englishContent = {
        name: "Vogtech Renewables",
        smallDesc: "Sustainable Fuels, Infinite Journeys: Powering the World Responsibly",
        menu: "Menu",
        menu1: "Home",
        menu2: "Team",
        menu3: "Values",
        menu4: "Sectors",
        menu5: "Projects",
        menu6: "News",
        menu7: "FAQ",
        menu8: "Contact",
        contact: "Contact Info",
        contactTitle1: "Email",
        contact1: "info@vogtech.ca",
        contactTitle2: "Address",
        contact2: "1730 St. Laurent Blvd Suite #852, Ottawa, ON K1G 3Y7, Canada"
    };

    // French Content
    const frenchContent = {
        name: "Vogtech Renewables",
        smallDesc: "Carburants durables, voyages infinis : alimenter le monde de manière responsable",
        menu: "Menu",
        menu1: "Page D'acceuil",
        menu2: "Équipe",
        menu3: "Valeurs",
        menu4: "Secteurs",
        menu5: "Projets",
        menu6: "Nouvelles",
        menu7: "FAQ",
        menu8: "Contact",
        contact: "Contactez-nous",
        contactTitle1: "Email",
        contact1: "info@vogtech.ca",
        contactTitle2: "Adresse",
        contact2: "1730 St. Laurent Blvd Suite #852, Ottawa, ON K1G 3Y7, Canada"
    };

    const content = selectedLanguage === 'English' ? englishContent : frenchContent;

    return (
        <footer className="bg-[#228b22] shadow-lg py-12 md:px-16 px-6">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center md:text-left">
                    <h2 className="font-bold text-white text-3xl mb-4">{content.name}</h2>
                    <p className="font-medium text-sm text-white max-w-xs md:mx-0 mx-auto">
                        {content.smallDesc}
                    </p>
                </div>
                <nav className="text-center md:text-left">
                    <h3 className="font-medium text-white text-lg mb-4">{content.menu}</h3>
                    <ul className="space-y-2">
                        <li><Link to="/" className="font-medium text-sm text-white hover:text-blue-500 transition-colors">{content.menu1}</Link></li>
                        <li><Link to="/team" className="font-medium text-sm text-white hover:text-blue-500 transition-colors">{content.menu2}</Link></li>
                        <li><Link to="/values" className="font-medium text-sm text-white hover:text-blue-500 transition-colors">{content.menu3}</Link></li>
                        <li><Link to="/sectors" className="font-medium text-sm text-white hover:text-blue-500 transition-colors">{content.menu4}</Link></li>
                        <li><Link to="/projects" className="font-medium text-sm text-white hover:text-blue-500 transition-colors">{content.menu5}</Link></li>
                        <li><Link to="/news" className="font-medium text-sm text-white hover:text-blue-500 transition-colors">{content.menu6}</Link></li>
                        <li><Link to="/faq" className="font-medium text-sm text-white hover:text-blue-500 transition-colors">{content.menu7}</Link></li>
                        <li><Link to="/contact" className="font-medium text-sm text-white hover:text-blue-500 transition-colors">{content.menu8}</Link></li>
                    </ul>
                </nav>
                <div className="text-center md:text-left">
                    <h3 className="font-medium text-white text-lg mb-4">{content.contact}</h3>
                    <ul className="space-y-2">
                        <li><a href={`mailto:${content.contact1}`} className="font-medium text-sm text-white hover:text-blue-500 transition-colors">{content.contactTitle1}: {content.contact1}</a></li>
                        <li><span className="font-medium text-sm text-white">{content.contactTitle2}: {content.contact2}</span></li>
                    </ul>
                </div>
            </div>
            <div className="flex md:flex-row flex-col md:items-center justify-between w-full md:gap-0 gap-4 mt-[120px]">
                <span className="text-[15px] text-white">@2023 {content.name} All rights reserved</span>
                <div className='flex items-center gap-[18px]'>
                    <Link to="/terms" className="font-medium text-[15px] mb-4 text-white">
                        Terms & Conditions
                    </Link>
                    <Link to="/privacy" className="font-medium text-[15px] mb-4 text-white">
                        Privacy Policy
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
