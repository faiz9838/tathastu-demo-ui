import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import ContactUs from '../pages/ContactUs';

function AppRouter() {
    return (
        <Router>

            <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/contact" element={<ContactUs />} />

            </Routes>
        </Router>
    );
}

export default AppRouter;
