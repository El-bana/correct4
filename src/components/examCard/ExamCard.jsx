import styles from './ExamCard.module.css'

const ExamCard = ({ exam = 'Mid Term' }) => {
  return (
    <div className={styles.exam_card}>
      {exam}
    </div>
  )
}

export default ExamCard