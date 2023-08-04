/* eslint-disable react/prop-types */
import BookEdit from "./BookEdit";
import { useState } from "react";
import useBooksContext from "../hooks/use-books-context";

export default function BookShow({ book }) {
  const [edit, setEdit] = useState(false);
  const { handleDeleteBook } = useBooksContext();

  const handleDeleteClick = () => {
    handleDeleteBook(book.id);
  }

  const handleEditClick = () => {
    setEdit(!edit);
  }

  const handleSubmit = () => {
    setEdit(false);
  }

  let content = <h3>{book.title}</h3>
  if (edit) {
    content = <BookEdit book={book} onSubmit={handleSubmit}/>
  }

  return (
    <div className="book-card">
      <div className="edit-delete-icons">
        <img onClick={handleEditClick} src='src/images/edit-icon.png' alt='edit icon' />
        <img onClick={handleDeleteClick} src='src/images/delete-icon.png' alt='delete icon' />
      </div>
      <div className="img-wrapper">
        <img src='src/images/book.png' alt='book cover' />
      </div>
      {content}
    </div>
  );
}