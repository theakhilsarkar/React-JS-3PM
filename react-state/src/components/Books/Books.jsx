import { useState } from "react";
import "./Books.css";
// Book Tracking System
// CRUD

const Books = () => {
  // {id:123,title:bookname,author:name}
  const [bookList, setBookLits] = useState([
    { id: 1, title: "The Secret", author: "Rhonda Byrne" },
  ]);

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  return (
    <>
      <input
        type="text"
        placeholder="Enter book name.."
        className="input-book"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        value={author}
        type="text"
        placeholder="Enter author name.."
        className="input-book"
        onChange={(e) => setAuthor(e.target.value)}
      />
      <button
        className="add-book"
        onClick={() => {
          const book = {
            id: Date.now(),
            title: title,
            author: author,
          };
          //   bookList.push(book);
          setBookLits([...bookList, book]); // array,book
        }}
      >
        Add Book
      </button>
      {bookList.map((book, index) => (
        <p key={index}>
          {book.title} - {book.author} -{" "}
          <button
            className="remove-book"
            onClick={() => {
              // index==index

              const temp = [...bookList];
              temp.splice(index, 1);

              //   let temp = bookList.filter((bk) => book.id != bk.id);

              setBookLits(temp);
            }}
          >
            X
          </button>
        </p>
      ))}
    </>
  );
};
export default Books;
