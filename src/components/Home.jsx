import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export const Home = () => {
    const homeStyle = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        width: "100%",
        height: "100vh",
        marginTop: "-5px",
        padding: "0px 5rem",
        background: "transparent",
        boxSizing: "border-box",
    };

    const contentWrapperStyle = {
        width: "100%",
        maxWidth: "500px",
        color: "white",
        fontFamily: "monospace",
        fontSize: "1rem",
    };

    const buttonContainerStyle = {
        marginTop: "4rem",
        display: "flex",
        gap: "1rem",
        background: "transparent"
    };

    return (
        <div className="home" style={homeStyle}>
            <div className="content-wrapper" style={contentWrapperStyle}>
                <h3 style={{ lineHeight: "2rem", fontSize: "1.5rem" }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias sunt
                    eos ab vero aperiam eligendi.
                </h3>

                <br />
                <p style={{ color: "gray", fontSize: "1rem" }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <br />
                <button
                    style={{
                        background: "orange",
                        color: "black",
                        padding: "0.8rem 1rem",
                        border: "none",
                        borderRadius: "2rem",
                        marginTop: "1rem",
                        fontWeight: "bold",
                        cursor: "pointer",
                    }}
                >
                    Learn More <FontAwesomeIcon icon={faArrowRight} />
                </button>
            </div>
            <div className="two-buttons" style={buttonContainerStyle}>
                <button
                    style={{
                        background: "transparent",
                        color: "white",
                        padding: "0.8rem 1rem",
                        border: "1px solid grey",
                        borderRadius: "2rem",
                        cursor: "pointer",
                    }}
                >
                    <FontAwesomeIcon icon={faArrowLeft} />
                </button>
                <button
                    style={{
                        background: "transparent",
                        color: "white",
                        padding: "0.8rem 1rem",
                        border: "1px solid grey",
                        borderRadius: "2rem",
                        cursor: "pointer",
                    }}
                >
                    <FontAwesomeIcon icon={faArrowRight} />
                </button>
            </div>
        </div>
    );
};
