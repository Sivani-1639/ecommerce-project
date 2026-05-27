import axios from "axios";

const API = axios.create({

baseURL:
window.location.hostname === "localhost"
? "http://localhost:5000/api"
: "https://ecommerce-project-1-g5vy.onrender.com/api"

});

export default API;