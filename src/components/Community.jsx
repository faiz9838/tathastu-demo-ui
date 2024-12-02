import { faArrowRight, faDiamondTurnRight, faDotCircle, faQuoteLeftAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import myImg from "../assets/FAIZ_AHMAD-removebg-preview.png"

const Community = () => {
    return (
        <div style={{ width: "100%", height: "auto", background: "black", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", padding: "6rem", paddingTop: "2rem" }}>
            <div style={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
                <div style={{ width: "50%", padding: "1rem" }}>
                    <h1 style={{ color: "white", fontWeight: "lighter", lineHeight: "2.5rem" }}>Join the community <br /> of Millions</h1>
                    <button style={{ padding: "0.8rem", borderRadius: "2rem", border: "none", background: "orange", fontSize: "15px", marginTop: "1rem", cursor: "pointer" }}>Get in touch <FontAwesomeIcon icon={faArrowRight} /></button>
                </div>
                <div style={{ width: "50%", padding: "1rem", display: "flex", flexDirection: "column" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <h3 style={{ color: "white", fontSize: "14px", margin: 0 }}>
                            NUMBER OF HARDWARES
                        </h3>
                        <hr style={{ flex: 1, border: "1px solid white", margin: 0 }} />
                    </div>
                    <div style={{ marginTop: "1rem" }}>
                        <h1 style={{ color: "#4570D0", fontSize: "4rem" }}>20+</h1>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "1rem" }}>
                        <h3 style={{ color: "white", fontSize: "14px", margin: 0 }}>
                            NUMBER OF PLUGINS
                        </h3>
                        <hr style={{ flex: 1, border: "1px solid white", margin: 0 }} />
                    </div>
                    <div style={{ marginTop: "1rem" }}>
                        <h1 style={{ color: "orange", fontSize: "4rem" }}>80+</h1>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "1rem" }}>
                        <h3 style={{ color: "white", fontSize: "14px", margin: 0 }}>
                            NUMBER OF PLUGINS
                        </h3>
                        <hr style={{ flex: 1, border: "1px solid white", margin: 0 }} />
                    </div>
                    <div style={{ marginTop: "1rem" }}>
                        <h1 style={{ color: "white", fontSize: "3.5rem" }}>4100+</h1>
                    </div>
                </div>
            </div>
            <div style={{ marginTop: "4rem", width: "100%", height: "auto", background: "#141518", borderRadius: "1rem", padding: "2rem", paddingBottom: "0", position: "relative", display: "flex", flexDirection: "row", }}>

                <div style={{ position: "absolute", background: "#141518", padding: "2rem 2rem", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "3rem", top: "-2.5rem", left: "3rem", boxShadow: "0px 0px 1px rgb(204, 204, 204)" }}>
                    <FontAwesomeIcon style={{ color: "white", fontSize: "1.6rem" }} icon={faQuoteLeftAlt} />
                </div>
                <div style={{ width: "55%", marginTop: "2rem", padding: "1rem", color: "white", paddingBottom: "3rem" }}>
                    <h2 style={{ fontWeight: "lighter", lineHeight: "2rem" }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam, dignissimos eius? Possimus delectus aut corporis vitae iusto? Laudantium magnam illum similique!.
                    </h2>
                    <div style={{ marginTop: "1rem" }}>
                        <h3 style={{ lineHeight: "2rem" }}>Chaitan Jain</h3>
                        <p style={{ fontSize: "12px" }}>Founder - Tathastu</p>
                    </div>
                </div>
                <div style={{ width: "45%", position: "relative", display: "flex", overflow: "hidden" }}>
                    <div style={{ background: "#4570D0", position: "absolute", width: "15vw", height: "35vh", left: "3rem", bottom: "3rem", borderRadius: "8rem" }} >

                    </div>
                    <div style={{ background: "orange", position: "absolute", width: "15vw", height: "35vh", left: "12rem", bottom: "-2rem", borderRadius: "8rem 0rem 0rem" }} >

                    </div>
                    <img style={{
                        position: "absolute", zIndex: "1", bottom: "0rem", width: "22vw", left: "5rem", filter: "grayscale(1) contrast(1.5) brightness(1)",

                    }} src={myImg} alt="" />
                </div>
            </div>
        </div >
    )
}

export default Community