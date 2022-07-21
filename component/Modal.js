import { motion } from 'framer-motion'
import Backdrop from './Backdrop'
import styles from '../styles/modal.module.css'
import EditBlock from './EditBlock'
import DeleteBlock from './DeleteBlock'
import DescriptionDisplay from './DescriptionDisplay'

const Modal = ({ handleClose, ticket }) => {
  const dropIn = {
    hidden: { y: '-100vh', opacity: 0 },
    visible: {
      y: '0',
      opacity: 1,
      transition: {
        duration: 0.2,
        type: 'spring',
        damping: 100,
        stiffness: 500,
      },
    },
    exit: {
      y: '100vh',
      opacity: 0,
      transition: {
        duration: 0.5,
        type: 'spring',
        damping: 100,
        stiffness: 500,
      },
    },
  }

  const {
    avatar,
    category,
    createdAt,
    updatedAt,
    description,
    owner,
    priority,
    progress,
    status,
    title,
    _id,
  } = ticket

  const titleArr = title.split(' ').map((e, i) => {
    return e.charAt(0).toUpperCase() + e.slice(1)
  })
  const titleModal = titleArr.join(' ').trim()

  return (
    <Backdrop>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className={styles.modal}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className={styles.avatar_mondal_container}>
          <img src={avatar} alt="avatar-modal" className={styles.img_modal} />
          <span className={styles.owner_modal}>{owner}</span>
        </div>

        <p className={styles.title_modal}>{titleModal}</p>
        <DescriptionDisplay description={description} />

        <div className={styles.buttons__modal}>
          <button className={styles.btnmodal} onClick={handleClose}>
            <svg
              className={styles.close_icon_modal}
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              width="24"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
            </svg>
          </button>
          <EditBlock ticketId={_id} />

          <DeleteBlock ticketId={_id} />
        </div>
      </motion.div>
    </Backdrop>
  )
}

export default Modal
