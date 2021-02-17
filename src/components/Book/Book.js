import React from 'react';
import s from './Book.module.css'

const Book = ({title, author, year, book, books, setBooks}) => {

    //Events
    const deleteHandler = () => {
       setBooks(books.filter((el) => el.title !== book.title));
    };
    const editHandler = (e) => {
        e.preventDefault()
        console.log(books.title)
    }
    //const {removeBook} = (props)

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
                <button onChange={editHandler}>Редактировать</button>
                <button onClick={deleteHandler}>Удалить</button>
            </div>
        </div>
    );
}

export default Book;