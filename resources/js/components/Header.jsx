import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

import GoogleAuth from './GoogleAuth';

export let Header = () => {
    useEffect(() => {});
    return (
        <div>
            <h1>FAN MAKE</h1>
            <div>
                <ul>
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/chat">チャット</Link></li>
                    <li><Link to="/streams">配信</Link></li>
                </ul>
            </div>
        </div>
    );
};

// export default Header;