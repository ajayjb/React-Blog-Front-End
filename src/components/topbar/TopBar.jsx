import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { Context } from "../../context/Context";

import ("./topbar.css");

export default function TopBar() {
    const {user, dispatch} = useContext(Context);
    let noProfilePic = false;
    try{
        if((user.profilePicture).length === 0){
            noProfilePic = true;
        }
    }catch(e){
        console.log(e);
    }

    const handleLogout = ()=>{
        dispatch({type:"LOGOUT"});
    }
    const PF = "http://localhost:5000/images/";
    return (
        <div className="top">
            <div className="topLeft">
            <Link className="link" to="/"><span className="logo">Moderen Blog</span></Link>
            </div>
            <div className="topCenter">
            <ul className="topList">
                <li className="topListItem">
                    <Link id="forAni" className="link" to="/">Home</Link>
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
                </li> 
            </ul>
            </div>
            <div className="topRight">
                { user ? <div>
                    <Link to="/settings" className="link"><img className="topImage" src={noProfilePic ? "https://w7.pngwing.com/pngs/717/24/png-transparent-computer-icons-user-profile-user-account-avatar-heroes-silhouette-black-thumbnail.png" :PF + user.profilePicture} alt="Update profile"/></Link>
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
            </div>
        </div>
    )
}
