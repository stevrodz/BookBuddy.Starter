import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchBookDetails } from '../api/booksApi';

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = React.useState(null);

  useEffect(() => {
    fetchBookDetails(id).then(setBook);
  }, [id]);

  return book ? (
    <div>
      <h1>{book.title}</h1>
      <p>{book.author}</p>
      <p>{book.description}</p>
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default BookDetails;
