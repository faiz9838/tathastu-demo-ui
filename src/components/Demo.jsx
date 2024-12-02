import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Demo = () => {
    return (
        <div style={{ height: "auto", width: "100%", background: "black", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", paddingBottom: "3rem" }}>
            <div style={{ width: "85%", height: "auto", color: "white", background: "#141518", padding: "2rem", marginTop: "4rem", borderRadius: "1rem", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <div style={{
                    display: "flex", flexDirection:
                        "column", justifyContent: "center", alignItems: "center", width: "50%", textAlign: "center"
                }}>
                    <h1 style={{ paddingTop: "2rem", fontSize: "2.2rem", lineHeight: "2.5rem", fontWeight: "lighter" }}>Design support for all your <br />
                        creative needs</h1>
                    <p style={{ padding: "1rem", lineHeight: "1.5rem", color: "gray" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quia illo illum architecto provident, alias consectetur dolor nesciunt.
                    </p>
                </div>
                <div style={{ display: "flex", gap: "1.5rem", marginTop: "1.5rem" }}>
                    <button style={{ padding: "0.7rem 1.2rem", background: "orange", borderRadius: "1rem", border: "none", cursor: "pointer" }}>Get in touch <FontAwesomeIcon icon={faArrowRight} /></button>
                    <button style={{ padding: "0.7rem 1.2rem", borderRadius: "1rem", border: "none", cursor: "pointer" }}>Request a demo <FontAwesomeIcon icon={faArrowRight} /></button>
                </div>
            </div>
        </div >
    )
}

export default Demo