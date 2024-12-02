import React from 'react';
import ProductsTab from './ProductsTab';

const Products = () => {
    return (
        <div
            className="products"
            style={{
                marginTop: "-62px",
                backgroundColor: "black",
                height: "auto"
            }}
        >
            <div className="product-header-wrapper" style={{ textAlign: "center", paddingTop: "6rem", fontSize: "1.5rem" }}>
                <h1 style={{ lineHeight: "4rem" }}>Variety Of Products</h1>
                <h1 tyle={{ lineHeight: "3rem" }}>We Offer</h1>
            </div>
            <div className='mini-div-wrapper' style={{ display: "flex", flexWrap: "wrap", gap: "2rem", justifyContent: "center", marginTop: "4rem" }}>
                <div
                    className="box"
                    style={{
                        padding: "1rem",
                        backgroundColor: "#141518",
                        color: "white",
                        textAlign: "start",
                        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                        borderRadius: "1.5rem",
                        width: "150px",
                        height: "150px",
                        fontSize: "1.3rem",
                        fontWeight: "",
                        border: "1px solid rgba(0, 0, 0, 0.1)"
                    }}
                >
                    Hardware
                </div>
                <div
                    className="box"
                    style={{
                        padding: "1rem",
                        backgroundColor: "#141518",
                        color: "white",
                        textAlign: "start",
                        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                        borderRadius: "6rem",
                        width: "150px",
                        fontSize: "1.3rem",
                        fontWeight: "",
                        height: "150px",
                    }}
                >

                </div>
                <div
                    className="box"
                    style={{
                        padding: "1rem",
                        backgroundColor: "#141518",
                        color: "white",
                        textAlign: "start",
                        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                        borderRadius: "1.5rem",
                        width: "150px",
                        height: "150px",
                        fontSize: "1.3rem",
                        fontWeight: "",
                    }}
                >
                    Plugins
                </div>
                <div
                    className="box"
                    style={{
                        padding: "1rem",
                        backgroundColor: "#141518",
                        color: "white",
                        textAlign: "start",
                        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                        borderRadius: "1.5rem",
                        width: "150px",
                        height: "150px",
                        fontSize: "1.3rem",
                        fontWeight: "",
                    }}
                >
                    2D/3D
                </div>
                <div
                    className="box"
                    style={{
                        padding: "1rem",
                        backgroundColor: "#141518",
                        color: "white",
                        textAlign: "start",
                        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                        borderRadius: "10rem 0rem 0rem",
                        width: "150px",
                        height: "150px",
                        fontSize: "1.3rem",
                        fontWeight: "",
                    }}
                >

                </div>
                <div
                    className="box"
                    style={{
                        padding: "1rem",
                        backgroundColor: "#141518",
                        color: "white",
                        textAlign: "start",
                        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                        borderRadius: "1.5rem",
                        width: "150px",
                        height: "150px",
                        fontSize: "1.3rem",
                        fontWeight: "",
                    }}
                >
                    Applications
                </div>
            </div>
            <ProductsTab />
        </div>
    );
};

export default Products;
