import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { Home } from './components/Home'
import Products from './components/Products'
import bgImg from "./assets/futuristic-symmetry-reflection-abstract-background-with-orange-blue-neon-lights.jpg"
import './index.css';
import ProductsTab from './components/ProductsTab'
import Community from './components/Community'
import OurClients from './components/OurClients'
import Demo from './components/Demo'
import Footer from './components/Footer'

function App() {
  const homeStyle = {
    width: "100%",
    height: "120vh",
    padding: "0",
    background: `linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5)), url(${bgImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div style={homeStyle} className='App bg-black'>
      <Navbar />
      <Home />
      <Products />
      <Community />
      <OurClients />
      <Demo />
      <Footer />
    </div>
  )
}

export default App
