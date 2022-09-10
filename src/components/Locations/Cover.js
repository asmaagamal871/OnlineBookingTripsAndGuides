import styles from "./Cover.module.css"

function Cover(props){
    return(
        <div className={styles.cover}>
            <img src={props.image1} alt="city cover image" className={styles.coverImg}/>
           
                  </div>
    )
}

export default Cover;