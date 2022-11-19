import React from "react";
import NavProfile from "./NavProfile";
import "../css/profile.css"

const Profile = (props) => {
    
console.log("test",props)
    return (
        <div className="profile">
            {/* show the user pic */}
            <img src="https://tinyurl.com/3f8jsu43" alt="user" />
            <br/>
            {/* show the username */}
            <label htmlFor="name">Name: </label>
            <br/>
            <NavProfile/>
        </div>
    )
}
export default Profile;