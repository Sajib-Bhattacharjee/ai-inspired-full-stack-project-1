import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/api" });

// CRUD operations
export const fetchItems = () => API.get("/items");
export const createItem = (data) => API.post("/items", data);
export const updateItem = (id, data) => API.put(`/items/${id}`, data);
export const deleteItem = (id) => API.delete(`/items/${id}`);
