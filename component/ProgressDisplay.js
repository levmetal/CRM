import styles from "../styles/dashboard.module.css"

const ProgressDisplay =({progress})=>{
    return( 

        <div className={styles.progress_container}>

        <div className={styles.progress_bar}>
            <div 
                  style={{width: progress + '%'}}
                  className={styles.progress}>
                <span>{progress + '%'}</span>
            </div>
        </div>
            
        </div>
        )
}
export default ProgressDisplay