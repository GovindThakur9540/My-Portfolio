import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../img/pic.jpg';
import Social from '../components/Social'

class Home extends Component{
    render(){
        return(
            <div className="condiv home">
                <img src={profilepic} className="profilepic"></img>

                <ReactTypingEffect className="typingeffect" text={['I am Govind Thakur', 'I am a web developer', 'I love writing code']} speed={100} eraseDelay={700}/>

                <Social />
            </div>
        )
    }
}

export default Home