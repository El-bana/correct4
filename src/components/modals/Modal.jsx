import styles from "./Modal.module.css";
import { createPortal } from "react-dom";

const Modal = ({ show = false, children, handleClose }) => {
  const ModelCompoennt = (
    <div className={styles.modal_container}>
      <div className={styles.modal_content}>{children}</div>
      <div className={styles.overlay} onClick={handleClose}></div>
    </div>
  );

  return show
    ? createPortal(ModelCompoennt, document.getElementById("modal-root"))
    : null;
};

export default Modal;
