import styles from '../styles/dashboard.module.css'

const TitleDisplay = ({ title }) => {
  const titleArr = title.split(' ').map((e, i) => {
    return e.charAt(0).toUpperCase() + e.slice(1)
  })
  const uppTitle = titleArr.join(' ').trim()

  return <div className={styles.title_ticket}>{uppTitle}</div>
}
export default TitleDisplay
