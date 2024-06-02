import {
  LeftArrowIcon,
  LineIcon,
  RightArrowIcon,
  YellowArrowIcon,
} from "../../../assets/icons";
import Container from "../../../components/Container/Container";
import styles from "./Mountain.module.scss";

function Mountain() {
  return (
    <Container className={styles.container}>
      <section className={styles.mountain_section}>
        <div className={styles.icons_wrapper}>
          <LeftArrowIcon />
          <RightArrowIcon />
        </div>
        <div className={styles.main_texts_wrapper}>
          <div className={styles.line_icons}>
            <LineIcon />
            <span>Bromo</span>
            <LineIcon />
          </div>

          <h2>Steady your steps, we will climb together!</h2>

          <p>
            Enjoying the vast expanse of the sea of ​​​​sand, witnessing the
            splendor of Mount Semeru that soars into the sky, and gazing at the
            beauty of the sun moving out of its bed or otherwise enjoying the
            dim twilight from the Bromo ridge is an unforgettable experience
            when visiting Bromo.
          </p>
          <div className={styles.botttom_icon}>
            <a href="/">read more</a>
            <YellowArrowIcon />
          </div>
        </div>
      </section>
    </Container>
  );
}

export default Mountain;
