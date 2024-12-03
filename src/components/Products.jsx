import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCogs, faPuzzlePiece, faShapes, faDesktop, faTools } from "@fortawesome/free-solid-svg-icons"; // Import desired icons
import ProductsTab from "./ProductsTab";

const Products = () => {
    return (
        <div className="products bg-black  relative">
            {/* <div className="w-[6px] h-[6px] right-72  bg-white rounded-full absolute"></div>
            <div
                className="flex-1 m-[-1px] h-[1.3px] bg-gradient-to-r from-white to-white/0"
                style={{ transform: "rotate(-90deg)" }}
            ></div> */}


            <div className="product-header-wrapper text-center pt-6 text-white">

                <h1 className="text-3xl md:text-3xl lg:text-4xl leading-10">Variety Of Products</h1>
                <h1 className="text-3xl md:text-3xl lg:text-4xl leading-10">We Offer</h1>
            </div>


            <div className="mini-div-wrapper flex flex-wrap gap-8 justify-center mt-16">

                <div className="box relative p-4 bg-[#141518]/50 text-white text-left backdrop-blur-md border border-[rgba(255,255,255,0.18)] rounded-[1.5rem] w-[150px] h-[150px] text-lg font-medium">
                    Hardware
                    <FontAwesomeIcon
                        icon={faTools}
                        className="absolute bottom-6 right-6 text-4xl text-white/70"
                    />
                </div>

                <div className="box relative p-4 bg-[#141518]/50 text-white text-left backdrop-blur-md border border-[rgba(255,255,255,0.18)] rounded-[6rem] w-[150px] h-[150px] text-lg font-medium">

                </div>

                <div className="box relative p-4 bg-[#141518]/50 text-white text-left backdrop-blur-md border border-[rgba(255,255,255,0.18)] rounded-[1.5rem] w-[150px] h-[150px] text-lg font-medium">
                    Plugins
                    <FontAwesomeIcon
                        icon={faPuzzlePiece}
                        className="absolute bottom-6 right-6 text-4xl text-white/70"
                    />
                </div>

                <div className="box relative p-4 bg-[#141518]/50 text-white text-left backdrop-blur-md border border-[rgba(255,255,255,0.18)] rounded-[1.5rem] w-[150px] h-[150px] text-lg font-medium">
                    2D/3D
                    <FontAwesomeIcon
                        icon={faShapes}
                        className="absolute bottom-6 right-6 text-4xl text-white/70"
                    />
                </div>

                <div className="box relative p-4 bg-[#141518]/50 text-white text-left backdrop-blur-md border border-[rgba(255,255,255,0.18)] rounded-[10rem_0rem_0rem] w-[150px] h-[150px] text-lg font-medium">

                </div>

                <div className="box relative p-4 bg-[#141518]/50 text-white text-left backdrop-blur-md border border-[rgba(255,255,255,0.18)] rounded-[1.5rem] w-[150px] h-[150px] text-lg font-medium">
                    Applications
                    <FontAwesomeIcon
                        icon={faDesktop}
                        className="absolute bottom-6 right-6 text-4xl text-white/70"
                    />
                </div>
            </div>


            <ProductsTab />
        </div>
    );
};

export default Products;
