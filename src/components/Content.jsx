import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CreateLifeStrategy from '../pages/CreateLifeStrategy';
import Login from '../pages/Login';
import Home from '../pages/Home';
import About from '../pages/About';

const Content = () => {
    return (
        <Routes>
            <Route path="/life-strategy" element={<Home />} />
            <Route path="/life-strategy/strategize" element={<CreateLifeStrategy />} />
            <Route path="/life-strategy/login" element={<Login />} />
            <Route path="/life-strategy/about" element={<About />} />
            {/* <Route path="/" element={<Home />} />
            <Route path="/strategize" element={<CreateLifeStrategy />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} /> */}
        </Routes>
    );
};

export default Content;