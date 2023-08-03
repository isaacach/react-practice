 import { useState } from 'react';
 import BookCreate from './components/BookCreate.jsx';
 import BookList from './components/BookList.jsx';

 import './index.css';
 
 export default function App() {

  const [books, setBooks] = useState([]);

  const handleDeleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  const handleBookCreate = (book) => {
    setBooks([...books, {id: books.length + 1, title: book}]);
    console.log(books);
  };

  const handleEditBook = (id, newTitle) => {
    books.map(book => book.id === id ? book.title = newTitle : book)
  }

  return (
    <div className="App">
      <BookCreate onCreate={handleBookCreate} />
      <BookList books={books} onDelete={handleDeleteBook} onEdit={handleEditBook}/>
    </div>
  );
}