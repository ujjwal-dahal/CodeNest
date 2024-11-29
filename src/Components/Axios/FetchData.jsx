import axios from "axios";
import "../../Styles/FetchData.css"
import { useEffect, useState } from "react";

function FetchData() {
  const [myData, setMyData] = useState([]);

  // const url = "https://dummyjson.com/users";

  const api = axios.create({
    baseURL : "https://dummyjson.com/",
  })

  const fetchingData = () =>  {
    api
      .get("users")
      .then((response) => {
        setMyData(response.data.users);
      })
      .catch((err) => {
        console.error(`Error is ${err}`);
      });
  };

  useEffect(() => {
    fetchingData();
  }, []);

  return (
    <>
      <h1>User Data </h1>
      <ul>
        {myData.map((item, index) => (
          <div className="main-container" key={index}>
            <div className="container" key={item.id}>
              <div className="username">
              <p>{item.firstName}</p>
              <p>{item.lastName}</p>
              </div>
              <p> Age : {item.age} </p>
              <p> Gender : {item.gender} </p>
              <p> Email : {item.email} </p>
              <p> Phone Number : {item.phone} </p>
            </div>
          </div>
        ))}
      </ul>
    </>
  );
}

export default FetchData;
