import React from 'react'
import clientImg from "../assets/pngwing.com.png"
const OurClients = () => {
    return (
        <div style={{ height: "auto", width: "100%", background: "black", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "1rem", }}>
            <div style={{ color: "white", fontSize: "1.5rem", fontWeight: "lighter" }}>
                <h1 style={{ fontWeight: "lighter" }}>Our Clients</h1>
            </div>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", }}>
                <div style={{ width: "20vw", display: "flex", justifyContent: "center", alignItems: "center", }}>
                    <img
                        style={{
                            filter: "invert(1) brightness(2)",
                            width: "150px",
                            height: "auto",
                        }}
                        src={clientImg}
                        alt="Client"
                    />

                </div>
                <div style={{ width: "20vw", display: "flex", justifyContent: "center", alignItems: "center", }}>
                    <img
                        style={{
                            filter: "invert(1) brightness(2)",
                            width: "150px",
                            height: "auto",
                        }}
                        src={clientImg}
                        alt="Client"
                    />

                </div>
                <div style={{ width: "20vw", display: "flex", justifyContent: "center", alignItems: "center", }}>
                    <img
                        style={{
                            filter: "invert(1) brightness(2)",
                            width: "150px",
                            height: "auto",
                        }}
                        src={clientImg}
                        alt="Client"
                    />

                </div>
                <div style={{ width: "20vw", display: "flex", justifyContent: "center", alignItems: "center", }}>
                    <img
                        style={{
                            filter: "invert(1) brightness(2)",
                            width: "150px",
                            height: "auto",
                        }}
                        src={clientImg}
                        alt="Client"
                    />

                </div>
            </div>
        </div>
    )
}

export default OurClients