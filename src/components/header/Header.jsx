import React from 'react';
import "./header.css"

function Header() {
    return (
        <div className="header">
           <div className="headerTitle">
               <span className="headerTitlesm">MODEREN TECH</span>
               <span className="headerTitlelg">Blog</span>
           </div>
           <img className="headerImg" src="https://itchronicles.com/wp-content/uploads/2021/01/technology-impact-on-life-1024x566.jpg.webp" alt="React & Node Avatar" />
        </div>
    )
}

export default Header;

