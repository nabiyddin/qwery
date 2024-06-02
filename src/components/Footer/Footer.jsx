import {
  InstagramIcon,
  TwitterIcon,
  FacebookIcon,
  LinkedInIcon,
} from "../../assets/icons";
import styles from "./Footer.module.scss";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles["main-text_wrapper"]}>
        <div>
          <h2>COOK</h2>
        </div>
        <div className={styles.wrapper_about_us}>
          <div className={styles.about_us}>
            <h5>About US</h5>
            <p>Who we are</p>
            <p>How it works</p>
            <p>COOK reviews</p>
          </div>

          <div className={styles.about_us}>
            <h5>For Students</h5>
            <p>COOK blog</p>
            <p>Find a tutor</p>
          </div>

          <div className={styles.about_us}>
            <h5>For Tutors</h5>
            <p>Become an online chef</p>
            <p>Teach cooking online</p>
          </div>

          <dir className={styles.about_us}>
            <h5>Supports</h5>
            <p>Need a help?</p>
          </dir>
        </div>
      </div>
      <hr className={styles.line} />
      <div className={styles.bottom_texts_wrapper}>
        <div className={styles.bottom_infos_wrapper}>
          <div>
            <p>
              USA
              <p />
              <p>Your address goes there </p>
              <p className={styles.number}>+000000000</p>
            </p>
          </div>

          <div>
            <h4>COOK’S SOCIALS</h4>
            <div className={styles.social_icons}>
              <InstagramIcon />
              <TwitterIcon />
              <FacebookIcon />
              <LinkedInIcon />
            </div>
          </div>

          <div>
            <h4>LEGAL</h4>
            <p>Terms Of Serivce</p>
            <p>Privacy Policy</p>
          </div>
        </div>
        <p className={styles.copyright}>2023 Copyright</p>
      </div>
      <p className={styles.copyright_2}>2023 ©</p>
    </footer>
  );
}

export default Footer;
