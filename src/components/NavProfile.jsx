import React from "react";
import { Link } from "react-router-dom";
import Logout from "./Logout";
import "../css/profile.css"

const NavProfile = () => {

    return (
        <div className="nav-profile">
            <div className="links-nav">
            <Link to="posts">Posts</Link><br/>
            <Link to="History">History</Link><br/><br/>
            </div>

            <Logout />
        </div>
    )
}

export default NavProfile;