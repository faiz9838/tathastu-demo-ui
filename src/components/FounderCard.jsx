import React from 'react'
import myImg from "../assets/FAIZ_AHMAD-removebg-preview.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeftAlt } from '@fortawesome/free-solid-svg-icons'
const FounderCard = () => {
    return (
        <div className="w-full bg-[#0D0E10] flex flex-col  items-center px-0 py-16 sm:py-16  md:px-16 -mt-2 lg:px-0 lg:py-6 md:py-16 ">
            <div className="w-full bg-[#0D0E10] flex flex-col  items-center px-10 py-0 md:px-16 -mt-2 lg:px-20 lg:py-0">
                <div className="mt-0 w-full bg-[#141518] rounded-3xl p-6 relative flex flex-col lg:flex-row gap-8 ">
                    <div className="absolute bg-[#141518] px-8 py-8  rounded-full -top-12 left-14 shadow-md">
                        <FontAwesomeIcon icon={faQuoteLeftAlt} className="text-white text-4xl" />
                    </div>
                    <div className="lg:w-2/3 px-6 text-white space-y-11 md:mb-2">
                        <h2 className="font-normal text-xl lg:text-2xl leading-8 my-14 px-4 italic" >
                            You have got to keep in mind the big goals even while doing small things, so that even the small things lead you in the direction.
                        </h2>
                        <div className='space-y-1'>
                            <h3 className="text-lg font-bold italic  px-4">Chaitan Jain</h3>
                            <p className="text-xs text-gray-400 px-4 md:text-sm" >Founder - Tathastu</p>
                        </div>
                    </div>
                    <div className="lg:w-1/3 relative md:block flex justify-center items-end">
                        <div className="absolute bg-blue-500 sm:block hidden w-40 h-40 md:left-0  lg:block rounded-full md:hidden bottom-8 left-6"></div>
                        <div className="absolute bg-orange-500 w-40 h-40 rounded-[10rem_0rem_0rem] -bottom-6  left-36 sm:block md:hidden hidden lg:block "></div>
                        <img
                            src={myImg}
                            alt="Person"
                            className="relative z-10 w-60 lg:block  lg:w-80 filter grayscale contrast-150 -bottom-6  sm:hidden brightness-70 hidden md:hidden "
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FounderCard