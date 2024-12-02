import { faFacebook, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Footer = () => {
    return (
        <footer>
            <div style={{ height: "auto", width: "100%", background: "black", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", paddingBottom: "3rem", color: "white" }}>
                <div style={{ height: "auto", width: "80%", background: "black", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingBottom: "3rem", color: "white", marginTop: "3rem" }} >
                    <div style={{ display: "flex", alignItems: "flex-start" }}  >
                        <h1 style={{ fontSize: "1.5rem" }}>LOGO</h1>
                    </div>
                    <div style={{ textAlign: "start" }} >
                        <header style={{ fontSize: "12px", color: "gray", paddingBottom: "0.5rem", textAlign: "start" }}>Tathastu</header>
                        <hr />
                        <ul style={{ fontSize: "12px", textAlign: "start", paddingTop: "0.5rem" }}>
                            <li style={{ fontSize: "12px" }} >About</li>
                            <li style={{ fontSize: "12px" }} >Blog</li>
                            <li style={{ fontSize: "12px" }} >Press</li>
                            <li style={{ fontSize: "12px" }} >Career</li>
                            <li style={{ fontSize: "12px" }} >Contact Us</li>
                        </ul>
                    </div>
                    <div style={{ textAlign: "start" }} >
                        <header style={{ fontSize: "12px", color: "gray", paddingBottom: "0.5rem", textAlign: "start" }}>Industries</header>
                        <hr />
                        <ul style={{ fontSize: "12px", textAlign: "start", paddingTop: "0.5rem" }}>
                            <li style={{ fontSize: "12px" }} >About</li>
                            <li style={{ fontSize: "12px" }} >Blog</li>
                            <li style={{ fontSize: "12px" }} >Press</li>
                            <li style={{ fontSize: "12px" }} >Career</li>
                            <li style={{ fontSize: "12px" }} >Contact Us</li>
                        </ul>
                    </div>
                    <div style={{ textAlign: "start" }} >
                        <header style={{ fontSize: "12px", color: "gray", paddingBottom: "0.5rem", textAlign: "start" }}>Professions</header>
                        <hr />
                        <ul style={{ fontSize: "12px", textAlign: "start", paddingTop: "0.5rem" }}>
                            <li style={{ fontSize: "12px" }} >About</li>
                            <li style={{ fontSize: "12px" }} >Blog</li>
                            <li style={{ fontSize: "12px" }} >Press</li>
                            <li style={{ fontSize: "12px" }} >Career</li>
                            <li style={{ fontSize: "12px" }} >Contact Us</li>
                        </ul>
                    </div>
                    <div style={{ textAlign: "start" }} >
                        <header style={{ fontSize: "12px", color: "gray", paddingBottom: "0.5rem", textAlign: "start" }}>Contact</header>
                        <hr />
                        <ul style={{ fontSize: "12px", textAlign: "start", paddingTop: "0.5rem" }}>
                            <li style={{ fontSize: "12px" }} >About</li>
                            <li style={{ fontSize: "12px" }} >Blog</li>
                            <li style={{ fontSize: "12px" }} >Press</li>
                            <li style={{ fontSize: "12px" }} >Career</li>
                            <li style={{ fontSize: "12px" }} >Contact Us</li>
                        </ul>
                    </div>
                </div>

                <div style={{ width: "90%", height: "10vh", display: "flex", justifyContent: "space-between", padding: "1rem", gap: "1rem", paddingBottom: "0", marginBottom: "0", alignItems: "center" }} >
                    <div>
                        <p style={{ fontSize: "12px", color: "grey" }}>Copyright@Faiz Ahmad 2024</p>
                    </div>
                    <div style={{ display: "flex", gap: "1rem" }}>
                        <FontAwesomeIcon icon={faInstagram} />
                        <FontAwesomeIcon icon={faFacebook} />
                        <FontAwesomeIcon icon={faYoutube} />
                        <FontAwesomeIcon icon={faLinkedin} />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer