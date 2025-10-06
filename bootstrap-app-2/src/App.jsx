
import './App.css'
import About from './components/About'
import Hero from './components/Hero'
import Home from './components/Home'
import Navbar from './components/Navbar'
import NewsFeed from './components/NewsFeed'
import { Route, Routes } from 'react-router'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/hello' element={<About />} />
      </Routes>
    </>
  )
}

export default App
