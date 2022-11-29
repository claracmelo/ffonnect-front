import React from "react";
import NavProfile from "./NavProfile";
import "../css/profile.css"

const Profile = ({user}) => {
    
const name = user.username
const lastName = user.last_name

    return (
        <div className="profile">
            {/* show the user pic */}
            <div className="img">
                <img src="https://tinyurl.com/3f8jsu43" alt="user" />
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