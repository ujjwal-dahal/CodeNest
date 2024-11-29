import { useState } from "react";
import Button from "./Button";
import Data from "./Data";
import styles from "./Form.module.css";

function Form() {
  const [todo, setTodo] = useState("");
  const [date, setDate] = useState("");
  const [array, setArray] = useState([]);

  function addData() {
    if (todo && date) {
      const newArray = [...array, { todo, date }];
      setArray(newArray);
      setDate("");
      setTodo("");
    }
  }

  function deleteData(index) {
    const newArray = array.filter((_, i) => i !== index);
    setArray(newArray);
  }

  return (
    <div className={styles["main-container"]}>
    <div className={styles.container}>
      <div className={styles.row}>
        <input
          type="text"
          className={styles.formControl}
          placeholder="Enter To Do"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <input
          type="date"
          className={styles.date}
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <Button tags="success" title="Add" clickButton={addData} className={styles.button} />
      </div>

      <ul className={styles.dataList}>
        {array.map((item, index) => (
          <Data
            key={index}
            todo={item.todo}
            date={item.date}
            clickButton={() => deleteData(index)}
          />
        ))}
      </ul>
    </div>
    </div>
  );
}

export default Form;
