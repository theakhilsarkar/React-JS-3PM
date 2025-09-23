import React, { useState } from 'react'
import { data } from '../../assets/data'

export default function Home() {

    // sorting - ecom - price
    // high to low
    // low to high

    const [search, setSearch] = useState("")
    const [sortOrder, setSortOrder] = useState(true);

    // syncronous - top to bottom

    // what is state ?
    // state is one type of data/information/variable which can render/display and update on the UI.
    // we can create state by useState hook in react. 
    // 20 times book likh dalo.

    let filteredData = data.filter(product => product.title.toLowerCase().includes(search.toLowerCase()))
    filteredData = data.sort((a, b) => sortOrder ? a.price - b.price : b.price - a.price);

    return (
        <div>
            <input type="text" onChange={(e) => { setSearch(e.target.value); console.log(search) }} />
            <button onClick={() => {
                setSortOrder(sortOrder ? false : true);
            }}>Sort</button>
            <div className="products">
                {
                    filteredData.map((product) => <div key={product.id}>
                        <h2>{product.title}</h2>
                        <span>{product.category}</span>
                        <h3>{product.price}</h3>
                        <span>{product.rating}</span>
                    </div>)
                }
            </div>
        </div>
    )
}
