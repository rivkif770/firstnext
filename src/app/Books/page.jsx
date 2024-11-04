'use client';
import { useEffect, useState } from 'react';
import { fetchBooks } from '../../services/service/api';

export default function BooksPage() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function getBooks() {
      const data = await fetchBooks();
      setBooks(data);
    }
    getBooks();
  }, []);

  return (
    <div>
      <h1>Book List</h1>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            <h3>{book.title}</h3>
            <p>Price: ${book.price}</p>
            <img src={book.image} alt={book.title} width="100" />
            <p>{book.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
