import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CreateLifeStrategy from '../pages/CreateLifeStrategy';
import Login from '../pages/Login';
import Home from '../pages/Home';
import HowTo from '../pages/HowTo';
import About from '../pages/About';

const AppRoutes = () => {
    return (
        <Routes>
            <Route index path="/life-strategy" element={<Home />} />
            <Route path="/life-strategy/strategize" element={<CreateLifeStrategy />} />
            {/* <Route path="/life-strategy/login" element={<Login />} /> */}
            <Route path="/life-strategy/how-to" element={<HowTo />} />
            <Route path="/life-strategy/about" element={<About />} />
            {/* <Route path="/" element={<Home />} />
            {/* <Route path="/" element={<Home />} />
            <Route path="/strategize" element={<CreateLifeStrategy />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} /> */}
        </Routes>
    );
};

export default AppRoutes;