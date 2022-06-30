import styles from "styles/modal.module.css"


const DescriptionDisplay=({description})=>{
    return(
            <p className={styles.description}>{description}</p>

    )
}

export default DescriptionDisplay