import React from 'react'
import { useNavigate } from 'react-router'
import { products } from '../json/products'
import "./Home.css";

export default function Home() {
    const navigate = useNavigate();
    return (
        <div>
            <h2>Home Page</h2>
            <div className="products-view">
                {
                    products.map((product, index) => <div key={index} className='product-box'>
                        <h3>{product.title}</h3>
                        <h3>{product.price}</h3>
                        <p>{product.category}</p>
                        <button onClick={() => {
                            console.log(product);
                            // navigate("/products", { state: index })
                            navigate("/products", { state: product })
                        }}>View</button>
                    </div>)
                }
            </div>
        </div>
    )
}


// day1
// login --> home
// navbar - menus - click navigate - home
// login page -- button(replace:true) --> home

// day2
// home page - display products
// on click on product view -> navigate to product detail page
// display selected product in detail page.
// product page
// detail page

// day3
// add to cart - 
