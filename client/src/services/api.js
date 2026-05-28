import axios from "axios";

const API = axios.create({
  baseURL: "https://ecommerce-project-c08i.onrender.com"
});

export default API;