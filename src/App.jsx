import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { Home } from './components/Home'
import Products from './components/Products'
import bgImg from "./assets/background.jpg"
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
    backgroundImage: `url(${bgImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div style={homeStyle} className='App'>
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
