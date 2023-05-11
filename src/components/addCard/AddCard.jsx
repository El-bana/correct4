import styles from "./AddCard.module.css";

const AddCard = ({ toUpload, ...props }) => {
  return (
    <div className={styles.add_card} {...props}>
      {toUpload}
    </div>
  );
};

export default AddCard;
