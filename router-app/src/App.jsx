import './App.css'
import { Routes, Route, Link } from 'react-router'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import ProductDetail from './components/ProductDetail'
import Carts from './components/Carts'
import { products } from "./json/products"
import { useState } from 'react'

function App() {

  const [cartList, setCartList] = useState([]);

  return (
    <>
      <nav>
        <Link to={"/about"}>About</Link>
        <Link to={"/projects"}>Projects</Link>
        <Link to={"/contacts"}>Contact</Link>
        <Link to={"/carts"}>Cart</Link>
      </nav>
      <Routes>
        {/* <Route path='/' element={<Home />} /> */}
        <Route path='/' element={<Home products={products} setCartList={setCartList} />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contacts' element={<Contact />} />
        <Route path='/products' element={<ProductDetail />} />
        <Route path='/carts' element={<Carts cartList={cartList} />} />
      </Routes>
    </>
  )
}

export default App
