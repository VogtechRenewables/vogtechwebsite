import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-[#228b22] shadow-lg py-12 md:px-16 px-6">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center md:text-left">
                    <h2 className="font-bold text-white text-3xl mb-4">Vogtech Renewables</h2>
                    <p className="font-medium text-sm text-white max-w-xs md:mx-0 mx-auto">
                        Sustainable Fuels, Infinite Journeys: Powering the World Responsibly
                    </p>
                </div>
                <nav className="text-center md:text-left">
                    <h3 className="font-medium text-white text-lg mb-4">Menu</h3>
                    <ul className="space-y-2">
                        <li><Link to="/" className="font-medium text-sm text-white hover:text-blue-500 transition-colors">Home</Link></li>
                        <li><Link to="/team" className="font-medium text-sm text-white hover:text-blue-500 transition-colors">Team</Link></li>
                        <li><Link to="/values" className="font-medium text-sm text-white hover:text-blue-500 transition-colors">Values</Link></li>
                        <li><Link to="/sectors" className="font-medium text-sm text-white hover:text-blue-500 transition-colors">Sectors</Link></li>
                        <li><Link to="/projects" className="font-medium text-sm text-white hover:text-blue-500 transition-colors">Projects</Link></li>
                        <li><Link to="/news" className="font-medium text-sm text-white hover:text-blue-500 transition-colors">News</Link></li>
                        <li><Link to="/faq" className="font-medium text-sm text-white hover:text-blue-500 transition-colors">FAQ</Link></li>
                        <li><Link to="/contact" className="font-medium text-sm text-white hover:text-blue-500 transition-colors">Contact</Link></li>
                    </ul>
                </nav>
                <div className="text-center md:text-left">
                    <h3 className="font-medium text-white text-lg mb-4">Contact Info</h3>
                    <ul className="space-y-2">
                        <li><a href="mailto:info@vogtech.ca" className="font-medium text-sm text-white hover:text-blue-500 transition-colors">Email: info@vogtech.ca</a></li>
                        <li><span className="font-medium text-sm text-white">Address: 1730 St. Laurent Blvd Suite #852, Ottawa, ON K1G 3Y7, Canada</span></li>
                    </ul>
                </div>
            </div>
            <div className="flex md:flex-row flex-col md:items-center justify-between w-full md:gap-0 gap-4 mt-[120px]">
                <span className="text-[15px] text-white">@2023 Vogtech Renewables All rights reserved</span>
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
