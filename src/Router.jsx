import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>} />
        <Route path="login" element={<Login/>} />
      </Routes>
    </BrowserRouter>
  )
}

export const goToHome = (navigate) => navigate("/")
export const goToLogin = (navigate) => navigate("/login")
export const goToSignUp = (navigate) => navigate("/signup")
export const goToError = (navigate) => navigate("/error")