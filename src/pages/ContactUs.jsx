import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import DemoCard from '../components/DemoCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPuzzlePiece, faShapes, faDesktop, faTools, faPhone } from "@fortawesome/free-solid-svg-icons";
import { HeroSection } from '../components/HeroSection';
import AuthPage from './AuthPage';
import ContactFrom from '../components/Auth/ContactFrom';

const ContactUs = () => {
    return (
        <div className='bg-[#0D0E10]'>
            <Navbar />


            <div className="w-auto flex justify-center px-4 md:px-10">
                <div className="w-full flex flex-col lg:flex-row p-6 items-start justify-between text-left mt-12  gap-6">
                    {/* Content Section */}
                    <div className=" p-6 hidden md:block lg:block lg:w-1/2">
                        <div className='text-start'>
                            <h1 className='text-4xl md:3xl text-gray-200'>Lets talk over <br />coffee!</h1>
                            <h3 className='text-base text-gray-400 py-4'>Fill out the form below and we will get in touch.</h3>
                        </div>
                        <div>
                            <ul className="sm:space-y-8  flex flex-row justify-start gap-16 mt-20 md:space-y-0 items-center p-2">
                                <li className=" flex justify-start flex-col items-start">
                                    <FontAwesomeIcon className="text-xl md:text-2xl text-gray-300" icon={faPhone} />
                                    <a href="tel:+919820192970" className="text-lg sm:text-xl md:text-lg lg:text-base text-gray-300/70 hover:text-white transition py-3">+91-9820192970</a>
                                </li>
                                <li className="mt-6 flex justify-start flex-col items-start">
                                    <FontAwesomeIcon className="text-xl md:text-2xl text-gray-300" icon={faEnvelope} />
                                    <a href="mailto:chetan@tathastu.global" className="text-lg sm:text-xl md:text-lg lg:text-base text-gray-300/70 hover:text-white transition py-3 ">chetan@tathastu.global</a>
                                </li>
                            </ul>
                            <li className="mt-6 flex flex-col items-start space-y-2">
                                <h5 className="text-xs sm:text-xs text-gray-400">BUSINESS HOURS</h5>
                                <h2 className="text-sm sm:text-base text-gray-400">Monday-Friday: 9am to 6pm (IST)</h2>
                            </li>
                        </div>
                    </div>


                    <div className=" mt-0 p-6 flex justify-center items-center w-full lg:w-1/2">

                        <ContactFrom />

                    </div>
                </div>
            </div>


            <div className="bg-[#0D0E10] flex flex-col justify-center items-center mt-0 pt-10 w-full relative">
                {/* <div className="w-[6px] h-[6px] right-72  bg-white rounded-full absolute"></div>
            <div
                className="flex-1 m-[-1px] h-[1.3px] bg-gradient-to-r from-white to-white/0"
                style={{ transform: "rotate(-90deg)" }}
            ></div> */}


                <div className="text-center flex flex-col justify-center items-center pt-10 md:pt-6 md:px-6 lg:px-0 sm:pt-4  h-auto text-white  w-full max-w-screen-md mx-auto min-w-screen-sm px-4">
                    <h1 className="text-xl sm:text-2xl lg:text-4xl font-semibold leading-snug mt-4 text-center">
                        Find the Perfect Technology for Smooth Operations & Stunning Results!
                    </h1>
                </div>


                <div className="mini-div-wrapper flex md:px-10 lg:px-16 flex-wrap gap-10 justify-center mt-16 pb-16">

                    <div className="box relative p-4 bg-[#141518] text-white text-left backdrop-blur-md border border-[rgba(255,255,255,0.18)] rounded-[1.5rem] w-[240px] h-[150px] text-lg font-medium">
                        Hardware
                        <FontAwesomeIcon
                            icon={faTools}
                            className="absolute bottom-6 right-6 text-4xl text-white/70"
                        />
                    </div>



                    <div className="box relative p-4 bg-[#141518] text-white text-left backdrop-blur-md border border-[rgba(255,255,255,0.18)] rounded-[1.5rem] w-[240px] h-[150px] text-lg font-medium">
                        Plugins
                        <FontAwesomeIcon
                            icon={faPuzzlePiece}
                            className="absolute bottom-6 right-6 text-4xl text-white/70"
                        />
                    </div>

                    <div className="box relative p-4 bg-[#141518] text-white text-left backdrop-blur-md border border-[rgba(255,255,255,0.18)] rounded-[1.5rem] w-[240px] h-[150px] text-lg font-medium">
                        2D/3D
                        <FontAwesomeIcon
                            icon={faShapes}
                            className="absolute bottom-6 right-6 text-4xl text-white/70"
                        />
                    </div>



                    <div className="box relative p-4 bg-[#141518] text-white text-left backdrop-blur-md border border-[rgba(255,255,255,0.18)] rounded-[1.5rem] w-[240px] h-[150px] text-lg font-medium">
                        Applications
                        <FontAwesomeIcon
                            icon={faDesktop}
                            className="absolute bottom-6 right-6 text-4xl text-white/70"
                        />
                    </div>
                </div>
                <div className="flex justify-center items-start w-full h-10 bg-transparent space-x-4 -mt-4 ">
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                </div>



            </div>
            <DemoCard />
            <Footer />
        </div>
    )
}

export default ContactUs