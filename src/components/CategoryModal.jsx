import React from "react";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import InputField from "./form/InputField";
import { useFormikContext } from "formik";
const CategoryModal = ({ onToggleModal, modalOpen, fieldValue }) => {
  const { handleSubmit, errors } = useFormikContext();
  const closeModal = () => {
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
          {fieldValue ? "Modifier la categorie" : "Créer une categorie"}
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
      <ModalBody>
        <InputField
          name="name"
          placeholder="Categorie"
          label="Le nom de la categorie"
          fieldValue={fieldValue}
        />
      </ModalBody>
      <ModalFooter>
        <Button
          color="primary"
          type="button"
          disabled={errors["name"] && true}
          onClick={handleSubmit}
        >
          Enregistrer
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default CategoryModal;
