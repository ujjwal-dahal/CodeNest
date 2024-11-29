import { useNavigate } from "react-router-dom";
import styles from "../../Styles/Contact.module.css";
import GoogleMap from "../GoogleMap/GoogleMap";
import useTitle from "../../Hooks/useTitle/useTitle";

export default function Contact() {
  const navigate = useNavigate();
  useTitle("CODENEST | Contact")

  return (
    <div className={styles.contactContainer}>
      
      <section className={styles.heroSection}>
        <h1>Contact Us</h1>
        <form action="">
          <div className={styles["name-box"]}>
          <input className={styles["contact-input"]}  type="text" placeholder="First Name" />
          <input className={styles["contact-input"]}  type="text" placeholder="Last Name" />
          </div>
          <input className={styles["contact-input"]}  type="email" placeholder="Enter Email Address" />
          <textarea name="" id="" placeholder="Message"></textarea>
        <button className={styles.ctaButton} onClick={() => navigate("/")}>
          Send
        </button>
        </form>
      </section>
      <GoogleMap />
    </div>
  );
}
