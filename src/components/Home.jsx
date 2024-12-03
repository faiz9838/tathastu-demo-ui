import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export const Home = () => {
    return (
        <div className="home flex flex-col  justify-center items-start w-full h-[120vh] mt-[2px] px-10 box-border bg-transparent md:px-20 sm:px-5 font-poppins">

            <div className="content-wrapper w-full max-w-md text-white text-base">
                <h3 className="leading-10 text-4xl font-semibold sm:text-4xl mt-4 ">
                    Empowering Creativity with Leading Software & Hardware Solutions
                </h3>
                <p className="text-gray-400 text-base mt-8">
                    Discover more of our innovative products designed for Media & Entertainment, AEC, Manufacturinng and Education & Goverment
                </p>
                <button className="bg-gradient-to-r from-orange-500 to-red-500 text-black py-2 px-6 mt-8 rounded-full font-semibold shadow-lg hover:shadow-orange-600/50 hover:from-orange-600 hover:to-red-600 transition-all">
                    Learn More <FontAwesomeIcon icon={faArrowRight} />
                </button>
            </div>

            {/* Two Buttons Section */}
            <div className="two-buttons mt-24 flex gap-4 bg-transparent mb-20">
                <button className="bg-transparent text-white w-12 h-12 flex items-center justify-center border border-gray-500 rounded-full cursor-pointer hover:bg-gray-900/70 hover:shadow-lg hover:shadow-gray-500/50 transition-all">
                    <FontAwesomeIcon icon={faArrowLeft} />
                </button>
                <button className="bg-transparent text-white w-12 h-12 flex items-center justify-center border border-gray-500 rounded-full cursor-pointer hover:bg-gray-900/70 hover:shadow-lg hover:shadow-gray-500/30 transition-all">
                    <FontAwesomeIcon icon={faArrowRight} />
                </button>
            </div>
        </div>
    );
};
