// import './App.css'
import ChatPage from './components/chat/ChatPage'
import HomePage from './components/HomePage'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import { Route, Routes } from 'react-router'

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/chat' element={<ChatPage />} />
      </Routes>
    </>
  )
}

export default App


// signin --> current user
// signup --> db