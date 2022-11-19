import React, { useState } from "react";
import "../css/ModalMainButtons.css";
import AboutModal from "./AboutModal";

const About = () => {
    const [modalOpen, setModalOpen] = useState(false);

    return (
      <div className="App">
        <button
          className="openModalBtn"
          onClick={() => {
            setModalOpen(true);
          }}
        >
          About us
        </button>
  
        {modalOpen && <AboutModal setOpenModal={setModalOpen} />}
      </div>
    );
  }

export default About;