import { faArrowRight, faQuoteLeftAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import myImg from "../assets/FAIZ_AHMAD-removebg-preview.png"

const Community = () => {
    return (
        <div className="w-full bg-black flex flex-col items-center px-10 py-16 -mt-2 lg:px-24 lg:py-24">
            <div className="w-full flex flex-col lg:flex-row justify-between gap-8">
                <div className="w-full lg:w-1/2 px-4">
                    <h1 className="text-white text-2xl lg:text-4xl font-normal leading-10 ">
                        Join the community <br /> of Millions
                    </h1>
                    <button className="mt-8 px-6 py-2 rounded-full bg-orange-500 text-black text-sm hover:bg-orange-600 transition font-medium">
                        Get in Touch <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                </div>
                <div className="w-full lg:w-1/2 px-4 flex flex-col space-y-6">
                    {[
                        { label: "NUMBER OF HARDWARES", value: "20+", color: "text-blue-500" },
                        { label: "NUMBER OF PLUGINS", value: "80+", color: "text-orange-500" },
                        { label: "CLIENT SERVCED", value: "4100+", color: "text-white" },
                    ].map((item, index) => (
                        <div key={index} className="space-y-6">
                            <div className="flex items-center gap-2  ">
                                <h3 className="text-white text-sm">{item.label}</h3>
                                <div className="w-[6px] h-[6px] m-0 bg-white rounded-full"></div>
                                <div className="flex-1 m-[-10px] h-[1.3px] bg-gradient-to-r from-white to-white/0"></div>
                            </div>
                            <h1 className={`text-6xl font-semibold ${item.color}`}>{item.value}</h1>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-24 w-full bg-[#141518] rounded-3xl p-6 relative flex flex-col lg:flex-row gap-8 ">
                <div className="absolute bg-[#141518] px-8 py-8  rounded-full -top-12 left-14 shadow-md">
                    <FontAwesomeIcon icon={faQuoteLeftAlt} className="text-white text-4xl" />
                </div>
                <div className="lg:w-2/3 text-white space-y-11">
                    <h2 className="font-normal text-xl lg:text-2xl leading-8 my-14 px-6 italic" >
                        You have got to keep in mind the big goals even while doing small things, so that even the small things lead you in the direction.
                    </h2>
                    <div className='space-y-1'>
                        <h3 className="text-lg font-bold italic  px-6">Chaitan Jain</h3>
                        <p className="text-xs text-gray-400 px-6">Founder - Tathastu</p>
                    </div>
                </div>
                <div className="lg:w-1/3 relative flex justify-center items-end">
                    <div className="absolute bg-blue-500 w-40 h-40 rounded-full bottom-5 left-4 hidden md:block"></div>
                    <div className="absolute bg-orange-500 w-40 h-36 rounded-[10rem_0rem_0rem] -bottom-6 left-32 hidden md:block"></div>
                    <img
                        src={myImg}
                        alt="Person"
                        className="relative z-10 w-60 lg:w-72 filter grayscale contrast-150 -bottom-6 brightness-70 hidden md:block "
                    />
                </div>
            </div>
        </div>
    )
}

export default Community;
