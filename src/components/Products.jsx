import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCogs, faPuzzlePiece, faShapes, faDesktop, faTools } from "@fortawesome/free-solid-svg-icons"; // Import desired icons
import ProductsTab from "./ProductsTab";

const Products = () => {
    return (
        <div className="products bg-black mt-[-80px]">

            <div className="product-header-wrapper text-center pt-24 text-white">
                <h1 className="text-3xl md:text-3xl lg:text-4xl leading-10">Variety Of Products</h1>
                <h1 className="text-3xl md:text-3xl lg:text-4xl leading-10">We Offer</h1>
            </div>


            <div className="mini-div-wrapper flex flex-wrap gap-8 justify-center mt-16">

                <div className="box relative p-4 bg-[#141518]/50 text-white text-left backdrop-blur-md border border-[rgba(255,255,255,0.18)] rounded-[1.5rem] w-[150px] h-[150px] text-lg font-medium">
                    Hardware
                    <FontAwesomeIcon
                        icon={faTools}
                        className="absolute bottom-6 right-6 text-4xl text-gray-400"
                    />
                </div>
                {/* Box 2 */}
                <div className="box relative p-4 bg-[#141518]/50 text-white text-left backdrop-blur-md border border-[rgba(255,255,255,0.18)] rounded-[6rem] w-[150px] h-[150px] text-lg font-medium">

                </div>
                {/* Box 3 */}
                <div className="box relative p-4 bg-[#141518]/50 text-white text-left backdrop-blur-md border border-[rgba(255,255,255,0.18)] rounded-[1.5rem] w-[150px] h-[150px] text-lg font-medium">
                    Plugins
                    <FontAwesomeIcon
                        icon={faPuzzlePiece}
                        className="absolute bottom-6 right-6 text-4xl text-gray-400"
                    />
                </div>
                {/* Box 4 */}
                <div className="box relative p-4 bg-[#141518]/50 text-white text-left backdrop-blur-md border border-[rgba(255,255,255,0.18)] rounded-[1.5rem] w-[150px] h-[150px] text-lg font-medium">
                    2D/3D
                    <FontAwesomeIcon
                        icon={faShapes}
                        className="absolute bottom-6 right-6 text-4xl text-gray-400"
                    />
                </div>
                {/* Box 5 */}
                <div className="box relative p-4 bg-[#141518]/50 text-white text-left backdrop-blur-md border border-[rgba(255,255,255,0.18)] rounded-[10rem_0rem_0rem] w-[150px] h-[150px] text-lg font-medium">

                </div>
                {/* Box 6 */}
                <div className="box relative p-4 bg-[#141518]/50 text-white text-left backdrop-blur-md border border-[rgba(255,255,255,0.18)] rounded-[1.5rem] w-[150px] h-[150px] text-lg font-medium">
                    Applications
                    <FontAwesomeIcon
                        icon={faDesktop}
                        className="absolute bottom-6 right-6 text-4xl text-gray-400"
                    />
                </div>
            </div>

            {/* Products Tab */}
            <ProductsTab />
        </div>
    );
};

export default Products;
