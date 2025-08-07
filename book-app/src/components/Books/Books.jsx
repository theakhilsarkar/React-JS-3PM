import { useState } from "react"; //

// todo,note,book,task,alarm,twitter,blog,email,classroom,chat..

export default function Books() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [index, setIndex] = useState(0);

  // define state
  const [books, setBooks] = useState([
    {
      title: "How to Influence Friends and People",
      author: "Dale Carnegie",
    },
  ]);

  const addBook = () => {
    const newBook = {
      title: title,
      author: author,
    };
    setBooks([...books, newBook]);
  };

  function removeBook(index) {
    const temp = [...books];
    temp.splice(index, 1);
    setBooks(temp);
  }

  // index->book->title,author state
  function updateBook(i) {
    setIndex(i);
    setTitle(books[index].title);
    setAuthor(books[index].author);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Book Name.."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Author Name.."
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <button onClick={addBook}>Add Book</button>
      <button
        onClick={() => {
          const temp = [...books];
          temp[index].title = title;
          temp[index].author = author;
          setBooks(temp);
        }}
      >
        Update Book
      </button>

      {books.map((book, i) => (
        <div>
          <p>
            {book.title} - {book.author}
            <button onClick={() => removeBook(i)}>Delete</button>
            <button onClick={() => updateBook(i)}>Edit</button>
          </p>
        </div>
      ))}
    </div>
  );
}

// book records - []
// CRUD
// state --> Data -> UI
// useStae -- hook --> react : state, stateUpdater

// algorithems

// sab moh maya hai - bhagvan ka nam
