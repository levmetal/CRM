import styles from '../styles/dashboard.module.css'
import { useRouter } from 'next/router'

const DeleteBlock = (props) => {
  const router = useRouter()

  const { ticketId } = props
  const confirmDeleting = async () => {
    const bool = confirm('Do you want delete the ticket ?')

    if (bool) {
      await deleteTicket()
    } else return null

    router.push('/')
  }

  const deleteTicket = async () => {
    try {
      await fetch(`http://localhost:3000/api/tickets/${ticketId}`, {
        method: 'DELETE',
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <button className={styles.delete_container}>
      <svg
        onClick={confirmDeleting}
        className={styles.delete_icon}
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
      >
        <path d="M13.05 42q-1.2 0-2.1-.9-.9-.9-.9-2.1V10.5H8v-3h9.4V6h13.2v1.5H40v3h-2.05V39q0 1.2-.9 2.1-.9.9-2.1.9Zm21.9-31.5h-21.9V39h21.9Zm-16.6 24.2h3V14.75h-3Zm8.3 0h3V14.75h-3Zm-13.6-24.2V39Z" />
      </svg>
    </button>
  )
}

export default DeleteBlock
