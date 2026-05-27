import axios from "axios";

const API = axios.create({
  baseURL: "https://ecommerce-project-1-g5vy.onrender.com",
});

export default API;