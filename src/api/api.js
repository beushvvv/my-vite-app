import axios from "axios";

const API_URL = "http://localhost:3001/items";

export const fetchItems = () => axios.get(API_URL);

export const createItem = (item) => axios.post(API_URL, item);

// Для PUT/PATCH и DELETE id остаётся строкой (как в API)
export const updateItem = (id, item) => axios.put(`${API_URL}/${id}`, item);
export const deleteItem = (id) => axios.delete(`${API_URL}/${id}`);
export const fetchItemById = (id) => axios.get(`${API_URL}/${id}`);