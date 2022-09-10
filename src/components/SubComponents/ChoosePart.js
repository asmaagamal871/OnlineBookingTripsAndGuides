import styles from'./ChoosePart.module.css'
import Text from "./Text";
import TwoImages from "./TwoImages";
const ChoosePart = () => {
  return (
    <div className={styles.flexcContainer}>
      <Text />
      <TwoImages />
    </div>
  );
};
export default ChoosePart;
