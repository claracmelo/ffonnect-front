import React, { useState } from "react";
import "../css/ModalMainButtons.css";
import RegisterModal from "./Register";

const Register =()=> {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="App">
      <button
        className="openModalBtn"
        onClick={() => {
          setModalOpen(true);
        }}
      >
        New User?
      </button>

      {modalOpen && <RegisterModal setOpenModal={setModalOpen} />}
    </div>
  );
}

export default Register;