import React from 'react'

const ContactFrom = () => {
    return (
        <div className="flex flex-col items-start bg-[#141518] text-white p-8 rounded-xl shadow-md border-[0.1px] border-gray-600/50 w-[90vw] sm:w-[80vw] md:w-[60vw] lg:w-[50vw] xl:w-[38vw] mx-auto space-y-6 pt-14 pb-14">


            {/* <div className='border w-full p-2 flex items-center justify-start'>
                <p className="text-gray-500 text-start ">
                    Fill out the form below and we will get in touch with you.
                </p>
            </div> */}
            {/* <hr className="w-1/2 border-gray-700 mb-6" /> */}

            {/* YOUR NAME */}
            <div className="w-full ">
                <label htmlFor="name" className="block text-xs md:text-[8px] text-gray-500 font-medium">
                    YOUR NAME
                </label>
                <input
                    type="text"
                    id="name"

                    className="w-full  py-1 bg-[#141518] text-gray-300 border-b-[1.5px] border-gray-700 focus:outline-none focus:ring-0  focus:border-orange-500"
                />
            </div>

            {/* YOUR EMAIL */}
            <div className="w-full pt-3">
                <label htmlFor="email" className="block text-xs md:text-[8px] text-gray-500 font-medium ">
                    YOUR EMAIL
                </label>
                <input
                    type="email"
                    id="email"

                    className="w-full  py-1 bg-[#141518] text-gray-300 border-b-[1.5px] border-gray-700 focus:outline-none focus:ring-0  focus:border-orange-500"
                />
            </div>

            {/* SUBJECT */}
            <div className="w-full pt-3">
                <label htmlFor="subject" className="block text-xs md:text-[8px]  text-gray-500 font-medium">
                    SUBJECT
                </label>
                <input
                    type="text"
                    id="subject"

                    className="w-full py-1 bg-[#141518] text-gray-300 border-b-[1.5px] border-gray-700 focus:outline-none focus:ring-0  focus:border-orange-500"
                />
            </div>


            <div className="w-full pt-2">
                <label htmlFor="message" className="block text-xs md:text-[8px] mb-2 text-gray-500 font-medium">
                    YOUR MESSAGE
                </label>
                <textarea
                    id="message"
                    rows="4"

                    className="w-full mt-3  bg-[#141518] text-gray-300 border-[1.5px] rounded-md border-gray-700 focus:outline-none  focus:border-orange-500"
                ></textarea>
            </div>


            <button className="w-full md:w-1/3  py-2 bg-orange-600 text-black font-medium rounded-full  hover:bg-orange-500 transition duration-300">
                Submit
            </button>
        </div>

    )

}

export default ContactFrom