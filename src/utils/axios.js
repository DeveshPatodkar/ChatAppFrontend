import axios from "axios";

export default axios.create({
    // baseURL: "http://localhost:5000",
    baseURL: "https://chatappmern-production.up.railway.app",
    // withCredentials: true,
});