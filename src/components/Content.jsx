import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LSUnits from '../pages/LSUnits';
import Cabinet from '../pages/Cabinet';
import Login from '../pages/Login';
import Contacts from '../pages/Contacts';
import Home from '../pages/Home';

const Content = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/life-strategy-units" element={<LSUnits />} />
            <Route path="/cabinet" element={<Cabinet />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contacts" element={<Contacts />} />
        </Routes>
    );
};

export default Content;