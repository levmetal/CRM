import styles from '../styles/dashboard.module.css'
import { useRouter } from 'next/router'

const DeleteBlock =  (props) => {
const router=useRouter()

  const {ticketId}=props
const confirmDeleting= async ()=>{
const bool= confirm("Do you want delete the ticket ?")

if(bool){
  await deleteTicket()
}else return null

router.push("/dashboard")
}

const deleteTicket = async ()=>{
  try {
    await fetch(`http://localhost:3000/api/tickets/${ticketId}`,{
      method:"DELETE",
      
    })
  } catch (error) {
   console.log(error) 
  }
}

  return (
    <button 
   
    className={styles.delete_container}>
      <svg
        onClick={confirmDeleting}
        className={styles.delete_icon}
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
      </svg>
    </button>
  )
}

export default DeleteBlock
