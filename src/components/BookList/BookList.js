import React from 'react';

//Components
import Book from "../Book/Book";


const BookList = ({ book, setBook, onRemove}) => {
    return (
        <div>
            {book.map((book) => (
                <Book
                    setBook={setBook}
                    book={book}
                    key={book.title}
                    year={book.year}
                    author={book.author}
                    title={book.title}
                    onRemove={onRemove}
                />
            ))}
        </div>
    );
}

export default BookList;