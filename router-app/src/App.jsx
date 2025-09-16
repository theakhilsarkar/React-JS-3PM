import './App.css'
import { Routes, Route, Link } from 'react-router'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import ProductDetail from './components/ProductDetail'
import Carts from './components/Carts'
// import { products } from "./json/products"
import { useEffect, useState } from 'react'
import SignIn from './components/SignIn'
import PrivateRoute from './components/PrivateRoute'

function App() {

  const [cartList, setCartList] = useState([]);
  const [products, setProducts] = useState([]);

  const fetchProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => alert("Cant fetch data ", err));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <Routes>
        <Route path='/' element={<PrivateRoute products={products} setCartList={setCartList} />} />
        <Route path='/home' element={<Home products={products} setCartList={setCartList} />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contacts' element={<Contact />} />
        <Route path='/products' element={<ProductDetail />} />
        <Route path='/carts' element={<Carts cartList={cartList} setCartList={setCartList} />} />
      </Routes>
    </>
  )
}

export default App
