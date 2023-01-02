import styles from "./AddCard.module.css";

const AddCard = ({ toUpload, ...props }) => {
  return (
    <div className={styles.add_card} {...props}>
      Add {toUpload}
    </div>
  );
};

export default AddCard;
