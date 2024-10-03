import React from 'react';
import Home from './pages/Home';
import Profile from './pages/Profile';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

let RouteFanMake = () => {
    return (
    <BrowserRouter basename={import.meta.env.VITE_BASENAME}>
        <Routes>
            <Route path="/" element={Home()} />
	        <Route path="/profile" element={Profile()} />
        </Routes>
    </BrowserRouter>
    )
}

export default RouteFanMake;