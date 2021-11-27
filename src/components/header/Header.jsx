import React from 'react';
import "./header.css"

function Header() {
    return (
        <div className="header">
           <div className="headerTitle">
               <span className="headerTitlesm">MODEREN TECH</span>
               <span className="headerTitlelg">Blog</span>
           </div>
           <img className="headerImg" src="https://wallpapercave.com/wp/wp2042030.jpg" alt="React & Node Avatar" />
        </div>
    )
}

export default Header;

