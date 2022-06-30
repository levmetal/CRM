import styles from '../styles/dashboard.module.css'
import Ticket from './Ticket'
import DeleteBlock from './DeleteBlock'
import EditBlock from './EditBlock'


import { v4 as uuidv4 } from 'uuid'
const TicketCard = (props) => {

  
  const{tickets:tickets}=props
 const ticketsarr=Object.values(tickets)
  
  
  

  const uniqueCategories = [
    ...new Set(
      ticketsarr[0].map((uCategory) => {
        const { category } = uCategory
        return category
      }),
    ),
  ]

 

  return (
    <div className={styles.ticket_container}>
      
      {ticketsarr[0] &&
        uniqueCategories?.map((uniqueCategory) => (
          <div className={styles.category_tickets} key={uuidv4()}>
            <h3 key={uuidv4()}>{uniqueCategory}</h3>

            {ticketsarr[0]
              .filter((ticket) => ticket.category === uniqueCategory)
              .map((ticketFiltered, id) => {
                return (
                  <div
                    key={uuidv4()}
                    className={styles.button_ticket_container}
                  >
                    <Ticket
                      key={uuidv4()}
                      ticket={ticketFiltered}
                      
                    />

                    <EditBlock 
                    key={uuidv4()}
                    ticketId={ticketFiltered._id}
                    />
                    <DeleteBlock 
                    key={uuidv4()} 
                    ticketId={ticketFiltered._id}
                    />
                  </div>
                )
              })}
          </div>
        ))}
    </div>
  )
}
export default TicketCard
