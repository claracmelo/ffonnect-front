import React, { useState } from "react";
import "../css/ModalMainButtons.css";
import LogoutModal from "./LogoutModal";

const Logout =()=> {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="App">
      <button
        className="openModalBtn"
        onClick={() => {
          setModalOpen(true);
        }}
      >
        Logout
      </button>

      {modalOpen && <LogoutModal setOpenModal={setModalOpen} />}
    </div>
  );
}

export default Logout;