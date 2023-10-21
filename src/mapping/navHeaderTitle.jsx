import React from 'react';
import { useLocation } from 'react-router-dom';
import headerList from "../lib/headerList";
import NavHeader from '../lib/navHeaderData';

const NavHeaderTitle = () => {
    const location =useLocation();
    const targetId = location.pathname;

    return (
        <div className='w-full bg-opacity-25'>
            <nav className='w-full flex flex-col'>
                <NavHeader data={headerList} targetId={targetId} />
            </nav>
        </div>
    );
};

export default NavHeaderTitle;
