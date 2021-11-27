import React, {useState} from 'react';
import "./register.css";
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [er, setEr] = useState(false);

    async function handleSubmit(e){
          e.preventDefault();
          try{
            const res = await axios.post("http://localhost:5000/api/auth/register", {
              username,
              email,
              password
          });
          res.data && window.location.replace("/login");
    }catch(err){
        setEr(true);
    }
}
      
    return (
        <div className="register">
        <form className="loginForm" onSubmit={handleSubmit}>
        <h2 className="loginName">Register</h2>
              <label htmlFor="username">Username</label>
              <input id="username" type="text" placeholder="Username" onChange={(e)=>{setUsername(e.target.value)}}/>
              <label htmlFor="email">Email</label>
              <input id="email" type="email" placeholder="Enter Your Email" onChange={(e)=>{setEmail(e.target.value)}} />
              <label htmlFor="password">Password</label>
              <input id="password" type="password" placeholder="Enter Your Password" onChange={(e)=>{setPassword(e.target.value)}}/>
              <button className="registerButton" type="submit">Register</button>
        </form>
        <h3><span>OR</span></h3>
        <Link className="linkLogi" to="/login"><button className="logiButton" type="submit">Login</button></Link>
        {er && <span className = "err">Something went wrong !</span>}
        </div>
    )
}
