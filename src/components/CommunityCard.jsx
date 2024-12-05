import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
const CommunityCard = () => {
    return (
        <div className="w-full bg-[#0D0E10] flex flex-col  items-center px-10 py-16 md:px-16 -mt-2 lg:px-20 lg:py-20">
            <div className="w-full flex flex-col lg:flex-row justify-between gap-8">
                <div className="w-full lg:w-1/2 ">
                    <h1 className="text-white text-2xl lg:text-4xl font-normal leading-10 ">
                        Join the community <br /> of Millions
                    </h1>
                    <button className="mt-8 px-6 py-2 rounded-full bg-orange-500 text-black text-sm hover:bg-orange-600 transition font-medium">
                        Get in Touch <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                </div>
                <div className="w-full lg:w-1/2  flex flex-col space-y-6">
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
        </div>
    )
}

export default CommunityCard