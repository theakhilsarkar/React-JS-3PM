import './App.css'
import { Route, Routes } from 'react-router'
import SignIn from './components/SignIn';
import Home from './components/Home';
import PrivateRoute from './components/PrivateRoute';
import Cart from './components/Cart';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>} />
        {/* <Route path='/signin' element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          } /> */}
        <Route path='/cart' element={<PrivateRoute>
          <Cart />
        </PrivateRoute>} />
      </Routes>
    </>
  )
}

export default App;

// day - 1 : protect routes by private route(manualy).

// ashutosh/2
// abhishek
// tanmay
// bhupen
// suraj



