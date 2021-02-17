import React from 'react';

//Components
import Book from "../Book/Book";


const BookList = ({ books, setBooks}) => {
    return (
        <div>
            {books.map((book) => (
                <Book
                    //removeBook={removeBook}
                    setBooks={setBooks}
                    books={books}
                    key={book.title}
                    book={book}
                    year={book.year}
                    author={book.author}
                    title={book.title}
                />
            ))}
        </div>
    );
}

export default BookList;