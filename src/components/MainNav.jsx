import React from "react";
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
            <div className="App">
                <button className="openModalBtn">
                    <NavLink to="about">About Us</NavLink>
                </button>
            </div>
        </div>
    )
}

export default MainNav;