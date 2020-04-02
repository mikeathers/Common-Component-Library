import React from "react";
import Modal from "react-modal";

import "./Modal.scss";

const sModal = props => {
  return (
    <Modal
      ariaHideApp={false}
      isOpen={props.isModalOpen}
      contentLabel="Default Modal"
      className={props.className}
    >
      <div className="default-modal__header">
        <h2>{props.title}</h2>
      </div>
      <hr />
      <div className="default-modal__body">
        <p>{props.message}</p>
        <p> {props.item !== undefined ? props.item : ""}</p>
      </div>
      {props.content}
      <hr />
      <div className="default-modal__footer">{props.children}</div>
    </Modal>
  );
};

export { sModal as Modal };
