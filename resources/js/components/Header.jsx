import React from 'react';

let Header = () => {
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
        </div>
    );
};

export default Header;