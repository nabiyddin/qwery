import styles from "./Hero.module.scss";
import {
  DownArrowIcon,
  FacebookIcon,
  InstagramIcon,
  LineIcon,
  SearchIcon,
  TwitterIcon,
} from "../../../assets/icons";

function Hero() {
  return (
    <section className={styles.hero_section}>
      <header className={styles.header}>
        <a href="/">QWERy</a>
        <nav className={styles.navbar}>
          <ul>
            <li>
              <a href="">Information</a>
            </li>
            <li>
              <a href="">About us</a>
            </li>
            <li>
              <a href="">Culture</a>
            </li>
          </ul>
        </nav>
        <div className={styles.navbar_end}>
          <SearchIcon />
          <p>Search</p>
        </div>
      </header>
      <div className={styles.hero_icons}>
        <p>Follow us</p>
        <InstagramIcon />
        <TwitterIcon />
        <FacebookIcon />
      </div>

      <div className={styles.main_texts_wrapper}>
        <div className={styles.line_text}>
          <LineIcon />
          <p>explore the Nature Beauty</p>
        </div>
        <h1>
          Discover <p> Wonderful Indonesia </p>
        </h1>

        <div className={styles.main_text_bottom}>
          <p>Scroll down</p>
          <DownArrowIcon />
        </div>
      </div>
    </section>
  );
}

export default Hero;
