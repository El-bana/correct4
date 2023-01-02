import { Link } from "react-router-dom";
import styles from "./ExamCard.module.css";

const ExamCard = ({ exam }) => {
  return (
    <Link to={`/exams/${exam.id}`} className={styles.exam_card}>
      {exam.name}
    </Link>
  );
};

export default ExamCard;
