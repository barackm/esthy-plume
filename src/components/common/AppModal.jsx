import React from "react";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
const AppModal = ({
  onToggleModal,
  modalOpen,
  title,
  success,
  fail,
  body,
  onSuccess,
}) => {
  const closeModal = () => {
    console.log("close modal");
    onToggleModal();
  };

  return (
    <Modal
      toggle={onToggleModal}
      isOpen={modalOpen}
      wrapClassName="modal-main-container"
    >
      <div className=" modal-header">
        <h5 className=" modal-title" id="exampleModalLabel">
          {title}
        </h5>
        <button
          aria-label="Close"
          className=" close"
          type="button"
          onClick={closeModal}
        >
          <span aria-hidden={true}>×</span>
        </button>
      </div>
      <ModalBody>{body}</ModalBody>
      <ModalFooter>
        <Button color="danger" type="button" onClick={closeModal}>
          {fail}
        </Button>
        <Button color="primary" type="button" onClick={onSuccess}>
          {success}
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default AppModal;
