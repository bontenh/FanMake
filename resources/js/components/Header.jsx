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
                    <li><a href="/">HOME</a></li>
                    <li><a href="/profile">プロフィール</a></li>
                    {/* <li>スケジュール</li>
                    <li>お知らせ</li> */}
                </ul>
            </div>
            <Link to="/streams/" className="item">
                Streamy
            </Link>
            <div className="right menu">
                <Link to="/streams/" className="item">
                    All Streams
                </Link>
                {/* <GoogleAuth /> */}
            </div>
        </div>
    );
};

// export default Header;