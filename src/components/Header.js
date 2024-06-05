import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const companyLogo = require('../images/vogtechlogo.PNG');

    return (
        <div className="header-container bg-white border border-solid border-gray-200 text-green-600 px-10 flex justify-between items-center">
            <img src={companyLogo} alt="Vogtech Renewables" />
            <nav className="flex items-center">
                <ul className="header-tabs flex space-x-8 mr-6 text-lg text-black">
                    <li className="relative group">
                        <Link to="/" className="hover:text-green-600 transition duration-300">Home</Link>
                        <span className="absolute left-0 bottom-0 w-full h-0.5 bg-green-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                    </li>
                    <li className="relative group">
                        <Link to="/team" className="hover:text-green-600 transition duration-300">Team</Link>
                        <span className="absolute left-0 bottom-0 w-full h-0.5 bg-green-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                    </li>
                    <li className="relative group">
                        <Link to="/values" className="hover:text-green-600 transition duration-300">Values</Link>
                        <span className="absolute left-0 bottom-0 w-full h-0.5 bg-green-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                    </li>
                    <li className="relative group">
                        <Link to="/sectors" className="hover:text-green-600 transition duration-300">Sectors</Link>
                        <span className="absolute left-0 bottom-0 w-full h-0.5 bg-green-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                    </li>
                    <li className="relative group">
                        <Link to="/projects" className="hover:text-green-600 transition duration-300">Projects</Link>
                        <span className="absolute left-0 bottom-0 w-full h-0.5 bg-green-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                    </li>
                    <li className="relative group">
                        <Link to="/news" className="hover:text-green-600 transition duration-300">News</Link>
                        <span className="absolute left-0 bottom-0 w-full h-0.5 bg-green-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                    </li>
                    <li className="relative group">
                        <Link to="/faq" className="hover:text-green-600 transition duration-300">FAQ</Link>
                        <span className="absolute left-0 bottom-0 w-full h-0.5 bg-green-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                    </li>
                    <li className="relative group">
                        <Link to="/contact" className="hover:text-green-600 transition duration-300">Contact</Link>
                        <span className="absolute left-0 bottom-0 w-full h-0.5 bg-green-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                    </li>
                </ul>
                <select className="bg-white border border-gray-300 rounded px-3 py-1 text-gray-700">
                    <option value="en">English</option>
                    <option value="fr">French</option>
                </select>
            </nav>
        </div>
    );
}

export default Header;
