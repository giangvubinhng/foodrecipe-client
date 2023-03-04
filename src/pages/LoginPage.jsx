import { Form } from "react-router-dom";
import { TextField } from "@mui/material";
export default function Login() {

  return (
    <div id="login-page">
      <h1>Food Recipe Login!</h1>
      <p>Login page.</p>

      <Form method="post">
        <TextField id="email" label="email" variant="standard" />
        <TextField id="password" label="password" variant="standard" />

      </Form>
    </div>
  );
}
