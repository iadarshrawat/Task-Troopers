import axios from "axios";

const newRequest = axios.create({
    baseURL:"http://localhost:8800/api/", withCredentials:true,
})
// withCreadential is able cookie to store in browser
export default newRequest;