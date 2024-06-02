import { LineIcon, YellowArrowIcon } from "../../../assets/icons";
import Container from "../../../components/Container/Container";
import styles from "./OurCulture.module.scss";

function OurCulture() {
  return (
    <Container>
      <section className={styles.culture_section}>
        <div className={styles.main_texts_wrapper}>
          <div className={styles.line_icon}>
            <LineIcon />
            <p>INDONESIAN CULTURE</p>
          </div>

          <h2>Our culture here is very friendly to people</h2>

          <p>
            known for his politeness, manners and gentleness. This becomes a
            characteristic when they mingle with other tribes and become basic
            traits that are passed down by their ancestors.
          </p>

          <div className={styles.bottom_arrow}>
            <a href="/">read more</a>
            <YellowArrowIcon />
          </div>
        </div>
        <img src="./images/girls_img.png" alt="" />
      </section>
    </Container>
  );
}

export default OurCulture;
