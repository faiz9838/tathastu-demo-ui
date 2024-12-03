import { faFacebook, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import logo from '../assets/tathastu-logo.png';
import { faAddressCard, faContactBook, faEnvelope, faPhone, faVoicemail } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-6 flex flex-col ">
            {/* <div className="flex-shrink-0 absolute w-96 px-20 mb-40 h-auto sm:block hidden">
                <a href="#">
                    <img src={logo} alt="Logo" className="w-44 h-auto sm:block hidden lg:block md:block" />
                </a>
            </div> */}
            <div className="container mx-auto px-8 md:px-24 flex flex-wrap md:flex-nowrap justify-between items-start gap-4 lg:gap-12">

                <div className="text-start flex-1 min-w-[150px]">
                    <h2 className="text-xs text-gray-300 font-semibold uppercase pb-4">Tathastu</h2>
                    <hr className="border-t border-gray-600" />
                    <ul className="text-gray-400 text-xs pt-4 space-y-3 ">
                        <li>
                            <a href="#" className="hover:text-white transition">About</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-white transition">Blog</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-white transition">Press</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-white transition">Career</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-white transition">Contact Us</a>
                        </li>
                    </ul>
                </div>

                <div className="text-start flex-1 min-w-[150px]">
                    <h2 className="text-xs text-gray-300 font-semibold uppercase pb-4">Industries</h2>
                    <hr className="border-t border-gray-600" />
                    <ul className="text-gray-400 text-xs pt-4 space-y-3">
                        <li>
                            <a href="#" className="hover:text-white transition">AEC</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-white transition">Media & Entertainment</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-white transition">Manufacturing</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-white transition">Education</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-white transition">Government</a>
                        </li>
                    </ul>
                </div>

                <div className="text-start flex-1 min-w-[150px]">
                    <h2 className="text-xs text-gray-300 font-semibold uppercase pb-4">Professions</h2>
                    <hr className="border-t border-gray-600" />
                    <ul className="text-gray-400 text-xs pt-4 space-y-3">
                        <li>
                            <a href="#" className="hover:text-white transition">Architecture & Interior Design</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-white transition">VFX Artist</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-white transition">Game Design and Development</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-white transition">Product & Industrial Design</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-white transition">Advertising and Marketing</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-white transition">Fashion Design</a>
                        </li>
                    </ul>
                </div>

                <div className="text-start flex-1 min-w-[150px]">
                    <h2 className="text-xs text-gray-300 font-semibold uppercase pb-4">Contact</h2>
                    <hr className="border-t border-gray-600" />
                    <ul className="text-gray-400 text-sm pt-4 space-y-3">
                        <li className='flex flex-row justify-start items-center'>
                            <FontAwesomeIcon className='text-2xl p-3' icon={faEnvelope} />
                            <div className='flex flex-col'>
                                <h3 className='font-light'>Email ID</h3>
                                <a href="#" className="hover:text-white text-sm  transition py-1">chetan@tathastu.global</a>
                            </div>
                        </li>
                        <li className='flex flex-row justify-start items-center'>
                            <FontAwesomeIcon className='text-2xl p-3' icon={faPhone} />
                            <div className='flex flex-col'>
                                <h3 className='font-light'>Contact Number</h3>
                                <a href="#" className="hover:text-white transition py-1">+91-9820192970</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <hr className="border-t border-gray-600 mt-12" />

            <div className="container mx-auto px-6 md:px-24 lg:px-20 flex justify-between items-center mt-4">
                <p className="text-xs text-gray-400">Copyright © Faiz Ahmad 2024</p>
                <div className="flex gap-6">
                    <a href="#" className="hover:text-gray-400 transition">
                        <FontAwesomeIcon icon={faInstagram} className="text-xl" />
                    </a>
                    <a href="#" className="hover:text-gray-400 transition">
                        <FontAwesomeIcon icon={faFacebook} className="text-xl" />
                    </a>
                    <a href="#" className="hover:text-gray-400 transition">
                        <FontAwesomeIcon icon={faYoutube} className="text-xl" />
                    </a>
                    <a href="#" className="hover:text-gray-400 transition">
                        <FontAwesomeIcon icon={faLinkedin} className="text-xl" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
