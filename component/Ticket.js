import styles from '../styles/dashboard.module.css'
import UserDisplay from './UserDisplay'
import StatusDisplay from './StatusDisplay'
import ProgressDisplay from './ProgressDisplay'
import PriorityDisplay from './PriorityDisplay'
import TitleDisplay from './TitleDisplay'
import OwnerDisplay from './OwnerDisplay'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Modal from './Modal'

const Ticket = ({ ticket }) => {
  const [modaltrigger, setModal] = useState(false)

  const open = () => setModal(true)
  const close = () => setModal(false)

  return (
    <motion.div
      onClick={() => (modaltrigger ? close() : open())}
      className={styles.ticket}
    >
      <UserDisplay user={ticket.avatar} />
      <OwnerDisplay owner={ticket.owner} />
      <TitleDisplay title={ticket.title} />
      <StatusDisplay status={ticket.status} />
      <ProgressDisplay progress={ticket.progress} />
      <PriorityDisplay priority={ticket.priority} />
      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {modaltrigger && (
          <Modal
            modaltrigger={modaltrigger}
            handleClose={close}
            ticket={ticket}
          />
        )}
      </AnimatePresence>
    </motion.div>
  )
}
export default Ticket
