import React from 'react'
import "../../App.css";
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <nav>
                <span><Link to={"/home"} >Home</Link></span>
                <span><Link to={"/cart"} >Cart</Link></span>
                <span><Link to={"/product"} >Product</Link></span>
                <span><Link to={"/profile"} >Profile</Link></span>
            </nav>
        </div>
    )
}
