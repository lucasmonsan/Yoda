import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { PrivateRoutes } from "./PrivateRoutes";

export const RouterController = () => {  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PrivateRoutes/>}>
          <Route path="/home" element={<Home/>}/>
          <Route path="/home/addoptions" element={<Home/>}/>
        </Route>        
        <Route path="login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  )
}