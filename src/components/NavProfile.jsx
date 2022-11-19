import React from "react";
import { Link } from "react-router-dom";
import Logout from "./Logout";

const NavProfile = () => {
    return (
        <div className="nav-profile">
            <Link to="tree">Tree</Link><br/>
            <Link to="posts">Posts</Link><br/>
            <Link to="History">History</Link><br/><br/>
            <Logout />
        </div>
    )
}

export default NavProfile;