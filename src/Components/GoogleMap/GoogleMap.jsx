import styles from "./GoogleMap.module.css";

const GoogleMap = () => {
  return (
    <>
      <div className={styles["map-container"]}>
      <h1 className={styles["title"]}>Our Address</h1>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.7236536701575!2d85.31226207525333!3d27.69493477618978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19ad6cb5d55d%3A0x27982de11b0fb854!2sDasharath%20Stadium!5e0!3m2!1sen!2snp!4v1729245773643!5m2!1sen!2snp"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className={styles["map-image"]}
        ></iframe>
      </div>
    </>
  );
};

export default GoogleMap;
