 import { useEffect, useState } from 'react';
 import BookCreate from './components/BookCreate.jsx';
 import BookList from './components/BookList.jsx';

 import './index.css';
 
 export default function App() {

  const [books, setBooks] = useState([]);

  const getAllBooks = async () => {
    const response = await fetch('http://localhost:3001/books');
    const data = await response.json();
    setBooks(data);
  };

  useEffect(() => {
    getAllBooks();
  }, []);

  const handleDeleteBook = async (id) => {
    const response = await fetch(`http://localhost:3001/books/${id}`, {
      method: 'DELETE',
    });
    if (response.status === 200) {
      const newBooks = books.filter(book => book.id !== id);
      setBooks(newBooks);
    }
  };

  const handleBookCreate = async (book) => {
    const response = await fetch('http://localhost:3001/books', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        {"title": book}
      )
    });
    const newBook = await response.json();
    setBooks([...books, newBook]);
    
  };

  const handleEditBook = async (id, newTitle) => {
    const response = await fetch(`http://localhost:3001/books/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        {"title": newTitle}
      )
    });
    if (response.status === 200) {
      const newBooks = books.map(book => {
        if (book.id === id) {
          book.title = newTitle;
        }
        return book;
      });
      setBooks(newBooks);
    }
    
  }

  return (
    <div className="App">
      <BookCreate onCreate={handleBookCreate} />
      <BookList books={books} onDelete={handleDeleteBook} onEdit={handleEditBook}/>
    </div>
  );
}