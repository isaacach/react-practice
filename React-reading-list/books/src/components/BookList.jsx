/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import BookShow from './BookShow.jsx';
import useBooksContext from '../hooks/use-books-context.jsx';


export default function BookList() {
  const { books } = useBooksContext();

  return (
    <div className="book-list">
        {books.map((book, index) => (
          <BookShow key={book.id} book={book}/>
        ))}
    </div>
  );
}