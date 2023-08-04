/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import BookShow from './BookShow.jsx';
import { useContext } from 'react';
import BooksContext from '../context/books.jsx';

export default function BookList() {
  const { books } = useContext(BooksContext);
  
  return (
    <div className="book-list">
        {books.map((book, index) => (
          <BookShow key={book.id} book={book}/>
        ))}
    </div>
  );
}