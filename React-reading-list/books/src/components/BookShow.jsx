/* eslint-disable react/prop-types */
import BookEdit from "./BookEdit";
import { useState } from "react";

export default function BookShow({ book, onDelete, onEdit }) {
  const [edit, setEdit] = useState(false);

  const handleDeleteClick = () => {
    onDelete(book.id);
  }

  const handleEditClick = () => {
    setEdit(!edit);
  }

  const handleSubmit = (id, newTitle) => {
    setEdit(false);
    onEdit(id, newTitle)
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