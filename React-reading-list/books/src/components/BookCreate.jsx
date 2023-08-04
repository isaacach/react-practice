/* eslint-disable react/prop-types */
import { useState } from "react";
import BooksContext from "../context/books.jsx";

export default function BookCreate() {
  const [bookTitle, setBookTitle] = useState('');
  const { handleBookCreate } = BooksContext();

  const handleSubmit = (event) => {
    event.preventDefault();
    handleBookCreate(bookTitle);
    setBookTitle('');
  };

  const handleTitleChange = (event) => {
    setBookTitle(event.target.value);
  };

  return (
    <div className="book-create">
      <h1>Add a Book</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" value={bookTitle} onChange={handleTitleChange}/>
        <input type="submit" value="Add" />
      </form>
    </div>
  );
}