import React from 'react'

export default function Carts({ cartList }) {
    return (
        <div>
            <h2>Cart Page</h2>
            <div>
                {
                    cartList.map((cart, index) => <div key={index}>
                        <p>{cart.title}</p>
                    </div>)
                }
            </div>
        </div>
    )
}
