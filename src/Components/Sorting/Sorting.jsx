import { useState } from "react";
import styles from "./Sorting.module.css";
import { IoIosArrowDropdown } from "react-icons/io";

let Sorting = ({isAscending , setIsAscending , isClickedOrder , setIsClickedOrder}) => {
  let [isDropdown , setIsDropdown] = useState(false)

  let menuDropdown = () => {
    setIsDropdown(!isDropdown)
  }

  let handleClick = (orderValue)=>{
    setIsClickedOrder(true)
    setIsAscending(orderValue);
    setIsDropdown(!isDropdown)
  }

  return (
    <>
      <div className={styles["dropdown-container"]}>
        <button className={styles["main-container"]} onClick={menuDropdown}>
          <p>Sorting</p>
          <IoIosArrowDropdown className={styles["down-arrow"]} />
        </button>
        
        {isDropdown && 
          <div className={styles["drop-container"]}>
            <button className={styles["item"]} onClick={()=>handleClick(true)} >Ascending</button>
            <button className={styles["item"]} onClick={()=>handleClick(false)}>Descending</button>
          </div>
        }
      </div>
    </>
  );
};

export default Sorting;
