import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./AuthContext";

import Home from "./Components/Home";
import Login from "./Components/Login";



export default function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
      <Routes>
      <Route exact path="/" element = {<Home/>}/>
      <Route exact path="/login" element = {<Login/>} />
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  );
}

