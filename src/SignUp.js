import React from 'react'
import { useState } from "react"
import './App.css'
import { Link } from 'react-router-dom'



function SignUp() {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const SendDataToBackend = async(e) => {

    await fetch('/api', {
      method: 'POST',
      body: JSON.stringify({email, pass})
    })
      .then(() => {//navigateToSignIn();
      })
      .catch((error) => console.log(error))
    
    return;
  }

  return (
    <div style={{width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column',
      justifyContent: 'center', alignItems: 'center'}}>
      
      <div
        style={{margin: '10px'}}
      >SIGN UP YOUR ACCOUNT</div>
      <div className='container'>
        <form
          action='/api'
          method='post'
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
            type='submit'
          >Sign up</button>
        </form>
      </div>


      <div 
        style={{marginLeft: "0px", marginTop: "10px", fontSize: "14px"}}>
          <Link to="/SignIn">Already have an account?</Link>
      </div>
    </div>
  );
}

export default SignUp;