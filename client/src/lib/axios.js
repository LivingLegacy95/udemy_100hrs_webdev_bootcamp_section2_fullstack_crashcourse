import axios from "axios";

// hook allows us to call on this function in other documents
const api = axios.create({
    baseURL: "http://localhost:5001/api",
});

export default api;