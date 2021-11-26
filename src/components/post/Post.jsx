import React from 'react';
import "./post.css";
import {Link} from "react-router-dom";

export default function Post(props) {
    let newDate = new Date(props.post.createdAt);
    let hosaDate = newDate.toDateString(); 
    const PF = "http://localhost:5000/images/";
    return (
        <div className="post">
            {props.post.photo && <img className="postImage" src={PF + props.post.photo} alt="Posts" />}
            <div className="postInfo">
                <div className="postCats">
                      {(props.post.categories).map((item)=>{
                        {return <span key={item} className="postCat">{item}</span>}
                      })}  
                </div>
                <Link className="link" to={`/posts/${props.post._id}`}><span className="postTitle">{props.post.title}</span></Link>
                <hr />
                <span className="date">{hosaDate}</span>
                <p className="postDesc">{props.post.description}</p>
            </div>
        </div>

    )
}
