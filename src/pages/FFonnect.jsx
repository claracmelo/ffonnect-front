import React from "react";
import { Outlet } from "react-router-dom";
import Profile from "../components/Profile";
import "../css/ffconnect.css"

// TREE page
const FFonnect = ({user}) => {
    return (
        <div className="ffonnect">
            <div className="f-show">
                <Outlet />
            </div>
            <div className="f-profile">
                <h2>Profile Page</h2>       
                <Profile user={user}/>
            </div>

        </div>
    )
}

export default FFonnect;