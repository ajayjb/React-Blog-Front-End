import axios from 'axios';
import React, { useState } from 'react';
import "./contact.css"

export default function Contact() {
    const [sent, setSent] = useState(false);
    const [name, setName] = useState("");
    const[email, setEmail] = useState("");
    const [text, setText] = useState("");
    const handleSubmit = async (e)=>{
        e.preventDefault();
        await axios.post("http://localhost:5000/api/contacts/", {
            name : name,
            email : email,
            message : text
        });
        setSent(true);
        setTimeout(() => {
            window.location.reload();
        }, 2000);
    }
    return (
        <div className="contact">
            <span className="heading0">GOT A QUESTION?</span>
            <h3 className="heading1">Contact Moderen Blog</h3>
            <p className="para1">We’re here to help and answer any question you might have. We look forward to hearing from you 🙂</p>
            <form className="contactForm" onSubmit={handleSubmit}>
              <label className="name1" htmlFor="nameInput">Name</label>
              <input className="nameInput" type="text" onChange={(e)=>{ setName(e.target.value) }} placeholder="Name"/>
              <label className="email" htmlFor="emailInput">Email</label>
              <input className="emailInput" type="email" onChange={(e)=>{ setEmail(e.target.value) }} placeholder="Email"/>
              <label className="message">Message</label>
              <textarea className="messageInput" onChange={(e)=>{ setText(e.target.value) }} cols="30" rows="8"></textarea>
              <button className="contactSubmit" type="submit">Send Message</button>
            </form>
            {sent? <span className="sent">"Message sent successfully"</span>: <span></span>}
        </div>
    )
}
