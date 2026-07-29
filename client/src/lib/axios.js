import axios from "axios";


// when in production mode, there is no "localhost" this function makes the process dynamic
const BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:5001/api" : "/api"

// hook allows us to call on this function in other documents
const api = axios.create({
    baseURL: BASE_URL,
});

export default api;