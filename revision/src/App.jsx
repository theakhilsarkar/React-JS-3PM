import React from 'react'
import SignIn from './pages/SignIn'
import "./App.css";
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import PrivateRoute from './components/PrivateRoute';

export default function App() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<PrivateRoute>
                    < Home />
                </PrivateRoute>} />

                <Route path='/home' element={<PrivateRoute>
                    < Home />
                </PrivateRoute>} />
            </Routes>
        </div>
    )
}
