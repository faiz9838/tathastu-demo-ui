import React from 'react'
import bgImg from "../assets/background.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
const ProductsTab = () => {
    const productTabStyle = {
        width: "47%",
        height: "80vh",
        padding: "2rem",
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "flex-start",
        borderRadius: "1.5rem",
        justifyContent: "flex-end"

    };

    const productContentTab = {
        width: "47%",
        height: "80vh",
        padding: "1rem",
        paddingTop: "0",
        textAlign: "start",
        background: "transparent",
        display: "flex",
        alignItems: "flex-start",
        borderRadius: "1.5rem",
        justifyContent: "flex-start",
        flexDirection: "column"


    };
    return (
        <div style={{ width: "auto", marginTop: "6rem", color: "white", textAlign: "center", padding: "2rem", display: "flex", justifyContent: "center" }}>
            <div style={{ width: "90%", height: "90vh", background: "#141518", borderRadius: "1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "2rem" }}>
                <div style={productTabStyle}>
                    <button style={{ padding: "1rem 1.1rem", borderRadius: "1.5rem", border: "none", background: "orange" }}><FontAwesomeIcon style={{ fontSize: "1rem" }} icon={faArrowRight} /></button>
                </div>
                <div style={productContentTab} >
                    <div style={{ paddingBottom: "4rem" }}>
                        <h1>Cutting-edge solutions for Industries</h1>
                    </div>
                    <div>
                        <hr style={{ color: "grey", }} />
                        <div style={{ paddingTop: "1rem" }}>
                            <h1 style={{ fontSize: "1.5rem" }}>Media & Entertainment</h1>
                            <p style={{ paddingTop: "0.5rem", fontSize: "12px", fontStyle: "normal", fontWeight: "lighter", color: "gray" }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi impedit praesentium nihil dolorum sed quidem quas odio rerum! Impedit, nesciunt ipsa labore delectus dolorem voluptates atque cumque quae aut nemo!</p>
                            <button style={{ padding: "0.8rem", marginTop: "1.5rem", borderRadius: "2rem", border: "none", background: "orange", marginBottom: "1rem" }}>Explore Products <FontAwesomeIcon icon={faArrowRight} /></button>
                            <div className='List'>
                                <hr />
                                <h1 style={{ fontSize: "1.5rem", padding: "0.5rem", paddingLeft: "0", fontWeight: "lighter" }}>ACE</h1>
                                <hr />
                                <h1 style={{ fontSize: "1.5rem", padding: "0.5rem", paddingLeft: "0" }}>Marketing</h1>
                                <hr />
                                <h1 style={{ fontSize: "1.5rem", padding: "0.5rem", paddingLeft: "0" }}>Education & Goverment</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductsTab