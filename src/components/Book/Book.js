import React from 'react';
import s from './Book.module.css'

const Book = ({title, author, year, onRemove}) => {

    //Events
    const bookRemoveHandler = (title) => {
        onRemove(title);
    };

    return (
        <div className={s.container}>
            <img className={s.img}
                 src="https://eloquentjavascript.net/img/cover.jpg"
                 alt="bookImage"/>
            <div>
                <h2>{title}</h2>
                <p>{author}</p>
                <p>{year}</p>
            </div>
            <div className={s.buttons}>
                <button>Редактировать</button>
                <button onClick={bookRemoveHandler}>Удалить</button>
            </div>
        </div>
    );
}

export default Book;