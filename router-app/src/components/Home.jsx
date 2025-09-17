import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import "./Home.css";
import Navbar from './Navbar';

export default function Home({ products, setCartList }) {
    const [user, setUser] = useState({});
    const navigate = useNavigate();

    const getUser = () => {
        const str = localStorage.getItem("user") ?? "{}";
        const res = JSON.parse(str);
        setUser(res);
    }

    useEffect(() => {
        navigate("/home");
        getUser();
    }, []);

    return (
        <div>
            <Navbar />
            <h1>{user.email}</h1>
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

                        <button onClick={() => {
                            setCartList(prev => [...prev, product]);
                            navigate("/carts");
                        }}>+</button>

                    </div>)
                }
            </div>
        </div>
    )
}

// COMPONENT-->STATE-->PROP==>PASS-->DISPLAY(ONLY READABLE)

//

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

// day 3
// add to cart -

// day 4
// count total bill
// remove cart item
// fetch data from api
// useEffect --> multi use.

// local storage - save
// private routing

// wednesday = ecom

// local storage day 1

// day 5 private routing