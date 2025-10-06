import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function Detail({ setCartList }) {
    const { state } = useLocation();
    const navigate = useNavigate();
    // const products = state;
    return (
        <div>
            <h1>Detail Page</h1>
            <h2>{state.title}</h2>
            <img src={state.image} alt="" />
            <p>{state.description}</p>
            <h3>$ {state.price}</h3>
            <button onClick={() => {
                // [1]
                // [1,2]
                setCartList((prev) => [...prev, state])
                navigate("/cart");
            }}>Add to Cart</button>
        </div>
    )
}
