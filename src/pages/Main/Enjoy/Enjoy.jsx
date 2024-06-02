import { LineIcon, YellowArrowIcon } from "../../../assets/icons";
import Container from "../../../components/Container/Container";
import styles from "./Enjoy.module.scss";

function Enjoy() {
  return (
    <section>
      <Container className={styles.container}>
        <div>
          <img src="./images/mountain_img.png" alt="" />
        </div>
        <div className={styles.main_text_wrapper}>
          <div className={styles.line_wrapper}>
            <LineIcon />
            <p>EAST nUSA TENGGARA</p>
          </div>
          <h2>Have you enjoyed your holiday?</h2>
          <p>
            You will be amazed if you take part in this sailing Komodo island
            tour package. So it is also mandatory for you, besides enjoying
            Komodo tourism on Komodo Island, you also have to taste the marine
            tourism. The beautiful waters of Komodo will make you meet many
            travelers from other countries.
          </p>

          <div className={styles.bottom_arrow}>
            <a>read more</a>
            <YellowArrowIcon />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Enjoy;
