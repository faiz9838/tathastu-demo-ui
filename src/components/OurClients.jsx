import React from 'react';
import clientImg from "../assets/pngwing.com.png";

const OurClients = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-6 w-full -mt-2 bg-black py-6">
            {/* Heading */}
            <div className="text-white text-3xl lg:text-4xl font-normal">
                <h1>Our Clients</h1>
            </div>

            <div className="flex flex-wrap md:flex-nowrap flew justify-center items-center w-full gap-12 ">
                {[...Array(4)].map((_, index) => (
                    <div key={index} className="relative flex items-center">

                        <img
                            className="filter invert brightness-200 w-44 h-auto"
                            src={clientImg}
                            alt={`Client ${index + 1}`}
                        />
                        {/* Line Between Images */}
                        {index !== 3 && (
                            <div className="absolute right-[-1.8rem] w-[0.7px] h-[70px] bg-gray-300/40 hidden md:block"></div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default OurClients;
