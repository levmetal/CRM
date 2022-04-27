import styles from "../styles/dashboard.module.css"
import UserDisplay from "./UserDisplay"
import StatusDisplay from "./StatusDisplay"
import ProgressDisplay from "./ProgressDisplay"
import PriorityDisplay from "./PriorityDisplay"
import DeleteBlock from "./DeleteBlock"


const Ticket =({id,color,ticket})=>{


    return (
        <div className={styles.ticket}>
                 <div className={styles.btn_container}>
                      <button className={styles.btn}>
                      <svg 
                className={styles.delete_icon}
                xmlns="http://www.w3.org/2000/svg" height="24px" 
                viewBox="0 0 24 24" width="24px" fill="#000000">
                <path d="M0 0h24v24H0V0z" fill="none"/>
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/>

                </svg>
                     </button></div>
                  <UserDisplay user={ticket.avatar}/>
                    <span className={styles.owner}>{ticket.owner}</span>
                 <div className={styles.title_ticket}>{ticket.title}</div>  
                  <StatusDisplay status={ticket.status}/>
                  <ProgressDisplay progress={ticket.progress}/>
                  <PriorityDisplay priority={ticket.priority}/>
                
        
        </div>
    )
}
export default Ticket