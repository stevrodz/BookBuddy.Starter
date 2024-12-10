import React from 'react';
import { useSelector } from 'react-redux';

const Account = () => {
  const user = useSelector(state => state.user);

  return (
    <div>
      <h1>Account</h1>
      <p>Email: {user.email}</p>
      <h2>Checked Out Books</h2>
      {user.checkedOutBooks.length ? (
        <ul>
          {user.checkedOutBooks.map(book => (
            <li key={book.id}>{book.title}</li>
          ))}
        </ul>
      ) : (
        <p>No books checked out.</p>
      )}
    </div>
  );
};

export default Account;
