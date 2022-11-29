import React from "react";
import {NavLink,useNavigate} from "react-router-dom"

const History = () => {
    const navigate = useNavigate()
    return (
<div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button>
            <NavLink to="/user/tree">&times;</NavLink>
          </button>
        </div>
        <div className="title">
          <h1>Family History</h1>
        </div>
        <div className="body">
          <div>
            Stretch Goal -- coming soon!
          </div>
        </div>
        <div className="footer">
          <button onClick={() => navigate('/user/tree')}>back</button>
        </div>
      </div>
    </div>
    )
}

export default History;