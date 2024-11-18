import './bootstrap';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {RouteFanMake} from './RouteFanMake';

if (document.getElementById('app')) {
    let root = ReactDOM.createRoot(document.getElementById('app'));
    root.render(RouteFanMake());
}