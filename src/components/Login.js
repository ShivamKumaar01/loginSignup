import React, { useState } from 'react'
import './Login.css'
import { useNavigate } from 'react-router';
import { FaEye } from "react-icons/fa";

const Login = () => {
  const[password,setPassword]=useState("");
  const[email,setEmail]=useState("")
  let userLogin=JSON.parse(localStorage.getItem('userLogin'))||[]
 const [loginData,setLoginData]=useState(userLogin);
 const navigate=useNavigate();

  function handleLogin(e){
    e.preventDefault();
    console.log(e);
    console.log(password);
    console.log(email);
    const obj={
      "password":password,
      "email":email
    }
    // check karo ki pass and email match kar raha hai ya nahi
    const checked=JSON.parse(localStorage.getItem("userData"));
    console.log("this is checked",checked);
    checked.forEach((item)=>{
      if(item.email===email&&item.password===password){
        userLogin.push(item.name);
        // localStorage.removeItem("loginData")
        localStorage.setItem("loginData",userLogin);
        localStorage.setItem("isLoggedin","yes")
        navigate('/home')
        return;
      }
     
    })
    if(userLogin.length===0){
      alert("invalid user");
    }

  }
 
  return (
    
    <div>
     <div className='login'>
       <form onSubmit={handleLogin}>
                <h2>Login to your account</h2>
                
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address :</label><br></br>
                    <input onChange={(e) => {setEmail(e.target.value)}} type="email" id="email"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="password">Password :</label><br></br>
                    <input onChange={(e) => {setPassword(e.target.value)}} type="password"  id="password"/>
                    
                </div>
                <button type="submit" >LOG IN</button>
                
            </form>
            <p>Create an account<a href='http://localhost:3000/'>click here</a></p>
      
     </div>
    </div>
  )
}

export default Login