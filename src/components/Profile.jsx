import React from "react";
import NavProfile from "./NavProfile";
import "../css/profile.css"
import pic from "../css/whistler.jpeg"

const Profile = ({user}) => {
    
const name = user.username
const lastName = user.last_name

    return (
        <div className="profile">
            {/* show the user pic */}
            <div className="img">
                <img src={pic} alt="user" />
                </div>
            
            <br/>
            {/* show the username */}
            <div className="name">
            <label id="profile_name">{name} {lastName} </label>
            
            
            </div>
            <div className="nav">
            <NavProfile />
            </div>
        </div>
    )
}
export default Profile;