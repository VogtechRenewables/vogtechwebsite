import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const companyLogo = require('../images/vogtechlogo.PNG');

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="header-container bg-white border border-solid border-gray-200 text-green-600 px-6 md:px-10 flex justify-between items-center">
            <img src={companyLogo} alt="Vogtech Renewables" className="h-10" />
            <nav className="flex items-center">
                <ul className={`header-tabs flex-col md:flex md:flex-row md:space-x-8 mr-6 text-lg text-black absolute md:relative bg-white md:bg-transparent w-full md:w-auto ${menuOpen ? 'flex' : 'hidden'}`}>
                    <li className="relative group">
                        <Link to="/" className="block py-2 px-4 hover:text-green-600 transition duration-300">Home</Link>
                        <span className="absolute left-0 bottom-0 w-full h-0.5 bg-green-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                    </li>
                    <li className="relative group">
                        <Link to="/team" className="block py-2 px-4 hover:text-green-600 transition duration-300">Team</Link>
                        <span className="absolute left-0 bottom-0 w-full h-0.5 bg-green-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                    </li>
                    <li className="relative group">
                        <Link to="/values" className="block py-2 px-4 hover:text-green-600 transition duration-300">Values</Link>
                        <span className="absolute left-0 bottom-0 w-full h-0.5 bg-green-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                    </li>
                    <li className="relative group">
                        <Link to="/sectors" className="block py-2 px-4 hover:text-green-600 transition duration-300">Sectors</Link>
                        <span className="absolute left-0 bottom-0 w-full h-0.5 bg-green-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                    </li>
                    <li className="relative group">
                        <Link to="/projects" className="block py-2 px-4 hover:text-green-600 transition duration-300">Projects</Link>
                        <span className="absolute left-0 bottom-0 w-full h-0.5 bg-green-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                    </li>
                    <li className="relative group">
                        <Link to="/news" className="block py-2 px-4 hover:text-green-600 transition duration-300">News</Link>
                        <span className="absolute left-0 bottom-0 w-full h-0.5 bg-green-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                    </li>
                    <li className="relative group">
                        <Link to="/faq" className="block py-2 px-4 hover:text-green-600 transition duration-300">FAQ</Link>
                        <span className="absolute left-0 bottom-0 w-full h-0.5 bg-green-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                    </li>
                    <li className="relative group">
                        <Link to="/contact" className="block py-2 px-4 hover:text-green-600 transition duration-300">Contact</Link>
                        <span className="absolute left-0 bottom-0 w-full h-0.5 bg-green-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                    </li>
                    <li className="mt-4 md:mt-0">
                        <select className="bg-white border border-gray-300 rounded px-3 py-1 text-gray-700 w-full md:w-auto">
                            <option value="en">English</option>
                            <option value="fr">French</option>
                        </select>
                    </li>
                </ul>
                <div className="md:hidden ml-6">
                    <button onClick={toggleMenu} className="text-2xl text-green-600 focus:outline-none">
                        {menuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </nav>
        </div>
    );
}

export default Header;
