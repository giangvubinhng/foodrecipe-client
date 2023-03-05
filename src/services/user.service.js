import axios from "axios";
import config from "../utils/config";
import { redirect } from "react-router-dom";

const login = async (body) => {
    return await axios.post(`${config.API}/users/login`, body, {withCredentials: true})
}
const fetchUserAsync = async () => {
    return await axios.get(`${config.API}/users/me`, {withCredentials: true})
}
const logout = async () => {
    return await axios.post(`${config.API}/users/logout`, {}, {withCredentials: true})
}

const register = async (request) => {
    const data = await request.formData()

    const submission = {
        email: data.get('email'),
        password: data.get('password'),
        firstName: data.get('firstName'),
        lastName: data.get('lastName'),
    }

    try{
        await axios.post(`${config.API}/users/register`, submission)
        return redirect('/login')
    }
    catch(err)
    {
        return {error: err.response.data.message}
    }

}

const preventAuthAccess = async () => {
    try{
    const result = await userService.fetchUserAsync()
    if(result.data.data.user.isLoggedIn){
        return redirect("/")
    }else{
        return null
    }

    }catch(e){
    redirect("/")

    }
}

export default {
    login,
    fetchUserAsync,
    logout,
    register,
    preventAuthAccess
}