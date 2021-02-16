import React from 'react';
import s from './BookItem.module.css'

const Book = ({title, book, books, setBooks}) => {
    //Events

    const deleteHandler = () => {
        setBooks(books.filter((el) => el.title !== book.title));
    };

    return (
        <div className={s.container}>
            <img className={s.img}
                 src="https://lh3.googleusercontent.com/proxy/6IWhUuzveYP0sShncEAvOQi5ILPllrwQBY_uyR8eY8zVrUlcXyAmMPhirpbpDDL_FzFAyYrtk80XoveSyito-OM-PTTx4l8euSYRkGqFr1wKt7b6twUBEzbF6_bvdJAgzf9xAZ4WugbRpeSjVFan8P695lx9_dyKRPjXjzQwcEghmroJ7LDY9Ex-bwor"
                 alt="bookImage"/>
            <div>
                <h2 className={s.title}>{title}</h2>
                <p className={s.name}>Avtor</p>
                <p className={s.year}>2018</p>
            </div>

            <div className={s.buttons}>
                <button>Редактировать</button>
                <button onClick={deleteHandler}>Удалить</button>
            </div>


        </div>
    );
}

export default Book;