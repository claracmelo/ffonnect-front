import React from "react";
import "../css/modal.css";
import { NavLink } from "react-router-dom";


const Register = (props) => {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button>
            <NavLink to="/">&times;</NavLink>
          </button>
        </div>
        <div className="title">
          <h1> <strong>Register </strong></h1>
        </div>
        <div className="body">
          <form onSubmit={props.register}>
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" name="username"/>
            <br />
            <label htmlFor="date">Date of Birth</label>
            <input type="date" id="dob" name="dob"/>
            <br />
            <label htmlFor="name">Email</label>
            <input type="text" id="email" name="email"/>
            <br />
            <label htmlFor="name">Password</label>
            <input type="text" id="password" name="password"/>
            <div className="footer">
            <button id="cancelBtn"><NavLink to="/" >Cancel</NavLink></button>
            <button type="submit">Create</button> 
            </div>            
          </form >
        </div>    
      </div>
    </div>
  );
}

export default Register;