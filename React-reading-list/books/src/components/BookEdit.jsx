/* eslint-disable react/prop-types */
import { useState, useContext } from "react";
import BooksContext from "../context/books.jsx";

export default function BookEdit({ book, onSubmit }) {
  const [title, setTitle] = useState(book.title)
  const { handleEditBook } = useContext(BooksContext);

  const handleChange = (event) => {
    setTitle(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit();
    handleEditBook(book.id, title);
  }

  return (
    <div className="edit">
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={title} />
        <input type="submit"/>
      </form>
    </div>
  );
}