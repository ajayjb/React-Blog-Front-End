import React, {useContext, useState} from 'react';
import "./settings.css"
import Sidebar from '../../components/sidebar/Sidebar';
import { Context } from '../../context/Context';
import axios from 'axios';

export default function Settings() {
    const {user, dispatch} = useContext(Context);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [file, setFile] = useState(null);
    const [profile, setProfile] = useState(false);
    const PF = "http://localhost:5000/images/";

    const handleSubmit = async (e)=>{
        e.preventDefault();
        dispatch({type:"UPDATE_START"});
        const updatedUser = {
          userID : user._id,
          username, password, email, name
        }
        if(file){
          const data = new FormData();
          const filename = Date.now() + file.name;
          data.append("name", filename);
          data.append("file", file);
          updatedUser.profilePicture = filename;
          try{
              await axios.post("http://localhost:5000/api/upload", data);
          }catch(err){
            console.log(err);
          }
        }
        try{
            const res = await axios.put("http://localhost:5000/api/users/update/"+user._id, updatedUser);
            dispatch({type:"UPDATE_SUCCESS", payload:res.data});
            setProfile(true);
          }catch(err){
            dispatch({type:"UPDATE_FAILURE"});
          }
    }
    const handleDelete =async ()=>{
      try{
           await axios.delete("http://localhost:5000/api/users/delete/"+user._id,
           {data:{userID:user._id}});
           function logout(){
             dispatch({type:"LOGOUT"});
           }
           logout();
      }catch(err){
           console.log(err);
      }
    }
    return (
        <div className="settings">
          <div className="settingsWrapper">
              <div className="settingTitle">
                  <span className="settingUpdateTitle">Update your account</span>
                  <span><i className=" settingDelete far fa-trash-alt" onClick={handleDelete}></i></span>
              </div> 
                  <form class="formSettings" onSubmit={handleSubmit}>
                      <label>Profile Picture</label>
                      <div className="settingsPP">
                          <img className="profileImage" src={file ? URL.createObjectURL(file) : (PF+user.profilePicture)} alt="Avatar" />
                          <label htmlFor="fileInput"><i className="profileImageUpload far fa-user-circle"></i></label>
                      </div>
                      <input type="file" id="fileInput" style={{display:'none'}} onChange={(e)=>{setFile(e.target.files[0])}}/>

                      <label>Name</label>
                      <input type="text" placeholder={user.name} onChange = {(e)=>{setName(e.target.value)}} />

                      <label>Username</label>
                      <input type="text" placeholder={user.username} onChange = {(e)=>{setUsername(e.target.value)}} />
                      <label>Email</label>
                      <input type="email" placeholder={user.email} onChange = {(e)=>{setEmail(e.target.value)}}/>
                      <label>Password</label>
                      <input type="password" onChange = {(e)=>{setPassword(e.target.value)}}/>
                      <button type="submit" className="settingsSubmit">Update</button>    
                  </form>
                  {profile? <span className="essage">Profile updated successfully</span>: <span></span>}
          </div>
              <Sidebar/>
        </div>
    )
}
