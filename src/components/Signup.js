import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import './Signup.css'

const Signup = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const[cnfrmpasswrd,setCnfrmPasswrd]=useState('')
  const navigate = useNavigate();

  let userData =JSON.parse(localStorage.getItem("userData")) || [];
  // console.log("jellldl",JSON.parse(localStorage.getItem("userData")) )
  console.log("user data is",userData);
  const [signupData, setSignupData] = useState(userData)
  function handleSignup(e) {
    e.preventDefault()
    console.log(name)
    console.log(email)
    console.log(password)
    console.log(cnfrmpasswrd)
    const obj = {
      "name": name,
      "email": email,
      "password": password,
    }
    if (name.trim() === '' || email.trim() === '' || password.trim() === '') {
      alert('please enter all the field')
      return
    }
    if(password!==cnfrmpasswrd){
      alert("password did not match")
      return;
    }
    // logic of email validation

    setSignupData([...signupData, obj])
    userData.push(obj)
    console.log('this is your user data')
    console.log(userData)
    console.log(signupData)

    const storedUserData = localStorage.getItem('userData')

    if (storedUserData !== null) {
      const userList = JSON.parse(storedUserData)
      console.log('User data exists:', userList)
      userList.forEach((item) => {
        if(item.email===email){
          alert("user already exist");
          return;
        }
        
      });
    } else {
      console.log('User data not found in local storage')
    }

    localStorage.setItem('userData', JSON.stringify([...signupData, obj]))
    navigate('/login');
  }
  return (
    <div className='signup'>
      <form onSubmit={handleSignup}>
        <h2>Signup</h2>

        <div>
          <label htmlFor='name'>Enter Your Name:</label>
          <br></br>
          <input
            onChange={(e) => {
              setName(e.target.value)
            }}
            type='text'
            id='name'
          />
        </div>
        <div >
          <label htmlFor='email'>Email :</label>
          <br></br>
          <input
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            type='email'
            id='email'
          />
        </div>
        <div>
          <label htmlFor='password'>Password :</label>
          <br></br>
          <input
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            type='password'
            id='password'
          />
        </div>
        <div>
          <label htmlFor='cnfrmpassword'>Confirm Password :</label>
          <br></br>
          <input
            onChange={(e) => {
              setCnfrmPasswrd(e.target.value)
            }}
            type='cnfirmpassword'
            id='cnfirmpassword'
          />
        </div>
        <button type='submit'>Sign IN</button>
        <p>Already have an account?<a href='http://localhost:3000/login'>click here</a></p>
        
      </form>

    </div>
  )
}

export default Signup
