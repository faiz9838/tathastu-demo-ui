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

            <div className="relative w-[85%] bg-[#141518] text-white p-10 px-6 mt-16 rounded-3xl flex flex-col justify-center items-start overflow-hidden">
                <div className="flex flex-col items-center p-2 justify-center w-full sm:w-[75%] md:w-[60%] lg:w-[50%] text-center">
                    <h1 className="pt-0 text-3xl text-start f lg:text-3xl xl:text-4xl font-semibold leading-10">
                        Design support for all <br /> your  creative needs
                    </h1>
                    <p className="py-4 text-start font-normal  text-base lg:text-sm md:text-base sm:text-base text-gray-300 leading-8">
                        Get a free introduction and discover how you and your team can change the way your source design forever
                    </p>
                </div>

                <div className="flex gap-6 mt-4 mb-4 flex-wrap justify-start">
                    <button className="px-5 py-2 bg-orange-500 text-black font-medium rounded-full flex items-center gap-2">
                        Get in touch <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                    <button className="px-5 py-2 border border-white text-black bg-white font-medium rounded-full flex items-center gap-2">
                        Request a demo <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Demo;
