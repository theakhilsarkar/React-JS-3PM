import React, { useEffect, useState } from 'react'
import Navbar from '../Nav-Footer/Navbar'
import { useNavigate } from 'react-router-dom'

export default function Home() {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products").then((res) => res.json()).then((data) => setProducts(data));
    }, []);

    return (
        <div>
            <Navbar />
            <h1>Home Page</h1>
            <div>
                {
                    products.map((product) => {
                        return <div>
                            <h3>{product.title}</h3>
                            <p>{product.category}</p>
                            <p>{product.price}</p>
                            <button onClick={() => {
                                navigate("/detail", { state: product });
                            }}>View</button>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

// home products --> detail page




// export default function Home() {

//     const [position, setPosition] = useState(null);
//     const [text, setText] = useState("");
//     const [todos, setTodos] = useState(["read books", "walk 20 min"]); // state, setState(method,update state)
//     // crud - useState
//     // state = information --> number,message,para,array,{},{[]}
//     // state = ui,update

//     // state,ref

//     return (
//         <div>
//             <input value={text} type="text" onChange={(e) => setText(e.target.value)} />
//             <button onClick={() => {
//                 // todos - array
//                 // text - string
//                 const newTodos = [...todos, text]; // ["read-book","walk 20 min","jugal"]
//                 setTodos(newTodos);
//             }}>Add</button>
//             <button onClick={() => {

//                 // const arr = [1,2,3];
//                 // arr --> 1,2,3
//                 // arr[0] --> 1
//                 // arr[0] = 20;
//                 // arr --> 20,2,3

//                 const newTodos = [...todos];
//                 newTodos[position] = text;
//                 setTodos(newTodos);
//             }}>Update</button>
//             {
//                 todos.map((todo, index) => <p key={index}>
//                     {todo}
//                     <button onClick={() => {
//                         const newTodos = [...todos];
//                         newTodos.splice(index, 1);
//                         setTodos(newTodos);
//                     }}>-</button>
//                     <button onClick={
//                         // edit button
//                         () => {
//                             setText(todo);
//                             setPosition(index);
//                         }
//                     }>E</button>
//                 </p>)
//             }
//         </div >
//     )
// }
