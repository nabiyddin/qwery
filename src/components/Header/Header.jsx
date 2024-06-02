import Button from "../Button/Button";
import Container from "../Container/Container";
import styles from "./Header.module.scss";
import { ArrowIcon, InfoIcon, PolygonIcon } from "@/assets/icons";
function Header() {
  return (
    <header>
      <Container className={styles.header}>
        <div className={styles.navbar_wrapper}>
          <div className={styles.logo_wrapper}>
            <a className={styles.logo} href="/">
              COOK
            </a>
            <span className={styles.line}></span>
          </div>
          <nav className={styles.navbar}>
            <ul>
              <li className={styles.list_img_wrapper}>
                <img
                  className={styles.list_img}
                  src="/images/fry_pan.png"
                  alt=""
                />
                <a href="">Cooking Classes</a>
              </li>
              <li className={styles.list_img_wrapper}>
                <img className={styles.list_img} src="/images/cap.png" alt="" />
                <a href="">Become a Chef</a>
              </li>
              <li className={styles.list_img_wrapper}>
                <img
                  className={styles.list_img}
                  src="/images/cherry.png"
                  alt=""
                />
                <a href="">Group Cooking</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className={styles.language_wrapper}>
          <div className={styles.language_select_wrapper}>
            <p className={styles.language_select}>
              Eng
              <span>
                <PolygonIcon />
              </span>
            </p>
            <p className={styles.language_select}>
              USD
              <span>
                <PolygonIcon />
              </span>
            </p>
          </div>
          <div className={styles.info_wrapper}>
            <span className={styles.horizantal_line}></span>
            <InfoIcon />
            <span className={styles.horizantal_line}></span>
          </div>
          <Button className={styles.button}>
            Log In <ArrowIcon />
          </Button>
        </div>
        <a className={styles["nav-menu"]} href="">
          <img src="./images/menu.png" alt="" />
        </a>
      </Container>
    </header>
  );
}

export default Header;
