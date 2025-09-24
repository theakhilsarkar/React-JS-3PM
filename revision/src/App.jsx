import './App.css'
import Home from './components/Home/Home'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import Product from './components/Products/Product'
import Cart from './components/Cart/Cart'
import Profile from './components/Profile/Profile'
import SignIn from './components/Sign In/SignIn'

function App() {
  const navigate = useNavigate();
  return (
    <>

      <Routes>
        <Route path='/' element={<SignIn />} />
        <Route path='/home' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/product' element={<Product />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>

    </>
  )
}

export default App

// routing
// page to another
// home
// profile
// product
// bill

// react-router-dom npm