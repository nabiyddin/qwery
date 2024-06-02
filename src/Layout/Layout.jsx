import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import styles from "./Layout.module.scss";

function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
