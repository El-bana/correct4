import styles from './AddCard.module.css'

const AddCard = ({ toUpload }) => {
  return (
    <div className={styles.add_card}>
      Add {toUpload}
    </div>
  )
}

export default AddCard