import Modal from "react-modal";
import css from "./ImageModal.module.css";
import React from "react";
type Props = {
  modalUrl: string;
  setModalUrl: (arg: string) => void;
};
export default function ImageModal({ modalUrl, setModalUrl }: Props) {
  return (
    <div className={css.imgContainer}>
      <Modal
        boolean={modalUrl}
        onRequestClose={() => setModalUrl("")}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
          content: {
            width: "600px",
            height: "720px",
            margin: "auto",
            padding: "40px",
            borderRadius: "10px",
            textAlign: "center",
          },
        }}
      >
        {modalUrl && <img className={css.img} src={modalUrl} alt="" />}
      </Modal>
    </div>
  );
}
