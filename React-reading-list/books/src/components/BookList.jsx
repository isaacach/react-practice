/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */


import BookShow from './BookShow.jsx';

export default function BookList({ books, onDelete, onEdit }) {
  
  return (
    <div className="book-list">
        {books.map((book, index) => (
          <BookShow key={index} book={book} onDelete={onDelete} onEdit={onEdit}/>
        ))}
    </div>
  );
}