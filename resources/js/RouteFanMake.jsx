import React from 'react';
import {Home} from './pages/Home';
import {Header} from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {StreamShow} from './components/StreamShow';

export let RouteFanMake = () => {
    return (
        <BrowserRouter basename={import.meta.env.VITE_BASENAME}>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/streams/" element={<StreamShow />} />
                {/* <Route path="/streams/new" element={StreamCreate()} />
                <Route path="/streams/edit/:id" element={StreamEdit()} />
                <Route path="/streams/delete/:id" element={StreamDelete()} />
                <Route path="/streams/:id" element={StreamShow()} /> */}
            </Routes>
        </BrowserRouter>
    )
}

// export default RouteFanMake;