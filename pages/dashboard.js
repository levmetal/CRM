import TicketCard from '../component/TicketCard'
import styles from '../styles/dashboard.module.css'



const Dashboard = (props) => {
  
  

   
  
  return (
    <div className={styles.dashboard}>
      <h1>Ticket list </h1>

      <TicketCard tickets={props}
      
      />
    </div>
  )
}
export default Dashboard

export async function getServerSideProps(context) {
  const res = await fetch('http://localhost:3000/api/tickets')
  const tickets = await res.json()

  return {
    props:{
      tickets,
    },
  }
}
