import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import backgroundImage from '../assets/—Pngtree—diamond.png';

const Demo = () => {
    return (
        <div className="flex flex-col justify-center items-center bg-black pb-12 overflow-hidden relative w-full">
            {/* Background Images */}
            <div
                className="absolute top-52 z-10 left-[60rem] right-44 bottom-44 bg-cover bg-no-repeat sm:w-44 md:w-32 w-32 h-44 bg-center opacity-30"
                style={{ backgroundImage: `url(${backgroundImage})` }}
            ></div>
            <div
                className="absolute top-24 z-10 left-16 right-0 bottom-0 bg-cover bg-no-repeat sm:w-36 md:w-52 h-44 w-36 bg-center opacity-30"
                style={{ backgroundImage: `url(${backgroundImage})` }}
            ></div>

            <div className="relative w-[85%]  bg-[#141518] text-white py-8 px-6 mt-16 rounded-xl flex flex-col justify-center items-center">
                {/* Content goes here */}


                <div className="flex flex-col items-center w-full text-center">
                    <h1 className="pt-8 text-2xl lg:text-3xl xl:text-4xl font-light leading-relaxed">
                        Design support for all your <br /> creative needs
                    </h1>
                    <p className="py-4 text-base lg:text-lg text-gray-400 leading-relaxed">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quia illo illum architecto provident, alias consectetur dolor nesciunt.
                    </p>
                </div>

                <div className="flex gap-6 mt-6 flex-wrap justify-center">
                    <button className="px-6 py-3 bg-orange-500 text-white rounded-xl flex items-center gap-2">
                        Get in touch <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                    <button className="px-6 py-3 border border-white text-white rounded-xl flex items-center gap-2">
                        Request a demo <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                </div>
            </div>
        </div >
    );
}

export default Demo;
