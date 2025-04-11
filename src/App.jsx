import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Inicial from "./vistas/Inicial";
import PiedePagina from './components/PiedePagina';
import Login from "./vistas/Login";
import Profile from "./vistas/Profile";
import ResponsiveAppBar from './components/ResponsiveAppBar';
import {useState} from 'react';

function App() {
  const[isLogin, setIsLogin] = useState(false);
  const login= async (user) => {
    const data= await fetch("http://localhost:5000/login", 
      {method:"POST", 
       headers:{
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
      });
     const datos = await data.json();
    setIsLogin(datos.isLogin);
    return datos.isLogin;
  };

  const logout = () =>{
    setIsLogin(false);
  };
  return (
    <BrowserRouter>
      {isLogin && <ResponsiveAppBar logout={logout} />}
      <Routes>
        <Route path="/" element={<Login  login={login}/>} />
        <Route path="/home" 
        element={isLogin ? <Inicial />: < Navigate to={"/"}/> }
        />
        <Route path="/user/profile" element={<Profile />} />
        <Route path="*" element={<Navigate to={"/"} />}
         />
      </Routes>
     <PiedePagina/>
    </BrowserRouter>
  );
}

export default App;
