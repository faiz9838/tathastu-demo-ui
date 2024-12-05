import React from 'react'
import Navbar from '../components/Navbar'
import { HeroSection } from '../components/HeroSection'
import bgImg from "../assets/futuristic-symmetry-reflection-abstract-background-with-orange-blue-neon-lights.jpg"
import ProductsOfferCards from '../components/ProductsOfferCards'
import ProductsCardTab from '../components/ProductsCardTab'
import CommunityCard from '../components/CommunityCard'
import FounderCard from '../components/FounderCard'
import ClientCard from '../components/ClientCard'
import DemoCard from '../components/DemoCard'
import Footer from '../components/Footer'
const Home = () => {
    const homeStyle = {
        width: "100%",
        height: "140vh",
        padding: "0",
        background: `linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5)), url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    };
    return (
        <div style={homeStyle}>
            <Navbar />
            <HeroSection />
            <ProductsOfferCards />
            <ProductsCardTab />
            <CommunityCard />
            <FounderCard />
            <ClientCard />
            <DemoCard />
            <Footer />
        </div>
    )
}

export default Home