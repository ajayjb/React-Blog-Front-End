import React, { useEffect, useState }  from 'react';
import "./sidebar.css";
import axios from 'axios';
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [cats, setCat] = useState([]);
  useEffect(()=>{
    async function getCats() {
       try {
         const response = await axios.get("http://localhost:5000/api/category");
         setCat(response.data);
      } catch (error) {
       console.error(error);
     }
    }
     getCats();
  },[]);
    return (
        <div className="sideBar">
          <div className="wrapper">
            <div className="sideBarItem">
              <span className="sideBarTitle">ABOUT ME</span>
              <img src="https://pbs.twimg.com/profile_images/1462870429186461696/Kq7HrwQf_400x400.jpg" alt="Owner Avatar" />
              <p className="myInfo">Hi I'am Ajay,
                 Web developer, Crypto Enthusiast, 
                 Web3, Block Chain Technology and Mechanical Engineer.</p>
            </div>
            <div className="sideBarItem">
            <span className="sideBarTitle">CATOGORIES</span>
            <ul className="catogoriesList">
                    {cats.map((item)=>{
                      return <li key={item.name} className="catogoriesListItem">
                      <Link className = "cat" to = "/write"> {item.name} </Link>
                     </li> 
                    })}
            </ul>
            </div>
            <div className="sideBarItem">
                <span className="sideBarTitle">Follow Us</span>
                <div className="socialMedia">
                <a href="https://twitter.com/ajay_j_b"><i className="socialIcon fab fa-twitter fa-lg"></i></a>
                </div>
            </div>
          </div>
        </div>
    )
}
