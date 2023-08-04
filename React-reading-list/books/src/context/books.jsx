/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

const BooksContext = createContext();

function Provider({ children }) {
  const [books, setBooks] = useState([]);

  const getAllBooks = async () => {
    const response = await fetch("http://localhost:3001/books");
    const data = await response.json();
    setBooks(data);
  };

  const handleDeleteBook = async (id) => {
    const response = await fetch(`http://localhost:3001/books/${id}`, {
      method: "DELETE",
    });
    if (response.status === 200) {
      const newBooks = books.filter((book) => book.id !== id);
      setBooks(newBooks);
    }
  };

  const handleBookCreate = async (book) => {
    const response = await fetch("http://localhost:3001/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: book }),
    });
    const newBook = await response.json();
    setBooks([...books, newBook]);
  };

  const handleEditBook = async (id, newTitle) => {
    const response = await fetch(`http://localhost:3001/books/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: newTitle }),
    });
    if (response.status === 200) {
      const newBooks = books.map((book) => {
        if (book.id === id) {
          return { ...book, ...response.data };
        }
        return book;
      });
      setBooks(newBooks);
    }
  };

  const values = {
    books,
    getAllBooks,
    handleDeleteBook,
    handleBookCreate,
    handleEditBook,
  };

  return (
    <BooksContext.Provider value={values}>{children}</BooksContext.Provider>
  );
}

export { Provider };
export default BooksContext;
