import axios from "axios";

const axiosInstance=axios.create({
    baseURL:"https://jsonplaceholder.typicode.com/posts",
    timeout:10000,
    headers:{
        "Content-Type":"application/json"
    }
})

axiosInstance.interceptors.response.use(
    (response)=>response,
    (error)=>{
        console.log("axios interceptors ")
        console.log(error)
    }
)

export default axiosInstance