import React, { Component } from 'react';
import Widecard from '../components/Widecard';
import profilepic from '../img/pic.jpg';

class Education extends Component{
    render(){
        return(
            <div className="condiv">

                <img src={profilepic} className="profilepic"></img>
                <h1 className="subtopic">My Education</h1>

                <Widecard title="B.Tech Electronics and Communication Engineering" where="ACEIT" 
                from="July 2017" to="Present"/>

                <Widecard title="SSC | HSC" where ="Central Board Of Secondary Education New Delhi"  
                from="2014" to="2017" />
            </div>
        )
    }
}

export default Education