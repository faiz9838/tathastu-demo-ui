import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav
            className={`flex justify-between items-center px-10 py-4 md:px-20 sm:px-5  ${isOpen ? "bg-black" : "bg-transparent"
                } text-white transition duration-300`}
        >

            <div className="text-2xl font-bold">
                <h2>Logo</h2>
            </div>


            <div className="flex items-center gap-6">

                <button className="px-5 py-2 bg-transparent border border-white text-white rounded-full font-bold hover:bg-gray-800 transition">
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
                    } flex-col absolute top-16 right-0 w-screen bg-black px-10 py-6 text-white justify-center`}
            >

                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mt-6 items-center">

                    <div>
                        <header className="text-gray-400 text-sm mb-2">Tathastu</header>
                        <hr className="mb-4 border-gray-600" />
                        <ul className="space-y-2">
                            <li className="text-xl">About</li>
                            <li className="text-xl">Blog</li>
                            <li className="text-xl">Press</li>
                            <li className="text-xl">Career</li>
                        </ul>
                    </div>


                    <div>
                        <header className="text-gray-400 text-sm mb-2">Industries</header>
                        <hr className="mb-4 border-gray-600" />
                        <ul className="space-y-2">
                            <li>About</li>
                            <li>Blog</li>
                            <li>Press</li>
                            <li>Career</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>


                    <div>
                        <header className="text-gray-400 text-sm mb-2">Professions</header>
                        <hr className="mb-4 border-gray-600" />
                        <ul className="space-y-2">
                            <li>About</li>
                            <li>Blog</li>
                            <li>Press</li>
                            <li>Career</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>


                </div>
            </ul>
        </nav>
    );
};

export default Navbar;
