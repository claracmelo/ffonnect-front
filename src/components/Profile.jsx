import React from "react";
import NavProfile from "./NavProfile";
import "../css/profile.css"

const Profile = ({user}) => {
    
const name = user.username
const lastName = user.last_name

    return (
        <div className="profile">
            {/* show the user pic */}
            <img src="https://tinyurl.com/3f8jsu43" alt="user" />
            <br/>
            {/* show the username */}
            <label htmlFor="name">{name} {lastName} </label>
            <br/>
            <NavProfile />
        </div>
    )
}
export default Profile;