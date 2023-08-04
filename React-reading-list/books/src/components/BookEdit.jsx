/* eslint-disable react/prop-types */
import { useState} from "react";
import useBooksContext from "../hooks/use-books-context";

export default function BookEdit({ book, onSubmit }) {
  const [title, setTitle] = useState(book.title)
  const { handleEditBook } = useBooksContext();

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