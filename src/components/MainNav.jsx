import React from "react";
// import Login from "./Login";
// import Register from "./Register";
import About from "./About";
import { NavLink } from "react-router-dom";
import "../css/ModalMainButtons.css";

const MainNav = () => {

    return (
        <div className="main-nav">
            <div className="App">
                <button className="openModalBtn">
                    <NavLink to="login">login</NavLink>
                </button>
            </div>
            <div className="App">
                <button className="openModalBtn">
                    <NavLink to="register">New User?</NavLink>
                </button>
            </div>
            <About />
        </div>
    )
}

export default MainNav;