import styles from './ClassCard.module.css'
import tripleDots from '../../assets/icons/triple-dots.svg'

const ClassCard = ({ name = 'className' }) => {
  return (
    <div className={styles.card_main}>
      <div className={styles.card_top}>
        <p className={styles.card_course_title}>{name}</p>
        <img src={tripleDots} alt="options" className={styles.triple_dots} />
      </div>
      <div className={styles.card_bottom}>
        <div className={styles.excel_upload}>
          <p>Excel Sheet</p>
        </div>
        <p>Add Model Answer</p>
        <p>Add Buble Sheet</p>
      </div>
    </div>
  )
}

export default ClassCard