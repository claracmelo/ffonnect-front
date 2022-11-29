import React from "react";
import {NavLink,useNavigate} from "react-router-dom"

const About = () => {
    const navigate = useNavigate()
    return (
<div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button>
            <NavLink to="/">&times;</NavLink>
          </button>
        </div>
        <div className="title">
          <h1>About</h1>
        </div>
        <div className="body">
          <div>
          Here we talk about this project 
          </div>
        </div>
        <div className="footer">
          <button onClick={() => navigate('/')}>Home</button>
        </div>
      </div>
    </div>
    )
}

export default About;