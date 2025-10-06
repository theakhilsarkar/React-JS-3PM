import React, { useState } from 'react'
import { data } from '../../assets/data'

export default function Home() {

    // sorting - ecom - price
    // high to low
    // low to high

    // syncronous - top to bottom

    // what is state ?
    // state is one type of data/information/variable which can render/display and update on the UI.
    // we can create state by useState hook in react.
    // when state update, component is re-render/re-create
    // 


    const [search, setSearch] = useState("")
    const [sortOrder, setSortOrder] = useState(null);
    const [category, setCategory] = useState("all");
    const [rating, setRating] = useState(0);
    
    let filteredData = [...data]; //assign copy of data array in filtereddata

    if (search) {
        filteredData = filteredData.filter(product => product.title.toLowerCase().includes(search.toLowerCase()))
    }

    if (sortOrder != null) {
        filteredData = filteredData.sort((a, b) => sortOrder ? a.price - b.price : b.price - a.price);
    }

    if (category !== "all") {
        filteredData = filteredData.filter(product => product.category.toLowerCase().includes(category.toLowerCase()))
    }

    if (rating > 0) {
        filteredData = filteredData.filter(product => product.rating >= rating)
    }

    return (
        <div>
            <input placeholder='search by title' type="text" onChange={(e) => { setSearch(e.target.value); }} />
            <input placeholder='search by category' type="text" onChange={(e) => { setCategory(e.target.value); }} />
            <label htmlFor="rating">{rating}</label>
            <input name='rating' type="range" min={0} max={5} step={1} value={rating} onChange={(e) => setRating(Number(e.target.value))} />
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

// dashboard
