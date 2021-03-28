import React, { Component } from 'react'
import profilepic from '../img/pic.jpg';

class Skills extends Component{
    constructor(props){
        super(props);
        this.state={
            'myskills':['Microsoft Azure','C and C++', 'Data Structure and Algorithms', 'HTML', 'CSS', 'JavaScript', 'REACT JS', 'Electronics [Knowledge of Semiconductor/VLSI Design]']
        };
    }
    render(){
        return(
            <div className="condiv skills">
                <img src={profilepic} className="profilepic"></img>
                <h1 className="subtopic">My Skills</h1>
                <ul>
                    {this.state.myskills.map((value)=>{
                        return <li>{value}</li>
                    })}
                </ul>
            </div>
        )
    }
}

export default Skills