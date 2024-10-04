import React, { useState } from 'react';
import logo from '../assets/logo.png'; // Ensure the correct path for the logo

const Navbar = ({ setCategory }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleCategoryChange = (category) => {
        setCategory(category);
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top
        if (isOpen) {
            toggleMenu(); // Close the mobile menu if it's open
        }
    };

    return (
        <nav className="static top-0 z-50 py-3">
            <div className="container mx-auto px-4 relative text-sm">
                <div className="fixed top-0 left-0 right-0 z-50 py-3 backdrop-blur w-full p-8 border-neutral-700/80 flex justify-between items-center">
                    {/* Logo */}
                    <div className="flex items-center flex-shrink-0">
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Blog Ouse</span>
                    </div>

                    {/* Desktop Menu */}
                    <ul className="hidden lg:flex ml-14 space-x-12">
                        <li className="nav-item">
                            <div className="nav-link cursor-pointer text-lg hover:text-gray-300" onClick={() => handleCategoryChange('technology')}>Technology</div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link cursor-pointer text-lg hover:text-gray-300" onClick={() => handleCategoryChange('business')}>Business</div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link cursor-pointer text-lg hover:text-gray-300" onClick={() => handleCategoryChange('health')}>Health</div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link cursor-pointer text-lg hover:text-gray-300" onClick={() => handleCategoryChange('sport')}>Sport</div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link cursor-pointer text-lg hover:text-gray-300" onClick={() => handleCategoryChange('entertainment')}>Entertainment</div>
                        </li>
                    </ul>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden">
                        <button onClick={toggleMenu} className="text-white focus:outline-none">
                            {isOpen ? (
                                // Close icon
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            ) : (
                                // Open icon
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={`fixed z-30 inset-0 bg-black bg-opacity-90 backdrop-blur-sm lg:hidden transition-transform duration-300 ease-in-out transform h-screen ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className="flex flex-col items-center justify-center h-full space-y-4 p-4">
                        <div className="nav-link cursor-pointer text-white text-3xl hover:text-gray-300" onClick={() => handleCategoryChange('technology')}>Technology</div>
                        <div className="nav-link cursor-pointer text-white text-3xl hover:text-gray-300" onClick={() => handleCategoryChange('business')}>Business</div>
                        <div className="nav-link cursor-pointer text-white text-3xl hover:text-gray-300" onClick={() => handleCategoryChange('health')}>Health</div>
                        <div className="nav-link cursor-pointer text-white text-3xl hover:text-gray-300" onClick={() => handleCategoryChange('sport')}>Sport</div>
                        <div className="nav-link cursor-pointer text-white text-3xl hover:text-gray-300" onClick={() => handleCategoryChange('entertainment')}>Entertainment</div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
