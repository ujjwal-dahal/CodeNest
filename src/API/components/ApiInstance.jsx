import axios from "axios";

let api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

// GET Request
export function getData() {
  return api.get("/posts"); 
}

// POST Request
export function postData(objectData) {
  return api.post("/posts", objectData);
}

// DELETE Request
export function deleteData(id) {
  return api.delete(`/posts/${id}`);
}

// PUT (UPDATE) Request
export function updateData(id, editData) {
  return api.put(`/posts/${id}`, editData); 
}
