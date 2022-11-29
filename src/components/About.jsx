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
            This is a personal project, where you can track your Family tree.
            You can add a family member or a friend
            You will have a direct connection to the main user as well as the member that you were added from.
            You can add, delete, edit or show the info about your member
            You can only access the site after creating an account

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