import styles from './Bottun.module.css'
const Button = (props) => {
  return <button className={`${styles.bMargin} ${styles.bColor} ${styles.btn}`}>{props.content}</button>;
};
export default Button;
