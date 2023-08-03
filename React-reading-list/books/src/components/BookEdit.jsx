/* eslint-disable react/prop-types */
import { useState } from "react";

export default function BookEdit({ book, onSubmit }) {
  const [title, setTitle] = useState(book.title)

  const handleChange = (event) => {
    setTitle(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(book.id, title);
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