import styles from '../styles/dashboard.module.css'
import UserDisplay from './UserDisplay'
import StatusDisplay from './StatusDisplay'
import ProgressDisplay from './ProgressDisplay'
import PriorityDisplay from './PriorityDisplay'
import TitleDisplay from './TitleDisplay'
import OwnerDisplay from './OwnerDisplay'
const Ticket = ({ticket }) => {
  


  return (
    <div className={styles.ticket}>
     
      <UserDisplay user={ticket.avatar} />
      <OwnerDisplay owner={ticket.owner}/>
      <TitleDisplay title={ticket.title}/>
      <StatusDisplay status={ticket.status} />
      <ProgressDisplay progress={ticket.progress} />
      <PriorityDisplay priority={ticket.priority} />
    </div>
  )
}
export default Ticket
