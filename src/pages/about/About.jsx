import React from 'react';
import "./about.css";

export default function About() {
    return (
        <div className="about">
           <img className="aboutImg" src="https://i.imgur.com/fcu6l0V.jpg" alt="Web Development"/>
           <div className="boxModel">
           <p className="aboutPara1">
            Hi this is Ajay, welcome to my Moderen Blog website. Oh! wait wait I know this not a great about page, calm down I'm just learning, 
            first let me give introduction about my boring life. Here we go. I'm a software developer based in Bengaluru. Basically I'm from 
            mechanical background, worked as Mechanical Design Engineer for 2.5 years. Every day as a Mechanical Engineer was like hell, Later I 
            decided to quit my job beacause during that period of time I never felt so excited or passionate about what I'm doing. There was always
            something was lacking.</p>
           <p className="aboutPara2"> During my college days I always wanted to learn software coding, due to lack of guidance and the right motivation, 
           I couldn't able follow my dream. So this time I'm not going to make the same mistake. Few months back I started over. started learning 
           coding on my own. When I'm coding its just feels like this is the thing I really wanted do in the whole world. Currently I'm learning Web 
           Development.</p>
           <p className="aboutPara2">I made this Moderen Blog website with what I have learn't till today, using MERN stack (MongoDB, ExpressJS, 
            ReactJS, NodeJS). In this Moderen Blog website users can  write your own blogs on technical field, so that other people can read about 
            them. My final goal is to learn Blockchain Technology and get into Devops. So finally this is about me and my Moderen blog website. 
            Good bye, don't have a good life, have a great life.</p>
           </div>
        </div>
    )
}
