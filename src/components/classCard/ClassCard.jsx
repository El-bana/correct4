import styles from "./ClassCard.module.css";
import tripleDots from "../../assets/icons/triple-dots.svg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ClassCard = ({ classDetails }) => {
  const navigate = useNavigate();

  const lastExam = classDetails?.ClassGroup?.sort(
    (a, b) => a.id - b.id
  ).reverse()[0];

  const navigateToSetModelAnswer = () => {
    navigate(`/exams/${lastExam.id}`, {
      state: { operation: "SET_MODEL_ANSWER" },
    });
  };

  const navigateToUploadMCQPapers = () => {
    navigate(`/exams/${lastExam.id}`, {
      state: { operation: "UPLOAD_MCQ_PAPERS" },
    });
  };

  return (
    <div className={styles.card_main}>
      <Link to={`/classes/${classDetails.id}`}>
        <div className={styles.card_top}>
          <p className={styles.card_course_title}>{classDetails.name}</p>
          <img src={tripleDots} alt="options" className={styles.triple_dots} />
        </div>
      </Link>
      <div className={styles.card_bottom}>
        {/* <div className={styles.excel_upload}>
          <p>Excel Sheet</p>
        </div> */}
        <p onClick={navigateToSetModelAnswer}>Add Model Answer</p>
        <p onClick={navigateToUploadMCQPapers}>Add Buble Sheet</p>
      </div>
    </div>
  );
};

export default ClassCard;
