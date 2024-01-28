import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LifeStrategy from '../pages/LifeStrategy';
import Cabinet from '../pages/Cabinet';
import Login from '../pages/Login';
import Contacts from '../pages/Contacts';
import Home from '../pages/Home';

const Content = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/life-strategy" element={<LifeStrategy />} />
            <Route path="/cabinet" element={<Cabinet />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contacts" element={<Contacts />} />
        </Routes>
    );
};

export default Content;