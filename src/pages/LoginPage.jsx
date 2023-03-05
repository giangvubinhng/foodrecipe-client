import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TextField, Button } from "@mui/material";
import { useStore } from "../utils/store";
import userService from "../services/user.service";


export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({hasError: false, message: ''})
  const navigate = useNavigate()
  const fetchUser = useStore((state) => state.fetchUser)

  const handleLogin = async (e) => {

    e.preventDefault()

    try{
      const result = await userService.login({email, password})
      const {data} = result;
      fetchUser(data.data.user)
      setEmail('')
      setPassword('')
      navigate("/")

    }catch(err){
        setEmail('')
        setPassword('')
        setError({hasError: true, message: err.response.data.message})

    }
  }



  return (
    <div id="login-page">
      <h1>Login</h1>
      <p>Not a user?
        {' '}<Link to="/register">Regiser</Link> </p>
      <form onSubmit={handleLogin}>
        <TextField 
          id="email" 
          name="email" 
          label="email" 
          variant="standard" 
          value={email} 
          onChange={(e) => {setEmail(e.target.value)}}/>
        <br/>
        <TextField 
          id="password" 
          type="password" 
          label="password" 
          name="password" 
          variant="standard" 
          value={password} 
          onChange={(e) => {
            setPassword(e.target.value)
          }} />
        <br/>
        <Button type="submit">Sign In</Button>
      </form>
      {error && error.hasError && <p>{error.message}</p>}
    </div>
  );
}

