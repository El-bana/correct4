import styles from "./PapersList.module.css";

const PapersList = ({ papers }) => {
  return (
    <div className={styles.papers_list}>
      {papers.map((p) => (
        <div className={styles.paper} key={p.id}>
          <img className={styles.paper_img} src={p.path} alt="paper" />
          <p className={styles.paper_score}>
            <span>
              <strong>Id:</strong> {p.student_id || "N/A"}
            </span>
            <span>
              <strong>Score:</strong> {p.score}
            </span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default PapersList;
