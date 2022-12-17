import GridContainer from '../../components/grid/GridContainer'
import GridItem from '../../components/grid/GridItem'
import styles from './Classes.module.css'
import bluePlus from '../../assets/icons/plus-blue.svg'
import ClassCard from '../../components/classCard/ClassCard'
import clsx from 'clsx'

const Classes = () => {
  return (
    <div className='main-grid'>
      <div className={styles.classes_main_paragraph}>
        <h2>Your <span>Classes</span></h2>
        <img src={bluePlus} alt='add class' />
      </div>
      <GridContainer className={styles.card_grid}>
        <GridItem gridSize='4' className={clsx(styles.classes_card_container, 'halfSizeGridTablet fullSizeGridMobile')}>
          <ClassCard name='FCDS - level 3 simu' />
        </GridItem>
        <GridItem gridSize='4' className={clsx(styles.classes_card_container, 'halfSizeGridTablet fullSizeGridMobile')}>
          <ClassCard name='FCDS - level 3 simu' />
        </GridItem>
        <GridItem gridSize='4' className={clsx(styles.classes_card_container, 'halfSizeGridTablet fullSizeGridMobile')}>
          <ClassCard name='FCDS - level 3 simu' />
        </GridItem>
        <GridItem gridSize='4' className={clsx(styles.classes_card_container, 'halfSizeGridTablet fullSizeGridMobile')}>
          <ClassCard name='FCDS - level 3 simu' />
        </GridItem>
        <GridItem gridSize='4' className={clsx(styles.classes_card_container, 'halfSizeGridTablet fullSizeGridMobile')}>
          <ClassCard name='FCDS - level 3 simu' />
        </GridItem>
      </GridContainer>
    </div>
  )
}

export default Classes