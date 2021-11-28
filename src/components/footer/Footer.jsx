import React from 'react';
import { Link } from "react-router-dom";
import "./footer.css"

export default function Footer() {
    const currentdate = new Date();
    const currentYear = currentdate.getFullYear();
    return (
        <div className = "footer">
            <Link className="footerLink" to="/"><h3 className="heading">Moderen Blog</h3></Link>
            <p className="para">© Copyright {currentYear} @Moderen Blog</p>
            <a href="https://twitter.com/ajay_j_b"><i className="footerTwitter fab fa-twitter fa-md"></i></a>
        </div>
    )
}
