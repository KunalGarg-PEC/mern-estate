/* eslint-disable no-unused-vars */
import React from "react";
import {BrowserRouter , Routes , Route} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Signin from "./pages/Signin";
import Header from "./components/Header";
import SignUp from "./pages/signUp";

export default function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={< About/>}></Route>
      <Route path="/profile" element={< Profile/>}></Route>
      <Route path="/signin" element={< Signin/>}></Route>
      <Route path="/signup" element={< SignUp/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

