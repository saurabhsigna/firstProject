import React from "react";
import Modal from "../components/modal/QRmodal";
import useModal from "../components/modal/useModal";

export default function App() {
  const { modalOpen, close, open } = useModal();
  return (
    <div>
        <div className="h-[100px]"></div>
      <button onClick={open}>click</button>
      {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} />}
    </div>
  );
}
