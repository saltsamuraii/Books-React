import React from 'react';
import s from "./StoreBook.module.css";

function StoreBooks({onRemove, onEdit, books}) {

    //Events
    const bookEditHandler = (title, author, year) => {
        onEdit(title, author, year);
    };

    const bookRemoveHandler = (title) => {
        onRemove(title);
    };

    return (
        <div>
            {books.map(({title, author, year, image}) => (
                <div className={s.container}>
                    <img src={image} className={s.img} alt="bookImage"/>
                    <div>
                        <h2>{title}</h2>
                        <p>{author}</p>
                        <p>{year}</p>
                    </div>

                    <div className={s.buttons}>
                        <button onClick={() => bookEditHandler(title, author, year)}>Редактировать</button>
                        <button onClick={() => bookRemoveHandler(title)}>Удалить</button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default StoreBooks;