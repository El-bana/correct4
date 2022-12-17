import styles from '../Classes.module.css';
import blueUpload from '../../../assets/icons/upload-blue.svg';
import AddCard from '../../../components/addCard/AddCard';
import GridContainer from '../../../components/grid/GridContainer'
import GridItem from '../../../components/grid/GridItem'
import clsx from 'clsx'


const Exam = ({ classTitle, examTitle }) => {
  return (
    <>
      <div className='main-grid'>
        <div className={styles.classes_main_paragraph}>
          <h2>{classTitle} - <span>{examTitle}</span></h2>
        </div>
        <div className={styles.exam_excel_upload}>
          <p>Excel Sheet</p>
          <img src={blueUpload} alt="upload excel sheet" />
        </div>
        <GridContainer className={styles.card_grid}>
          <GridItem gridSize='6' className={clsx(styles.classes_card_container, 'fullSizeGridMobile')}>
            <AddCard toUpload='Model Answer' />
          </GridItem>
          <GridItem gridSize='6' className={clsx(styles.classes_card_container, 'fullSizeGridMobile')}>
            <AddCard toUpload='Model Answer' />
          </GridItem>
        </GridContainer>
      </div>
      <div className='main-grid'>
        <div className={styles.start_button}>
          Start
        </div>
      </div>
    </>
  )
}

export default Exam