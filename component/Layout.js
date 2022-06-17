import Navbar from './Navbar'
import styles from '../styles/layout.module.css'

const Layout = ({ children }) => {
  return (
    <>
      <main className={styles.main}>
        <Navbar />
        {children}
      </main>
    </>
  )
}
export default Layout
