import {
  BlackArrowIcon,
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
} from "../../../assets/icons";
import Button from "../../../components/Button/Button";
import Container from "../../../components/Container/Container";
import styles from "./Footer.module.scss";

function Footer() {
  return (
    <Container>
      <footer className={styles.footer}>
        <div className={styles.logo_wrapper}>
          <a href="/">QWERy</a>

          <div className={styles.button_wrapper}>
            <p>Ready to explore?</p>

            <Button className={styles.button}>Get started</Button>
          </div>
        </div>
        <hr className={styles.line} />

        <div className={styles.center_footer}>
          <div className={styles.footer_main_text}>
            <h2>
              Let's go on vacation, <br /> Make your day
            </h2>
            <div className={styles.email}>
              <p>Email address</p>
              <div className={styles.box_arrow}>
                <BlackArrowIcon />
              </div>
            </div>
            <hr className={styles.line_email} />
          </div>
          <div className={styles.info_wrapper}>
            <div>
              <h5>Services</h5>
              <p>Email Marketing</p>
              <p>Campaigns</p>
              <p>Branding</p>
              <p>Offline</p>
            </div>

            <div>
              <h5>About</h5>
              <p>Our Story</p>
              <p>Benefits</p>
              <p>Team</p>
              <p>Careers</p>
            </div>

            <div>
              <h5>Help</h5>
              <p>FAQs</p>
              <p>Contact Us</p>
            </div>
          </div>
        </div>
        <div className={styles.footer_end}>
          <div className={styles.footer_end_texts}>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
          </div>
          <div className={styles.footer_end_icons_wrapper}>
            <FacebookIcon />
            <TwitterIcon />
            <InstagramIcon />
          </div>
        </div>
      </footer>
    </Container>
  );
}

export default Footer;
