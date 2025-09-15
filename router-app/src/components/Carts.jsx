import React, { useEffect, useState } from 'react'

export default function Carts({ cartList, setCartList }) {

    const [total, setTotal] = useState(0);

    const totalPrice = () => {
        let sum = 0;
        cartList.map(cart => {
            sum = sum + cart.price;
        });
        setTotal(sum);
    };

    // for side effect - 
    useEffect(() => {
        totalPrice();
    }, [cartList]);

    // [] --> component render
    // [state] --> component render, state update
    // [state,secondState] --> component render, first state update,secon state state update


    const removeProductFromCart = (id, index) => {
        // 1. cartlist --> copy , ...
        const arr = [...cartList];
        arr.splice(index, 1);
        setCartList(arr);
        // way 2
        // setCartList(prev => prev.filter((cart) => cart.id != id));
    }
    return (
        <div>
            <h2>Cart Page / Total - ₹ {total}</h2>
            <div>
                {
                    cartList.map((cart, index) => <div key={index}>
                        <p>{cart.title} price - {cart.price}</p>
                        <button onClick={() => removeProductFromCart(cart.id, index)}>-</button>
                    </div>)
                }
            </div>
        </div>
    )
}
