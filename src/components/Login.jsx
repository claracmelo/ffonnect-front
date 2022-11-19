import React from "react";
import "../css/modal.css";
import { NavLink } from "react-router-dom";

const Login = (props) => {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button>
            <NavLink to="/">&times;</NavLink>
          </button>
        </div>
        <div className="title">
          <h1>Login</h1>
        </div>
        <div className="body">
          <form onSubmit={props.login}>
            <label htmlFor="email">Email</label>
            <input type="text" id="email" name="email"/>
            <br />
            <label htmlFor="password">Password</label>
            <input type="text" id="password" name="password"/>
            {/* <input type="submit" value="login" /> */}
            <div className="footer">
          <button id="cancelBtn"><NavLink to="/" >Cancel</NavLink></button>
          <button type="submit" value="login">Login</button>
        </div>
            <br />
          </form>
        </div>

      </div>
    </div>
  );
}
export default Login;