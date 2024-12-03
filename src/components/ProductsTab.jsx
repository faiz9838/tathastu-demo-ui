import React from "react";
import bgImg from "../assets/background.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const ProductsTab = () => {
    return (
        <div className="w-full mt-24 pb-8 text-white text-center px-6 lg:px-24 flex justify-center">
            <div className="w-full h-auto bg-[#141518] rounded-2xl flex flex-col lg:flex-row items-center lg:items-stretch justify-between gap-8 p-8">

                <div
                    className="w-full lg:w-1/2 h-[400px] lg:h-[550px] bg-cover bg-center rounded-2xl flex items-start justify-end relative"
                    style={{ backgroundImage: `url(${bgImg})` }}
                >
                    <button className="px-5 py-4 bg-orange-500 text-black rounded-full absolute top-5 right-5 hover:bg-orange-600">
                        <FontAwesomeIcon className="text-lg" icon={faArrowRight} />
                    </button>
                </div>


                <div className="w-full lg:w-1/2 flex flex-col items-start justify-between text-left">
                    <div>
                        <h1 className="text-4xl  text-wrap lg:text-3xl font-semibold mb-6 leading-10">
                            Cutting-edge solutions for Industries
                        </h1>
                        <hr className="border-gray-100 mb-3 mt-32 h-[1.5px] my-2 bg-gray-200 border-0 rounded dark:bg-gray-400" />
                        <h2 className="text-xl lg:text-2xl font-medium">Media & Entertainment</h2>
                        <p className="mt-1 text-xs lg:text-sm font-thin text-gray-300 leading-relaxed">
                            We provides a powerful collection of specialized tools designed for architects, designers, and AEC experts, From conceptual massing to lifelike renders, animations, and real-time immersive experiences, you can create and visualize your designs at any stage with ease.
                        </p>
                        <button className="mt-6 p-2 px-6 bg-orange-500 font-medium text-black rounded-full hover:bg-orange-600">
                            Explore Products <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                    </div>
                    <div className="mt-4 w-full">
                        <hr className="border-gray-100  h-[1px]  bg-gray-200 border-0 rounded dark:bg-gray-400" />
                        <h2 className="text-xl lg:text-2xl font-normal py-2">ACE</h2>
                        <hr className="border-gray-100  h-[1.5px]  bg-gray-200 border-0 rounded dark:bg-gray-400" />
                        <h2 className="text-xl lg:text-2xl font-normal py-2">Marketing</h2>
                        <hr className="border-gray-100   h-[1.5px]  bg-gray-200 border-0 rounded dark:bg-gray-400" />
                        <h2 className="text-xl lg:text-2xl py-2">Education & Government</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsTab;
