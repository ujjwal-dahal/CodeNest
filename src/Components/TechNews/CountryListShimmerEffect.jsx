import styles from "./CountryListCss/CountryList.module.css";

const CountryListShimmerEffect = ({isDark}) => {
  let myArray = new Array(12).fill(null); // Array of 10 null elements
  return (
    <div className={isDark?styles["dark-mode-shimmer-container"] :styles["shimmer-container"]}>
      {myArray.map((item, index) => (
        <div className={isDark? styles["dark-mode-shimmer-container"] : styles["country-container"]} key={index}>
          <div className={isDark? styles["dark-mode-shimmer-flag"] : styles["shimmer-flag"]}></div>
          <p className={isDark? styles["dark-mode-shimmer-name"] : styles["shimmer-name"]}></p>
          <p className={isDark? styles["dark-mode-shimmer-capital"] : styles["shimmer-capital"]}></p>
          <p className={isDark? styles["dark-mode-shimmer-population"] : styles["shimmer-population"]}></p>
          <p className={isDark? styles["dark-mode-shimmer-region"] : styles["shimmer-region"]}></p>
        </div>
      ))}
    </div>
  );
};

export default CountryListShimmerEffect;
