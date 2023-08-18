import React from 'react';
import { useState } from "react";
import './App.css';
import { Link } from 'react-router-dom';



function WrongPassword() {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [errorMessage, setErrorMessage] = useState('Password is incorrect');
  const tf = true;

  const SendDataToBackend = async(e) => {
    const tmp = await fetch('/SignIn/failed', {
      method: 'POST',
      body: JSON.stringify({email, pass}),
    })
      .then((response) => {
        const data = response.json()
          .then((message) => {
            console.log(message);
            setErrorMessage(message);
          })
      })
      .catch((error) => console.log(error))
    
    return false;
  }


  return (
  <>
    <div style={{width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column',
      justifyContent: 'center', alignItems: 'center'}}>
      
      <div
        style={{margin: '10px'}}
      >SIGN IN YOUR ACCOUNT</div>
      <div className='container'>
        <form 
          action='/SignIn/failed'
          method='POST'
          style={{display: 'flex', flexDirection: 'column'}}
          onSubmit={SendDataToBackend}>

          <input 
            placeholder='Enter your email'
            style={{margin: '10px', height: '30px', borderRadius: '15px', border: '1px solid grey'}}
            type='text'
            name='userEmail'
            onChange={event => setEmail(event.target.value)}
          ></input>

          <input 
            placeholder='Enter your password'
            style={{margin: '10px', height: '30px', borderRadius: '15px', border: '1px solid grey'}}
            type='text'
            name='userPassword'
            onChange={event => setPass(event.target.value)}
          ></input>

          <button 
            style={{width: '30%', margin: '10px', marginLeft: '60%'}}

          >Sign in</button>
          {
            tf &&
            <div style={{color: "red", fontSize: "10px", marginLeft: '40%'}}>{errorMessage}</div>
          }
        </form>
      </div>

      <div 
        style={{marginLeft: "0px", marginTop: "10px", fontSize: "14px"}}>
          <Link to="/">Create new account</Link>
      </div>

    </div>
  </>
  );
}

export default WrongPassword;