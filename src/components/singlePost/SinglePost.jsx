import React, { useEffect, useState, useContext } from 'react';
import { useLocation } from 'react-router';
import "./singlePost.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";

export default function SinglePost() {
    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const [post, setPost] = useState({});
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [editMode, setEditMode] = useState(false);
    useEffect(()=>{
      async function getUser() {
        try {
          const response = await axios.get("http://localhost:5000/api/posts/"+path);
          setPost(response.data);
          setTitle(response.data.title);
          setDesc(response.data.description);
       } catch (error) {
        console.error(error);
      }
    }
    getUser();
    },[path]);

    const handleDelete = async ()=>{
          try{
            await axios.delete(`http://localhost:5000/api/posts/${path}`, 
            {data:{username:post.username}});
            window.location.replace("/");
          }
          catch(err){
            console.log(err);
          }
    }
    
    let newDate = new Date(post.createdAt);
    let hosaDate = newDate.toDateString(); 
    const {user} = useContext(Context);
    const PF = "http://localhost:5000/images/";
   
    const handleEdit = async()=>{
       setEditMode(true);
    }

    const handleUpdate = async ()=>{
        try {
          const response = await axios.put("http://localhost:5000/api/posts/"+path,
          {username:user.username,
           title:title,
           description: desc
          }
          );
          setPost(response.data);
          setTitle(response.data.title);
          setDesc(response.data.description);
          setEditMode(false);
       } catch (error) {
        console.error(error);
      }
    }
    

    return (
        <div className="SinglePost">
          <div className="singlePostWrapper">
            {post.photo && <img src={PF + post.photo} alt="" className="singlePostImage" />}
            {editMode ? <input type="text" onChange={(e)=>{setTitle(e.target.value)}} className="singlePostTitleInput" autoFocus value={title}></input>:
            <h1 className="singlePostTitle">{title}
            {post.username===user?.username && 
            <div className="edit"> 
            <i className="singlePostIcon far fa-edit" onClick={handleEdit}></i>
            <i className="singlePostIcon far fa-trash-alt" onClick={handleDelete}></i>
            </div>
            }
            </h1>
            }
            <div className="singlePostInfo">
                <span className="AuthorName">Author : <b><Link className="owner" to = {`/?user=${post.username}`}>{" "+post.username}</Link></b></span>
                <span className="SinglePostDate">{hosaDate}</span>
            </div>
            {editMode ? <textarea value={desc} onChange={(e)=>{setDesc(e.target.value)}} autoFocus type="text" className="descInput"></textarea>:
              <p className="desc">{desc}</p>
            }
            {
              editMode && <button className="singlePostEdit" onClick={handleUpdate}>Update</button>
            }
          </div>
        </div>
    )
}


