import React from "react";
import styles from "./Axios Css/PostData.module.css";
import axios from "axios";
import { useEffect, useState } from "react";

const PostData = () => {
  let api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
  });

  let userData = { "title ": "", "body": "" };
  let [inputData, setInputData] = useState([userData]);

  function handleChange(e) {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  }

  async function postData(e) {
    console.log(e.target.name, e.target.value);
    e.preventDefault();
    try {
      let response = await api.post("/posts", inputData);
      let data = response.data;
      console.log(data);
    } catch (error) {
      console.log("Error Message : ", error.message);
    }
  }

  return (
    <div className={styles.formContainer}>
    <h1>Post Data</h1>
      <input
        type="text"
        placeholder="Title"
        name="title"
        value={inputData["title"] || ""}
        onChange={handleChange}
        className={styles.inputField}
      />
      <input
        type="text"
        placeholder="Body"
        name="body"
        value={inputData["body"] || ""}
        onChange={handleChange}
        className={styles.inputField}
      />
      <button onClick={postData} className={styles.submitButton}>
        Post Data
      </button>
    </div>
  );
};

export default PostData;
