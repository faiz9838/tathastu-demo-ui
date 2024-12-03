import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import backgroundImage from '../assets/—Pngtree—diamond.png';

const Demo = () => {
    return (
        <div className="flex flex-col justify-center items-center bg-black pb-12 overflow-hidden relative w-full">
            <div
                className="absolute top-56 z-10 left-[60rem] right-44 bottom-44 bg-cover bg-no-repeat sm:w-44 md:w-32 w-32 h-44 bg-center opacity-30"
                style={{ backgroundImage: `url(${backgroundImage})` }}
            ></div>
            <div
                className="absolute top-24 z-10 left-16 right-0 bottom-0 bg-cover bg-no-repeat sm:w-36 md:w-52 h-44 w-36 bg-center opacity-30"
                style={{ backgroundImage: `url(${backgroundImage})` }}
            ></div>

            <div className="relative w-[85%] bg-[#141518] text-white p-10  px-10 mt-16 rounded-3xl flex flex-col justify-center items-center overflow-hidden">

                <div className="flex flex-col w-full sm:w-[75%] md:w-[60%] lg:w-[50%] lg:text-center text-start lg:justify-center md:justify-center sm:text-left">
                    <h1 className="text-3xl sm:text-3xl lg:text-4xl font-semibold leading-snug sm:leading-normal">
                        Design support for all <br /> your creative needs
                    </h1>
                    <p className="mt-4 text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed">
                        Get a free introduction and discover how you and your team can change the way you source design forever.
                    </p>
                </div>


                <div className="flex gap-4 mt-6 flex-wrap w-full sm:w-auto justify-start sm:justify-start">
                    <button className="px-4 py-2 bg-orange-500 text-black font-medium rounded-full flex items-center gap-2">
                        Get in touch <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                    <button className="px-4 py-2 border border-white text-black bg-white font-medium rounded-full flex items-center gap-2">
                        Request a demo <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                </div>
            </div>


        </div>
    );
};

export default Demo;
