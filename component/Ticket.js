import styles from '../styles/dashboard.module.css'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import dynamic from 'next/dynamic'
const Modal = dynamic(() => import('./Modal'))
const UserDisplay = dynamic(() => import('./UserDisplay'))
const StatusDisplay = dynamic(() => import('./StatusDisplay'))
const ProgressDisplay = dynamic(() => import('./ProgressDisplay'))
const PriorityDisplay = dynamic(() => import('./PriorityDisplay'))
const TitleDisplay = dynamic(() => import('./TitleDisplay'))
const OwnerDisplay = dynamic(() => import('./OwnerDisplay'))

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
