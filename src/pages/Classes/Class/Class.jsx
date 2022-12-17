import ExamCard from '../../../components/examCard/ExamCard';
import styles from '../Classes.module.css';
import GridContainer from '../../../components/grid/GridContainer'
import GridItem from '../../../components/grid/GridItem'
import bluePlus from '../../../assets/icons/plus-blue.svg'
import clsx from 'clsx'

const Class = ({ name = 'class' }) => {
  return (
    <div className='main-grid'>
      <div className={styles.classes_main_paragraph}>
        <h2>{name}</h2>
        <img src={bluePlus} alt='add class' />
      </div>
      <GridContainer className={styles.card_grid}>
        <GridItem gridSize='4' className={clsx(styles.classes_card_container, 'halfSizeGridTablet fullSizeGridMobile')}>
          <ExamCard name='Mid Term' />
        </GridItem>
        <GridItem gridSize='4' className={clsx(styles.classes_card_container, 'halfSizeGridTablet fullSizeGridMobile')}>
          <ExamCard name='Final' />
        </GridItem>
        <GridItem gridSize='4' className={clsx(styles.classes_card_container, 'halfSizeGridTablet fullSizeGridMobile')}>
          <ExamCard name='Quiz' />
        </GridItem>
        <GridItem gridSize='4' className={clsx(styles.classes_card_container, 'halfSizeGridTablet fullSizeGridMobile')}>
          <ExamCard name='Quiz' />
        </GridItem>
        <GridItem gridSize='4' className={clsx(styles.classes_card_container, 'halfSizeGridTablet fullSizeGridMobile')}>
          <ExamCard name='Quiz' />
        </GridItem>
      </GridContainer>
    </div>
  )
}

export default Class