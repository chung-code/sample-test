import React from 'react';
import { Link } from 'react-router';
import './Header.css';

const MenuItem = ({ children, to}) => (
    <Link to={to} className="menu-item">
            {children}
    </Link>
)

const Header = ( ) => {

    return (
        <div>
            <div className="logo">
                챗봇 관리자 페이지
            </div>
            <div className="menu">
                <MenuItem to={'/'}>CRUD</MenuItem>
                {/* <MenuItem to={'/table'} >Table</MenuItem >
                <MenuItem to={'/chart'} >Chart</MenuItem> */}
                <MenuItem to={'/freq'} >Frequency</MenuItem>               
                <MenuItem to={'/emotion'} >Emotion</MenuItem>               
                {/* <MenuItem to={'/line'} >Line</MenuItem> */}
            </div>
        </div>
    );
};

export default Header;