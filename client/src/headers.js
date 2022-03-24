import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../src/css/header.css'
import frog from "../src/imgs/frog.png"

export default class Headers extends Component{

    render(){
        return(
            <div className="container">
               
                <nav>
                    <div className="logo"><img src={frog} alt="logo"/></div>
                    <span className="line"></span>
                    <li className="home"><Link to="/">Home</Link></li>
                   
                    <ul>
                        <li><Link to="/proteinas">Proteinas</Link></li>
                        <li><Link to="/carboidratos">Carboidratos</Link></li>
                        <li><Link to="/gorduras">Gordura</Link></li>
                    </ul>
                </nav>
            </div>
        )
    }
}