import React from 'react';
// import { Link } from 'react-router-dom';
import { Link } from 'react-router';
import VerticalBar from '../views/examples/VerticalBar';
import Tables from '../views/examples/Tables';
import './Header.css';

const TablesItem = ({todos, to}) => (
    <Link to={to} className="menu-item">
        <Tables todos={todos}/> 
    </Link>
)

const ChartsItem = ({todos, to}) => (
    <Link to={to} className="menu-item">
        <VerticalBar todos={todos}/> 
    </Link>
)

const HomeItem = ({children, to}) => (
    <Link to={to} className="menu-item">
            {children}
    </Link>
)

const Header = ({todos}) => {

    return (
        <div>
            <div className="logo">
                velopert
            </div>
            <div className="menu">
                <TablesItem to={'/table'} todos={todos} />
                <ChartsItem to={'/chart'} todos={todos} />
                <HomeItem to={'/'}>홈</HomeItem>
            </div>
        </div>
    );
};

export default Header;