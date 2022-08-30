import TicketCard from '../component/TicketCard'
import styles from '../styles/dashboard.module.css'
import { useRouter } from 'next/router'

const Dashboard = (props) => {
  
  return (
    <div className={styles.dashboard}>
      <h1 className={styles.title_dash}>Ticket list </h1>

      <TicketCard tickets={props} />
    </div>
  )
}
export default Dashboard

export async function getServerSideProps(context) {
  
  const res = await fetch(`https://crm-levi.vercel.app/api/tickets`)
  const tickets = await res.json()

  return {
    props: {
      tickets,
    },
  }
}
