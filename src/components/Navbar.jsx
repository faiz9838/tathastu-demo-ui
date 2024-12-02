import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "10px 5rem",
                backgroundColor: isOpen ? "black" : "transparent", // Change background on menu toggle
                color: "#fff",
                position: "relative",
                transition: "background-color 0.3s ease", // Smooth transition
            }}
        >
            <div style={{ fontSize: "24px", fontWeight: "bold" }}>
                <h2 style={{ margin: 0 }}>Logo</h2>
            </div>

            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "15px",
                }}
            >
                <button
                    style={{
                        padding: "10px 18px",
                        background: "transparent",
                        border: "1px solid grey",
                        cursor: "pointer",
                        fontWeight: "bold",
                        color: "white",
                        borderRadius: "2rem",
                    }}
                >
                    Get in touch <FontAwesomeIcon icon={faArrowRight} />
                </button>

                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "5px",
                        cursor: "pointer",
                    }}
                    onClick={toggleMenu}
                >
                    <span
                        style={{
                            width: "25px",
                            height: "3px",
                            backgroundColor: "#fff",
                        }}
                    ></span>
                    <span
                        style={{
                            width: "25px",
                            height: "3px",
                            backgroundColor: "#fff",
                        }}
                    ></span>
                    <span
                        style={{
                            width: "25px",
                            height: "3px",
                            backgroundColor: "#fff",
                        }}
                    ></span>
                </div>
            </div>

            <ul
                style={{
                    listStyle: "none",
                    margin: 0,
                    width: "99vw",
                    height: "auto",
                    padding: "1rem 5.5rem",
                    display: isOpen ? "flex" : "none",
                    flexDirection: "column",
                    position: "absolute",
                    top: "61px",
                    right: "0px",
                    backgroundColor: "black",
                }}
            >
                <div style={{ height: "auto", width: "80%", background: "black", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingBottom: "3rem", color: "white", marginTop: "3rem" }} >

                    <div style={{ textAlign: "start" }} >
                        <header style={{ fontSize: "12px", color: "gray", paddingBottom: "0.5rem", textAlign: "start" }}>Tathastu</header>
                        <hr />
                        <ul style={{ fontSize: "12px", textAlign: "start", paddingTop: "0.5rem" }}>
                            <li style={{ fontSize: "2rem" }} >About</li>
                            <li style={{ fontSize: "2rem" }} >Blog</li>
                            <li style={{ fontSize: "2rem" }} >Press</li>
                            <li style={{ fontSize: "2rem" }} >Career</li>

                        </ul>
                    </div>
                    <div style={{ textAlign: "start" }} >
                        <header style={{ fontSize: "12px", color: "gray", paddingBottom: "0.5rem", textAlign: "start" }}>Industries</header>
                        <hr />
                        <ul style={{ fontSize: "12px", textAlign: "start", paddingTop: "0.5rem" }}>
                            <li style={{ fontSize: "12px", padding: "0.5rem" }} >About</li>
                            <li style={{ fontSize: "12px", padding: "0.5rem" }} >Blog</li>
                            <li style={{ fontSize: "12px", padding: "0.5rem" }} >Press</li>
                            <li style={{ fontSize: "12px", padding: "0.5rem" }} >Career</li>
                            <li style={{ fontSize: "12px", padding: "0.5rem" }} >Contact Us</li>
                        </ul>
                    </div>
                    <div style={{ textAlign: "start" }} >
                        <header style={{ fontSize: "12px", color: "gray", paddingBottom: "0.5rem", textAlign: "start" }}>Professions</header>
                        <hr />
                        <ul style={{ fontSize: "12px", textAlign: "start", paddingTop: "0.5rem" }}>
                            <li style={{ fontSize: "12px", padding: "0.5rem" }} >About</li>
                            <li style={{ fontSize: "12px", padding: "0.5rem" }} >Blog</li>
                            <li style={{ fontSize: "12px", padding: "0.5rem" }} >Press</li>
                            <li style={{ fontSize: "12px", padding: "0.5rem" }} >Career</li>
                            <li style={{ fontSize: "12px", padding: "0.5rem" }} >Contact Us</li>
                        </ul>
                    </div>
                    <div style={{ textAlign: "start" }} >
                        <header style={{ fontSize: "12px", color: "gray", paddingBottom: "0.5rem", textAlign: "start" }}>Contact</header>
                        <hr />
                        <ul style={{ fontSize: "12px", textAlign: "start", paddingTop: "0.5rem" }}>
                            <li style={{ fontSize: "12px", padding: "0.5rem" }} >About</li>
                            <li style={{ fontSize: "12px", padding: "0.5rem" }} >Blog</li>
                            <li style={{ fontSize: "12px", padding: "0.5rem" }} >Press</li>
                            <li style={{ fontSize: "12px", padding: "0.5rem" }} >Career</li>
                            <li style={{ fontSize: "12px", padding: "0.5rem" }} >Contact Us</li>
                        </ul>
                    </div>
                </div>
            </ul>
        </nav>
    );
};

export default Navbar;
