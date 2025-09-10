import './App.css'
import { Routes, Route, Link } from 'react-router'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import ProductDetail from './components/ProductDetail'

function App() {
  return (
    <>
      <nav>
        <Link to={"/about"}>About</Link>
        <Link to={"/projects"}>Projects</Link>
        <Link to={"/contacts"}>Contact</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contacts' element={<Contact />} />
        <Route path='/products' element={<ProductDetail />} />
      </Routes>
    </>
  )
}

export default App
