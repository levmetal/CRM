import styles from '../styles/dashboard.module.css'

const StatusDisplay = ({ status }) => {
  const statusSelection = {
    done: 'green',
    'in process': 'orange',
    standby: 'bred',
  }

  const statuscolor = statusSelection[status]

  return (
    <div className={styles.status + ' ' + statuscolor}>
      <h2>{status}</h2>
    </div>
  )
}
export default StatusDisplay
