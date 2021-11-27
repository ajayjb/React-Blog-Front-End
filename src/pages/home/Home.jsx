import React, { useEffect, useState } from 'react';
import Header from '../../components/header/Header';
import Posts from '../../components/posts/Posts';
import Sidebar from '../../components/sidebar/Sidebar';
import "./home.css";
import axios from "axios";
import {useLocation} from "react-router";

export default function Home() {
    const [post, setPost] = useState([]);
    const {search}  = useLocation();
    useEffect(()=>{
    async function fetchUser() {
       try {
         const response = await axios.get("http://localhost:5000/api/posts"+search);
         console.log(search);
         setPost(response.data);
      } catch (error) {
       console.error(error);
     }
   }
   fetchUser();
}, [search])
    return (
        <div>
            <Header/>
            <div className="home">
               <Posts posts = {post}/>
               <Sidebar/>
            </div>
        </div>
       
    );
}
