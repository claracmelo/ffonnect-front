import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "../css/tree.css"
// import AllMembers from "./AllMembers";

const Tree = () => {
    return (
        <div className="tree">
            {/* Outlet show all members inside tree */}
            <Outlet/>
        </div>
    )
}

export default Tree;