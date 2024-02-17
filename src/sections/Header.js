import React, { useState, useEffect } from 'react';
import '../styles/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBell } from '@fortawesome/free-solid-svg-icons';

function Header() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="header-container">
            <div className="header">
                <div className="left-header">
                    <p>Testvalley</p>
                    <div className="menu-bar"> 
                        <p>=카테고리</p>
                    </div>
                </div>
                <div className="middle-header">
                    <div className='search'>
                        <FontAwesomeIcon icon={faSearch} />
                        <input type="text" placeholder='产品搜索' />
                    </div>
                </div>
                <div className="right-header">
                {windowWidth < 1000 && (
                            <div className='icons'>
                                <FontAwesomeIcon icon={faSearch} color='gray'/>
                                <FontAwesomeIcon icon={faBell} color='gray'/>
                            </div>
                        )}
                        {windowWidth >= 1000 && <p>로그인 / 회원가입</p>}
                    
                </div>
            </div>
        </div>
    );
}

export default Header;
