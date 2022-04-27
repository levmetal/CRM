import TicketCard from "../component/TicketCard"
import styles from "../styles/dashboard.module.css"




const Dashboard =()=>{
    

   
    return( 
        <div className={styles.dashboard}>
            <h1>Ticket list </h1>
            
            <TicketCard />                                                             
              
                 
            
        </div>
            

        )
}
export default Dashboard
