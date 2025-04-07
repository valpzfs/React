import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <Link to="/">Login</Link>
      <br/>
      <Link to ="/home">Home</Link>
      <br/>
      <Link to = "/user/profile">Profile</Link>
    </div>
  )
}

export default Login
