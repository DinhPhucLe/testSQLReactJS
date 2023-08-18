import React from 'react'
import { useState } from "react"
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom"
import './App.css'
import SignUp from './SignUp.js';
import SignIn from './SignIn.js';
import UserNotFound from './SignInFailed/UserNotFound';
import WrongPassword from './SignInFailed/WrongPassword';
import MainPage from './content/MainPage';
import UserAlready from './SignInFailed/UserAlready';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<SignUp/>}/>
          <Route path='/SignIn' element={<SignIn/>}/>
          <Route path='/SignIn/user-not-found' element={<UserNotFound/>}/>
          <Route path='/SignIn/password-incorrect' element={<WrongPassword/>}/>
          <Route path='/used-email' element={<UserAlready/>}/>
          <Route path='/mainContent' element={<MainPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;