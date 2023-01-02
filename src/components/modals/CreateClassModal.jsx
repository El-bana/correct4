import { useState } from "react";
import styles from "./CreateClassModal.module.css";
import Modal from "./Modal";
import { useDispatch } from "react-redux";
import { createUserClass } from "../../features/classes";
import { useNavigate } from "react-router-dom";

const CreateClassModal = ({ show, handleClose }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [className, setClassName] = useState("");

  const handleCreateClass = () => {
    if (!className) return;

    dispatch(createUserClass({ name: className }))
      .unwrap()
      .then((res) => {
        navigate({ pathname: `/classes/${res.data.id}` });
      });
  };

  return (
    <Modal show={show} handleClose={handleClose}>
      <div className={styles.modal_content}>
        <p className={styles.modal_title}>Class Name</p>
        <input
          className={styles.modal_input}
          type="text"
          placeholder="enter your class name"
          value={className}
          onChange={(e) => setClassName(e.target.value)}
        />
        <button className={styles.modal_button} onClick={handleCreateClass}>
          confirm
        </button>
      </div>
    </Modal>
  );
};

export default CreateClassModal;
