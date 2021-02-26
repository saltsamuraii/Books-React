import React from 'react';
import s from "./StoreBook.module.css";

function StoreBooks({onRemove, books, editBook}) {


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
                        <button onClick={() => editBook(book)}>Редактировать</button>
                        <button onClick={() => onRemove(book.id)}>Удалить</button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default StoreBooks;