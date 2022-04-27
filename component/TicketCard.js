
import styles from "../styles/dashboard.module.css" 
import Ticket from "./Ticket"
import DeleteBlock from "./DeleteBlock"
import { v4 as uuidv4 } from "uuid"
const TicketCard =()=>{

   

    const tickets =[
        {
            category:"Q1-2022",
            priority:5,
            owner:"Levi Oquendo",
            color:"blue",
            title:"fix bugs proyect crm",
            status: "done",
            progress:100 ,
            description:"finish fixing bugs to optimize performance",
            avatar:"https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=3759e09a5b9fbe53088b23c615b6312e",
            date: Date()
    },
        {
            category:"Q1-2022",
            priority:4,
            owner:"Nicole Anderson",
            color:"red",
            title:"seatting goals of the proyect finance",
            status: "in process",
            progress:45 ,
            description:"finish fixing bugs to optimize performance",
            avatar:"https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=3759e09a5b9fbe53088b23c615b6312e",
            date: Date()
    },
        {
            category:"Q3-2022",
            priority:3,
            owner:"Alex Black",
            color:"green",
            title:"styling the layout plataform finance",
            status: "in process",
            progress:50 ,
            description:"finish fixing bugs to optimize performance",
            avatar:"https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=3759e09a5b9fbe53088b23c615b6312e",
            date: Date()
    },
        {
            category:"Q3-2022",
            priority:5,
            owner:"Sam Oquendo",
            color:"blue",
            title:"layout to platfom finance",
            status: "standby",
            progress:15 ,
            description:"building the structure of the platform",
            avatar:"https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=3759e09a5b9fbe53088b23c615b6312e",
            date: Date()
    }
    
    ]

            const uniqueCategories= [
                    
                ...new Set(  tickets.map( uCategory=>{
                        const {category}=uCategory
                        return category
                    }))
                ]
               
                  

    return(

        <div className={styles.ticket_container}>
        {tickets && uniqueCategories?.map((uniqueCategory)=>(
            <div className={styles.category_tickets} key={uuidv4()}> 

             <h3  key={uuidv4()}>{uniqueCategory}</h3>

                {tickets.filter(ticket=> ticket.category===uniqueCategory)
                 .map((ticketFiltered,id)=> { 
            
                return (  
                 <div  key={uuidv4()} className={styles.button_ticket_container}>
                
                 <Ticket
                     key={uuidv4()}
                     color={ticketFiltered.color}
                     ticket={ticketFiltered}
                 />

                <DeleteBlock
                      key={uuidv4()}
                 />
                </div>
                
            )})
            }
            </div>

        ))}
    
</div> 
)
}
export default TicketCard 

