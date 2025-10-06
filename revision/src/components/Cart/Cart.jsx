import React, { useEffect } from 'react'
import Navbar from '../Nav-Footer/Navbar'
import Footer from '../Nav-Footer/Footer'

export default function Cart({ cartList, setCartList }) {
    useEffect(() => {
        setCartList(JSON.parse(localStorage.getItem("cart-list") || "[]"));
    }, []);
    return (
        <div>
            <Navbar />
            <h1>Cart Page</h1>
            <div>
                {
                    cartList.map((cart) => <div>
                        <h3>{cart.title}</h3>
                        <p>{cart.price}</p>
                        <button onClick={() => {
                            //setCartList - newArray
                            setCartList((prev) => prev.filter((data) => cart.id != data.id))
                        }}>-</button>
                    </div>)
                }
            </div>
            {/* <Footer /> */}
        </div>
    )
}
