import styles from './Title.module.css'
const Title =(props)=>{
return(<h2 className={styles.title}>{props.h}</h2>)
}
export default Title;