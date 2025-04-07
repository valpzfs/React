import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicial from "./vistas/Inicial";
import Login from "./vistas/Login";
import Profile from "./vistas/Profile";
import ResponsiveAppBar from './components/ResponsiveAppBar';

function App() {
  return (
    <BrowserRouter>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Inicial />} />
        <Route path="/user/profile" element={<Profile />} />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
