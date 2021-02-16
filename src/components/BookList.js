import React from 'react';

//Components
import Book from "./Book";

const BookList = ({ books, setBooks }) => {
    return (
        <div>
            {books.map((book) => (
                <Book
                    setBooks={setBooks}
                    books={books}
                    key={book.title}
                    book={book}
                    title={book.title}
                />
            ))}
        </div>
    );
}

export default BookList;