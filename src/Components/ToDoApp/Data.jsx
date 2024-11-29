import styles from "./Form.module.css"

function Data({ todo, date, clickButton }) {
  return (
    <li className={styles.dataItem}>
      <div>
        <strong>{todo}</strong> - <span>{date}</span>
      </div>
      <button className={styles.deleteButton} onClick={clickButton}>
        Delete
      </button>
    </li>
  );
}

export default Data;
