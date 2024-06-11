import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const companyLogo = require('../images/vogtechlogo.PNG');

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <div className="header-container bg-white border border-solid border-gray-200 text-green-600 px-6 md:px-10 flex justify-between items-center">
            <img src={companyLogo} alt="Vogtech Renewables" className="h-10" />
            <nav className="flex items-center">
                <div className="hidden md:block">
                    <ul className="header-tabs flex space-x-8 text-lg text-black">
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
                </div>
                <div className="md:hidden flex items-center">
                    <button onClick={toggleMenu} className="text-2xl text-green-600 focus:outline-none">
                        {menuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                    <select className="ml-4 bg-white border border-gray-300 rounded px-3 py-1 text-gray-700 w-auto">
                        <option value="en">English</option>
                        <option value="fr">French</option>
                    </select>
                </div>
            </nav>
            {menuOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end" onClick={closeMenu}>
                    <div className="bg-white w-64 h-full shadow-lg p-4 relative" onClick={(e) => e.stopPropagation()}>
                        <button onClick={closeMenu} className="absolute top-4 right-4 text-2xl text-green-600">
                            <FaTimes />
                        </button>
                        <ul className="space-y-4 text-lg text-black">
                            <li>
                                <Link to="/" className="block py-2 hover:text-green-600 transition duration-300" onClick={closeMenu}>Home</Link>
                            </li>
                            <li>
                                <Link to="/team" className="block py-2 hover:text-green-600 transition duration-300" onClick={closeMenu}>Team</Link>
                            </li>
                            <li>
                                <Link to="/values" className="block py-2 hover:text-green-600 transition duration-300" onClick={closeMenu}>Values</Link>
                            </li>
                            <li>
                                <Link to="/sectors" className="block py-2 hover:text-green-600 transition duration-300" onClick={closeMenu}>Sectors</Link>
                            </li>
                            <li>
                                <Link to="/projects" className="block py-2 hover:text-green-600 transition duration-300" onClick={closeMenu}>Projects</Link>
                            </li>
                            <li>
                                <Link to="/news" className="block py-2 hover:text-green-600 transition duration-300" onClick={closeMenu}>News</Link>
                            </li>
                            <li>
                                <Link to="/faq" className="block py-2 hover:text-green-600 transition duration-300" onClick={closeMenu}>FAQ</Link>
                            </li>
                            <li>
                                <Link to="/contact" className="block py-2 hover:text-green-600 transition duration-300" onClick={closeMenu}>Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Header;
