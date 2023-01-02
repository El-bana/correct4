import { useState } from "react";
import styles from "./CreateExamModal.module.css";
import Modal from "./Modal";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createUserExam } from "../../features/exames";

const CreateExamModel = ({ show, handleClose, classDetails }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [examName, setExamName] = useState("");

  const handleCreateExam = () => {
    if (!examName) return;

    dispatch(createUserExam({ name: examName, classId: classDetails.id }))
      .unwrap()
      .then((res) => {
        console.log(res);
        navigate({ pathname: `/exams/${res.data.id}` });
      });
  };

  return (
    <Modal show={show} handleClose={handleClose}>
      <div className={styles.modal_content}>
        <p className={styles.modal_title}>Exam Name</p>
        <input
          className={styles.modal_input}
          type="text"
          placeholder="enter your exam name"
          value={examName}
          onChange={(e) => setExamName(e.target.value)}
        />
        <button className={styles.modal_button} onClick={handleCreateExam}>
          confirm
        </button>
      </div>
    </Modal>
  );
};

export default CreateExamModel;
