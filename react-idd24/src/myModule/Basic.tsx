import Title from "./assets/common/title.png";
import CommonImage from "./assets/common/basic.png";
import styles from "./Basic.module.css";

const Basic = () => {
  return (
    <div>
      <div className={styles.top}>
        <img src={Title} alt="" />
      </div>
      <div className={styles.top}>
        <img className={styles.describe} src={CommonImage} alt="" />
      </div>
    </div>
  );
};

export default Basic;
