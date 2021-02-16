import React from 'react';
import s from './Book.module.css'

const Book = ({title, author, year, book, books, setBooks}) => {

    //Events
    const deleteHandler = () => {
        setBooks(books.filter((el) => el.title !== book.title));
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
                <button onClick={deleteHandler}>Удалить</button>
            </div>
        </div>
    );
}

export default Book;