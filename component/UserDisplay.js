import styles from "../styles/dashboard.module.css"


const UserDisplay =({user})=>{
    
   
    return (
   

        <div className={styles.userDisplay}>
           <img src={user} alt="avatar"/> 
        </div>
        
    )
}
export default UserDisplay