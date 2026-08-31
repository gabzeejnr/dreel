import axios from "axios";

const api = axios.create({
    baseURL: "https://dreel-community-server.onrender.com/api"
})

export default api;