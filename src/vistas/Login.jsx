import React, {useState} from 'react'
import {Box, Button, TextField} from "@mui/material";
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';


const Login = ({login}) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const onsubmit = async (e) => {
    e.preventDefault();
  const isLogin =  await login({username, password});
  if (isLogin){
    navigate("/home");
  }else{
    alert("credenciales incorrectas");
  }
  };

    return(
      <form onSubmit = {onsubmit}>
        <Box
          margin ={"auto"}
          flexDirection = {"column"}
          display = {"flex"}
          width={400}
          marginTop={"20px"}
          color={"white"}
          
        >
          <TextField
           label={"Username"} 
           value={username} 
           onChange={(e)=> setUsername(e.target.value)} 
           />
          <TextField type={"password"} 
            label={"Password"} 
            value={password}  
            onChange={(e)=> setPassword(e.target.value)}
          />
          <Button type={"submit"} variant = "contained">
            Login
          </Button>
        </Box>
      </form>
    )
}

export default Login
