import { Form, useActionData } from "react-router-dom";
import { TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function Register() {
    const error = useActionData()
  
  return (
    <div id="login-page">
      <h1>Food Recipe Register</h1>
      <p>Already a user?
        {' '}<Link to="/login">Login</Link> </p>
      <Form method="post" action="/register">
        <TextField 
          id="email" 
          name="email" 
          label="email" 
          variant="standard" 
          />
        <br/>
        <TextField 
          id="password" 
          type="password" 
          label="password" 
          name="password" 
          variant="standard" 
          />
        <br/>
        <TextField 
          id="firstName" 
          name="firstName" 
          label="First Name" 
          variant="standard" 
          />
        <br/>
        <TextField 
          id="lastName" 
          name="lastName" 
          label="Last Name" 
          variant="standard" 
          />
        <br/>
        <Button type="submit">Register</Button>
        {error && error.hasError && <p>{error.message}</p>}
      </Form>
    </div>
  );
}

