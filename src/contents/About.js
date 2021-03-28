import React, { Component } from 'react';
import profilepic from '../img/pic.jpg';

class About extends Component{
    render(){
        return(
            <div className="condiv">
                <img src={profilepic} className="profilepic"></img>
                <h1 className="subtopic">About Me</h1>
                <h4>Hey there,</h4>
                <h1>My name is Govind Thakur</h1>
                <br></br>
                <p>
                    First and foremost, I love writing code. Ever since writing my first program in Python and manipulating it 
                    to produce a desired, I have been obessed with the idea of using software to solve practical problems.
                    <br></br><br></br>
                     Software 
                    engineering is a never ending puzzle that I am passionately engaged in solving. I believe in the power of 
                    programming to transform and improve the lives of people around the world.
                    <br></br>
                    <br></br>
                    I feel obligated to build front-end interfaces of supreme quality. I love to JavaScript ecosystem. 
                </p>
            </div>
        )
    }
}

export default About