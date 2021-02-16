import React from 'react';
import s from "./StoreBook.module.css";

function StoreBooks({}) {

    const booksData = [
        {
            title: "Java Script и Jquery",
            author: "Дэвид Сойер Макферланд",
            year: 2016,
            image: "https://eloquentjavascript.net/img/cover.jpg"
        },
        {
            title: "ES6 и не только",
            author: "Кайл Симпсон",
            year: 2017,
            image: "https://eloquentjavascript.net/img/cover.jpg"
        },
        {
            title: "Секреты JavaScript ниндзя",
            author: "Джон Резиг",
            year: 2017,
            image: "https://eloquentjavascript.net/img/cover.jpg"
        },
    ]

    return (
        <div>
            {booksData.map(({title, author, year, image}) => (
                <div className={s.container}>
                    <img src={image}
                         className={s.img}
                         alt="bookImage"/>
                    <div>
                        <h2>{title}</h2>
                        <p>{author}</p>
                        <p>{year}</p>
                    </div>
                    <div className={s.buttons}>
                        <button>Редактировать</button>
                        <button>Удалить</button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default StoreBooks;