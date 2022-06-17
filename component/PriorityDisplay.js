import styles from '../styles/dashboard.module.css'

const PriorityDisplay = ({ priority }) => {
  return (
    <div className={styles.container_priority}>
      <span style={{ color: priority >= 1 ? `#0077b6` : `#c9c9c9` }}>●</span>
      <span style={{ color: priority >= 2 ? `#0077b6` : `#c9c9c9` }}>●</span>
      <span style={{ color: priority >= 3 ? `#0077b6` : `#c9c9c9` }}>●</span>
      <span style={{ color: priority >= 4 ? `#0077b6` : `#c9c9c9` }}>●</span>
      <span style={{ color: priority >= 5 ? `#0077b6` : `#c9c9c9` }}>●</span>
    </div>
  )
}
export default PriorityDisplay
