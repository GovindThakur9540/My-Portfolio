import React, { Component } from 'react';
import Social from '../components/Social';
import profilepic from '../img/pic.jpg';

class Contact extends Component{
    render(){
        return(
            <div className="condiv">
                <img src={profilepic} className="profilepic"></img>
                <h1 className="subtopic">Contact Me</h1>
                <h3>Email: govindthakur9540@gmail.com</h3>
                <h3>Address: V.P.O. -Rajokari, New Delhi-110038</h3>

                <Social />
            </div>
        )
    }
}

export default Contact