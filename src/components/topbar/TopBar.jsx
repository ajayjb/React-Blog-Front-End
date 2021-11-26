import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { Context } from "../../context/Context";

import ("./topbar.css");

export default function TopBar() {
    const {user, dispatch} = useContext(Context);

    const handleLogout = ()=>{
        dispatch({type:"LOGOUT"});
    }
    const PF = "http://localhost:5000/images/";
    return (
        <div className="top">
            <div className="topLeft">
            {/* <i className="topIcon fab fa-twitter fa-lg"></i>
            <i className="topIcon fab fa-facebook fa-lg"></i>
            <i className="topIcon fab fa-instagram fa-lg"></i>
            <i className="topIcon fab fa-pinterest fa-lg"></i> */}
            <Link className="link" to="/"><span className="logo">Moderen Blog</span></Link>
            </div>
            <div className="topCenter">
            <ul className="topList">
                <li className="topListItem">
                    <Link className="link" to="/">Home</Link>
                </li>
                <li className="topListItem">
                    <Link className="link" to="/about">About</Link>
                </li>
                <li className="topListItem">
                <Link className="link" to="/contact">Contact</Link>
                </li>
                <li className="topListItem">
                <Link className="link" to="/write">Write</Link>
                </li>
                <li className="topListItem" onClick={handleLogout}> {user && "Logout"}
                {/* <Link className="link" onclick = {handleLogout} to="/login">{user && "Logout"}</Link> */}
                </li> 
            </ul>
            </div>
            <div className="topRight">
                { user ? <div>
                    {/* <Link to="/settings" className="link"><img className="topImage" src={PF + user.profilePicture} alt="Update profile" /></Link> */}
                    <Link to="/settings" className="link"><span className="name">{user.name}</span></Link>
                </div>
                 :
                <>
                <ul className="rightTopList">
                <li className="RightTopListItem">
                <Link className="link" to="/login">Login</Link>
                </li>
                <li className="RightTopListItem">
                <Link className="link" to="/register">Rigister</Link>
                </li>
                </ul>
                </>
                }
                {/* <i className=" topSearchIcon fas fa-search"></i> */}
            </div>
        </div>
    )
}
