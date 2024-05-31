import axios from "axios";

const BACKEND_DOMAIN = "http://127.0.0.1:8000";

const REGISTER_URL = `${BACKEND_DOMAIN}/user/register`
const LOGIN_URL = `${BACKEND_DOMAIN}/user/login`
const REQUEST_RESET_PASSWORD = `${BACKEND_DOMAIN}/user/forgot-password`
const RESET_PASSWORD = `${BACKEND_DOMAIN}/user/reset-password`


const config ={
    headers:{
        "Content-type":"application/json"
    }
}
const login = async (userData) =>{
    const response = await axios.post(LOGIN_URL,userData,config)
    if (response.data){
        localStorage.setItem("user",JSON.stringify(response.data.user))
        localStorage.setItem("access_token",JSON.stringify(response.data.access))
    }
    return response.data
}


const register = async (userData) =>{
    const config ={
        headers:{
            "Content-type":"multipart/form-data"
        }
    }
    const response = await axios.post(REGISTER_URL,userData,config)
    if (response.data){
        localStorage.setItem("user",JSON.stringify(response.data.user))
        localStorage.setItem("access_token",JSON.stringify(response.data.access))
    }
    return response.data
}

const requestResetPassword = async (email) =>{
    response =await axios.post(REQUEST_RESET_PASSWORD,email,config)
    return response.data
}

const passwordReset = async (data)=>{
    response = await axios.post(RESET_PASSWORD,data,config)
    return response.data
}



const authService ={login, register, requestResetPassword, passwordReset };

export default authService;
