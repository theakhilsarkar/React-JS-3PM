import React from 'react'
import { products } from '../json/products'
import { useLocation } from 'react-router'

export default function ProductDetail() {

    const location = useLocation();

    const product = location.state

    return (
        <div className='detail-product-box'>
            <h2>Product Detail Page</h2>
            
            <img src={product.image} alt="" />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <h3>{product.price}</h3>
            <p>{product.category}</p>

            {/* <img src={products[index].image} alt="" />
            <h3>{products[index].title}</h3>
            <p>{products[index].description}</p>
            <h3>{products[index].price}</h3>
            <p>{products[index].category}</p> */}
        </div>
    )
}
