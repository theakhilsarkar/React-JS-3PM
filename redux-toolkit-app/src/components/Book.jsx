import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeBook, addBook } from '../slices/BookSlice'

export default function Book() {
    const bookRef = useRef();
    const dispatch = useDispatch();
    const { books, total } = useSelector(state => state.book);
    return (
        <div>
            <h1>Total Books: {total}</h1>
            <input type="text" ref={bookRef} /><button onClick={() => {
                dispatch(addBook(bookRef.current.value));
            }}>Add Book</button>
            <div>
                {
                    books.map((book, index) => <p key={index}>{book} <button onClick={() => { dispatch(removeBook(index)) }}>-</button></p>)
                }
            </div>
        </div>
    )
}
