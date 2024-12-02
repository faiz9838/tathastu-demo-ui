import React from 'react';
import client1 from '../assets/pngwing.com.png';
import client2 from '../assets/instalod-logo-black_880x187.webp';
import client3 from '../assets/vectorwork.png';
import client4 from '../assets/RayFire_logo_1k.png';

const clientImages = [client1, client2, client3, client4];

const OurClients = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-6 w-full -mt-2 bg-black py-0 p-4">
            <div className="text-white mt-3 text-3xl lg:text-5xl font-normal">
                <h1>Our Clients</h1>
            </div>

            <div className="flex flex-wrap md:flex-nowrap flew justify-center items-center w-full sm:mt-16 lg:mt-8 md:mt-12 gap-12 ">
                {clientImages.map((clientImg, index) => (
                    <div key={index} className="relative flex items-center">
                        <img
                            className="filter invert brightness-200 w-32 sm:w-40 md:w-48 lg:w-56 h-auto lg:h-44 md:h-36 sm:h-32 object-contain"
                            src={clientImg}
                            alt={`Client ${index + 1}`}
                        />

                        {/* {index !== 3 && (
                            <div className="absolute right-[-1.8rem] w-[0.7px] h-[70px] bg-gray-300/40 hidden md:block"></div>
                        )} */}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default OurClients;
