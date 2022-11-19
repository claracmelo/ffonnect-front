import React from "react";
import "../css/LogoutModal.css";
import { Link } from "react-router-dom";

const LoginModal=({ setOpenModal }) =>{
  return (
    <div className="modalBg">
      <div className="modalC">
        <div className="titleCBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            &times;
          </button>
        </div>
        <div className="title">
          <h1>Are You Sure You Want to Logout?</h1>
        </div>
       
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            No
          </button>
          <button><Link to="/">Yes</Link></button>
        </div>
      </div>
    </div>
  );
}

export default LoginModal;