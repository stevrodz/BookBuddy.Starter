import { useGetBooksQuery } from '../api/booksApi';

const Books = () => {
  const { data: books, isLoading } = useGetBooksQuery();

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Books</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>{book.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Books;

