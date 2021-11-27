import React, { useContext, useState } from 'react';
import "./write.css";
import axios from "axios";
import {Context} from "../../context/Context";

export default function Write() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const {user} = useContext(Context);
  const [category1, setCategory1] = useState("");
  const [category2, setCategory2] = useState("");

  const handleSubmit = async (e)=>{
    e.preventDefault();
    const newPost = {
      username : user.username,
      title : title,
      description : desc,
      categories : [category1, category2]
    }

    if(file){
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try{
          await axios.post("http://localhost:5000/api/upload", data);
      }catch(err){
        console.log(err);
      }
    }

 if (category1 !== ""){
      try{
          await axios.post("http://localhost:5000/api/category", {name:category1});
      }
      catch(err){
          console.log(err);
      }
    }

    if (category2 !== ""){
      try{
          await axios.post("http://localhost:5000/api/category", {name:category2});
      }
      catch(err){
          console.log(err);
      }
  }

    try{
      const res = await axios.post("http://localhost:5000/api/posts", newPost);
      window.location.replace(`/posts/${res.data._id}`);
    }catch(err){
      console.log("something wrong");
    }
  }
    return (
        <div className="write">
        {file && <img className="writeImg" 
        src={URL.createObjectURL(file)} alt="" /> }
            <form className="writeForm" onSubmit={handleSubmit}>
            <div className="writeFormGroup">
            <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus fa-lg"></i>
              </label>
              <input type="file" onChange id="fileInput" onChange={(e)=>{setFile(e.target.files[0])}} 
              style={{display: 'none'}}/>
              <input type="text" placeholder="Title" className="title" onChange={(e)=>{setTitle(e.target.value)}}
              autoFocus={true}/>
              <div className="category">
              <input spellCheck="true" className="category1" onChange = {(e)=>{setCategory1(e.target.value)}} type="text" placeholder="Category 1" />
              <input spellCheck="true" className="category2" onChange = {(e)=>{setCategory2(e.target.value)}} type="text" placeholder="Category 2" />
            </div>
            </div>
            
             
              <div className="writeFormGroup">
                  <textarea placeholder="Tell your Story" type="text" name="" 
                  onChange={(e)=>{setDesc(e.target.value)}} className="writeInput writeText"></textarea>
              </div>
              <button type="submit" className="writeSubmit">Publish</button>
            </form>
        </div>
    )
}
