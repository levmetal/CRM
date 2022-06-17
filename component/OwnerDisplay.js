import styles from '../styles/dashboard.module.css'

const OwnerDisplay = ({ owner }) => {
    const ownerArr =owner.split(" ").map((e,i)=>{
  
        return e.charAt(0).toUpperCase() + e.slice(1) 
      
      })
     const uppOwner = ownerArr.join(" ").trim()


  return (
    <span className={styles.owner}>{uppOwner}</span>
  )
}
export default OwnerDisplay
