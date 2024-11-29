import styles from "./Toolbox.module.css"; 

export default function ToolboxContainer({ title, desc, btnName, clickBtn }) {
  return (
    <div className={styles.toolCard}>
      <h2 className={styles.toolTitle}>{title}</h2>
      <p className={styles.toolDescription}>{desc}</p>
      <button className={styles.toolButton} onClick={clickBtn}>
        {btnName}
      </button>
    </div>
  );
}
