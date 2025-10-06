import './App.css'
import Home from './components/Home/Home'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import Product from './components/Products/Product'
import Cart from './components/Cart/Cart'
import Profile from './components/Profile/Profile'
import SignIn from './components/Sign In/SignIn'
import Detail from './components/Detail/Detail'
import { useEffect, useState } from 'react'

function App() {
  const [cartList, setCartList] = useState([]); //temp, reload local storage
  useEffect(() => {
    localStorage.setItem("cart-list", JSON.stringify(cartList));
  }, [cartList]);
  // side effect - parallel
  // [] - one time call
  // [state] - call auto when state update
  // [state1,state2] - call auto when state1 update, state2
  return (
    <>

      <Routes>
        <Route path='/' element={<SignIn />} />
        <Route path='/home' element={<Home />} />
        <Route path='/cart' element={<Cart cartList={cartList} setCartList={setCartList} />} />
        <Route path='/product' element={<Product />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/detail' element={<Detail setCartList={setCartList} />} />
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