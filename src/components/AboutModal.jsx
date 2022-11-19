import React from "react";
import "../css/modal.css";

const AboutModal=({ setOpenModal }) =>{
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            &times;
          </button>
        </div>
        <div className="title">
          <h1>About FFonnect</h1>
        </div>
        <div className="body">
            Here we talk about this project 
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default AboutModal;