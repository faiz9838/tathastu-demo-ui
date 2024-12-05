import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faPhone, faShop } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/tathastu-logo.png";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav
            className={`flex sm:h-auto md:h-auto justify-between items-center px-10 py-4 md:px-20 sm:px-5 ${isOpen ? "bg-black" : "bg-transparent"
                } text-white transition duration-300`}
        >
            <div className="flex items-center">
                <Link to="/">
                    <img
                        src={logo}
                        alt="Tathastu Logo"
                        className="h-10 sm:h-12 md:h-14 object-contain"
                    />
                </Link>

            </div>

            <div className="flex items-center gap-6">
                <button className="px-5 sm:block hidden py-1.5 bg-transparent border border-white text-white rounded-full font-semibold hover:bg-gray-800 transition">
                    Get in touch <FontAwesomeIcon icon={faArrowRight} />
                </button>

                <div
                    className="flex flex-col gap-1 cursor-pointer"
                    onClick={toggleMenu}
                >
                    <span className="w-6 h-0.5 bg-white"></span>
                    <span className="w-4 h-0.5 bg-white"></span>
                    <span className="w-6 h-0.5 bg-white"></span>
                </div>
            </div>

            <ul
                className={`${isOpen ? "flex" : "hidden"
                    } flex-col absolute top-16 right-0 w-screen h-auto bg-black px-10 py-6 text-white pb-16`}
            >
                <div className="flex flex-wrap gap-10 mt-2 justify-evenly items-start">
                    <div className="w-full md:w-1/4">
                        <header className="text-white text-sm sm:text-base mb-2">Tathastu</header>
                        <div className="flex items-center mb-4">
                            <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
                            <div className="flex-1 h-[1.5px] bg-gradient-to-r from-white to-white/0 "></div>
                        </div>
                        <ul className="space-y-4 sm:space-y-4 md:space-y-6 lg:space-y-8">
                            <li className="text-2xl sm:text-4xl text-white">About</li>
                            <li className="text-xl sm:text-3xl text-gray-400/90">Industries Solution</li>
                            <li className="text-xl sm:text-3xl text-gray-400/90">Professions</li>
                            <li className="text-xl sm:text-3xl text-gray-400/90">Haredwares</li>
                        </ul>
                    </div>

                    <div className="w-full md:w-1/4">
                        <header className="text-white text-sm sm:text-base mb-2">Industries</header>
                        <div className="flex items-center mb-4">
                            <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
                            <div className="flex-1 h-[1.5px] bg-gradient-to-r from-white to-white/0 "></div>
                        </div>
                        <ul className="space-y-4">
                            <li className="text-sm sm:text-base text-gray-400/90">
                                <Link to="/about" className="hover:text-white transition-colors duration-200">About</Link>
                            </li>
                            <li className="text-sm sm:text-base text-gray-400/90">
                                <Link to="/blog" className="hover:text-white transition-colors duration-200">Blog</Link>
                            </li>
                            <li className="text-sm sm:text-base text-gray-400/90">
                                <Link to="/press" className="hover:text-white transition-colors duration-200">Press</Link>
                            </li>
                            <li className="text-sm sm:text-base text-gray-400/90">
                                <Link to="/career" className="hover:text-white transition-colors duration-200">Career</Link>
                            </li>
                            <li className="text-sm sm:text-base text-gray-400/90">
                                <Link to="/reseller" className="hover:text-white transition-colors duration-200">Became a Reseller</Link>
                            </li>
                            <li className="text-sm sm:text-base text-gray-400/90">
                                <Link to="/demo" className="hover:text-white transition-colors duration-200">Request a Demo</Link>
                            </li>
                            <li className="text-sm sm:text-base text-gray-400/90">
                                <Link to="/contact" className="hover:text-white transition-colors duration-200">Contact Us</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="w-full md:w-1/4 md:block hidden">
                        <header className="text-white text-sm sm:text-base mb-2">Professions</header>
                        <div className="flex items-center mb-4">
                            <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
                            <div className="flex-1 h-[1.5px] bg-gradient-to-r from-white to-white/0 "></div>
                        </div>
                        <ul className="space-y-8">
                            <li className="mt-8 flex justify-start items-center">
                                <FontAwesomeIcon className="text-2xl mt-2 text-gray-300/90" icon={faPhone} />
                                <a href="#" className="hover:text-white transition py-1 px-3 text-xl sm:text-2xl text-gray-300/80">+91-9820192970</a>
                            </li>
                            <li className="mt-8 flex justify-start items-center">
                                <FontAwesomeIcon className="text-2xl mt-2 text-gray-300/90" icon={faEnvelope} />
                                <a href="#" className="hover:text-white transition py-1 px-3 text-base sm:text-2xl text-gray-300/80">chetan@tathastu.global</a>
                            </li>
                            <li className="mt-8 flex justify-start items-start text-start flex-col space-y-2">
                                <h5 className="text-xs sm:text-sm text-gray-400/90">BUSINESS HOURS</h5>
                                <h2 className="text-sm sm:text-base text-gray-400/90">Monday-Friday: 9am to 6pm (IST)</h2>
                            </li>
                        </ul>
                    </div>
                </div>
            </ul>
        </nav>
    );
};

export default Navbar;
