import axios from 'axios';
import React, {useRef, useContext} from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
import "./login.css";

export default function Login() {
    const userRef = useRef();
    const passwordRef = useRef();
    const {dispatch, isFetching} = useContext(Context);
    
    async function handleSubmit(e){
        e.preventDefault();
        dispatch({type:"LOGIN_START"});
        try{
            const res = await axios.post("http://localhost:5000/api/auth/login",{
                username : userRef.current.value,
                password : passwordRef.current.value
            });
        dispatch({type:"LOGIN_SUCCESS", payload:res.data});
        }catch(err){
            dispatch({type:"LOGIN_FAILURE"});
        }
    }
    
    return (
        <div className="login">
        <form className="loginForm" onSubmit = {handleSubmit}>
        <h2 className="loginName">Login</h2>
              <label htmlFor="email">Username</label>
              <input id="email" type="text" ref = {userRef} placeholder="Enter Your Username" />
              <label htmlFor="password">Password</label>
              <input id="password" ref = {passwordRef} type="password" placeholder="Enter Your Password" />
              <button className="loginButton" type="submit" disabled={isFetching}>Login</button>
        </form>
        <h3><span>OR</span></h3>
        <Link className="linkRegi" to="/register"><button className="regiButton" type="submit">Register</button></Link>
        </div>
    )
}
