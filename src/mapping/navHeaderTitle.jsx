import React from 'react'
import { useLocation } from 'react-router-dom';
import NavHeader from "../Database/navHeaderData";
import HeaderList from "../lib/headerList";

const navHeaderTitle = () => {
    const location =useLocation();
    const targetId = location.pathname;

  return (
    <div className="w-full bg-opacity-25">
        <nav className="w-full flex flex-col">
          <NavHeader data={HeaderList} targetId={targetId}/>
        </nav>
    </div>
  )
}

export default navHeaderTitle