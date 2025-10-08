import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts, insertProduct } from '../slices/productSlice'

export default function Home() {

    const dispatch = useDispatch();
    const { products } = useSelector(state => state.product);

    useEffect(() => {
        dispatch(fetchProducts());
    }, []); // [],[state]

    return (
        <div>
            <button onClick={() => {
                dispatch(insertProduct({
                    title: "Mobile Charger",
                    price: 1200
                }))
            }}>Insert</button>
            <div>
                {
                    products.map((product, index) => <div key={index}>{product.id}</div>)
                }
            </div>
        </div>
    )
}
