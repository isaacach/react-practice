
 import { useEffect, useContext } from 'react';
 import BookCreate from './components/BookCreate.jsx';
 import BookList from './components/BookList.jsx';
 import BooksContext from './context/books.jsx';

 import './index.css';
 
 export default function App() {

  const { getAllBooks } = useContext(BooksContext);

  useEffect(() => {
    getAllBooks();
  }, []);

  

  return (
    <div className="App">
      <h1>Reading List</h1>
      <BookCreate />
      <BookList />
    </div>
  );
}