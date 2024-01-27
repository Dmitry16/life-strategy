import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Resume from '../pages/Resume';
import Skillset from '../pages/Skillset';
import Portfolio from '../pages/Portfolio';
import Contacts from '../pages/Contacts';
import Blog from '../pages/Blog';
import Home from '../pages/Home';

const Content = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/skillset" element={<Skillset />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/blog" element={<Blog />} />
        </Routes>
    );
};

export default Content;