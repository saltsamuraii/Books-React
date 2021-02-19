import React from 'react';
import s from "./StoreBook.module.css";

function StoreBooks({onRemove, onEdit, books, editRow, currentBook}) {

    //Events
    const bookEditHandler = (title, author, year) => {
        onEdit(title, author, year);
    };

    const bookRemoveHandler = (title) => {
        onRemove(title);
    };

    return (
        <div>
            {books.map((book) => (
                <div className={s.container}>
                    <img src={book.image} className={s.img} alt="bookImage"/>
                    <div>
                        <h2>{book.title}</h2>
                        <p>{book.author}</p>
                        <p>{book.year}</p>
                    </div>

                    <div className={s.buttons}>
                        <button onClick={() => editRow(book)}>Редактировать</button>
                        <button onClick={() => bookRemoveHandler(book.title)}>Удалить</button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default StoreBooks;