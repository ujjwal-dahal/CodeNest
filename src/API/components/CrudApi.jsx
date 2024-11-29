import { useState, useEffect } from "react";
import Button from "./Button";
import "../api css/InputBox.css";
import "../api css/GetApi.css";
import { postData, getData, deleteData, updateData } from "./ApiInstance";

const CrudApi = () => {
  const [apiData, setApiData] = useState([]);
  const [inputData, setInputData] = useState({ title: "", body: "" });

  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState(null);

  // Fetch data from API
  const getApiData = async () => {
    try {
      let response = await getData();
      setApiData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getApiData(); 
  }, []);

  const handleInput = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const clickAddBtn = async (e) => {
    e.preventDefault();
    try {
      if (isEdit) {
        // Update existing data
        await updateData(editId, inputData);
        setIsEdit(false);  
        setEditId(null);
        console.log("Data is Edited");

        // Update data in UI without calling API again
        setApiData((prevData) => {
          return prevData.map((item) => (item.id === editId ? { ...item, ...inputData } : item));
        });
      } else {
        // Post new data
        let response = await postData(inputData);
        if (response.status === 201) {
          setApiData([...apiData, response.data]); // Add new data to the current state
          console.log("Data is Posted");
        }
      }
      setInputData({ title: "", body: "" }); // Reset form
    } catch (error) {
      console.log(error);
    }
  };

  const clickDeleteBtn = async (id) => {
    try {
      let response = await deleteData(id);
      if (response.status === 200) {
        console.log(`Data whose Id: ${id} is Deleted`);

        // Remove the deleted item from the state without calling API again
        setApiData(apiData.filter((item) => item.id !== id));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const clickEditBtn = (id, title, body) => {
    setIsEdit(true);
    setEditId(id);
    setInputData({ title, body }); 
  };

  return (
    <div>
      <form className="input-container" method="post">
        <input
          type="text"
          placeholder="Title"
          value={inputData.title}
          name="title"
          onChange={handleInput}
        />
        <textarea
          placeholder="Body"
          value={inputData.body}
          name="body"
          onChange={handleInput}
        ></textarea>
        <Button
          btnName={isEdit ? "Edit" : "Add"}
          btnColor={isEdit ? "editBtn" : "addBtn"}
          clickBtn={clickAddBtn}
        />
      </form>

      <div className="semi-container">
        {apiData.map((item) => (
          <div className="container" key={item.id}>
            <p className="id">ID: {item.id}</p>
            <p className="title">{item.title}</p>
            <p className="body">{item.body}</p>
            <Button
              btnName="Edit"
              btnColor="editBtn"
              clickBtn={() => clickEditBtn(item.id, item.title, item.body)}
            />
            <Button
              btnName="Delete"
              btnColor="deleteBtn"
              clickBtn={() => clickDeleteBtn(item.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CrudApi;
