import React, { useEffect, useState } from 'react'
import SignIn from './SignIn';
import Home from './Home';

export default function PrivateRoute({ products, setCartList }) {

    const [user, setUser] = useState({})

    const getUser = () => {
        const str = localStorage.getItem("user") ?? "{}";
        const res = JSON.parse(str);
        setUser(res);
    }

    useEffect(() => { getUser() }, []);
    console.log(user.email)
    return (
        user.email != undefined ?
            <Home products={products} setCartList={setCartList} /> : <SignIn />
    )
}
