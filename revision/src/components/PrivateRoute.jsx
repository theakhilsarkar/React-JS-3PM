import React, { useEffect, useState } from 'react'
import Home from '../pages/Home';
import SignIn from '../pages/SignIn';

export default function PrivateRoute({ children }) {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    return (
        user.email ? children : <SignIn />
    )
}
