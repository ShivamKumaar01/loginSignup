import logo from './logo.svg'
import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'
import { BrowserRouter, Routes, Route, Outlet, Navigate } from 'react-router-dom'
import Home from './components/Home'

function App() {
  const logedin=localStorage.getItem("isLoggedin");
  const PrivateRoutes = () => {
    return logedin ? <Outlet /> : <Navigate to="/login" />;
  };
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Signup />} />
        <Route element={<PrivateRoutes />}>
          <Route path='/home' element={<Home />} />
        </Route>
        <Route path='/login' element={<Login />} />
      </Routes>

      {/* <Signup></Signup> */}
      {/* <Login></Login> */}
    </div>
  )
}

export default App
