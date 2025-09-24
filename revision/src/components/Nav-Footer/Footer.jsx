import React from 'react'
import "../../App.css";
import { useNavigate } from 'react-router-dom'

export default function Footer() {
    const navigate = useNavigate();
    return (
        <div>
            <footer>
                <button onClick={() => { navigate("/") }}>Home</button>
                <button onClick={() => {
                    console.log("process....");
                    navigate("/cart");
                }}>Cart</button>
                <button onClick={() => { navigate("/product") }}>Product</button>
                <button onClick={() => { navigate("/profile") }}>Profile</button>
            </footer>
        </div>
    )
}

// home page products
// add to cart --> cart
