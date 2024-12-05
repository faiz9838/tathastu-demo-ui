import React from 'react'
import client1 from '../assets/pngwing.com.png';
import client2 from '../assets/instalod-logo-black_880x187.webp';
import client3 from '../assets/vectorwork.png';
import client4 from '../assets/RayFire_logo_1k.png';

const clientImages = [client1, client2, client3, client4];

const ClientCard = () => {
    return (

        <div className="flex flex-col justify-center items-center w-full bg-[#0D0E10] py-4 -mt-2 pb-10">


            <div className="text-white text-4xl lg:text-4xl font-normal md:mt-16 mt-10">
                <h1>Our Clients</h1>
            </div>

            <div className="flex flex-wrap sm:flex-wrap p-2 justify-center items-center w-full mt-6 sm:mt-16 lg:mt-0 md:mt-12 sm:gap-2 gap-6 px-4 sm:px-6">
                {clientImages.map((clientImg, index) => (
                    <div key={index} className="relative flex items-center mx-4">
                        <img
                            className="filter invert  brightness-200  w-36 object-scale-down"
                            src={clientImg}
                            alt={`Client ${index + 1}`}
                        />
                    </div>
                ))}
            </div>

        </div>
    )
}

export default ClientCard