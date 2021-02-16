import React from 'react';
import s from "./StoreBook.module.css";

function StoreBooks({}) {


    let BooksData = [
        {
            title: "Java Script и Jquery",
            author: "Дэвид Сойер Макферланд",
            year: "2016",
            image: "https://eloquentjavascript.net/img/cover.jpg"
        },
        {
            title: "ES6 и не только",
            author: "Кайл Симпсон",
            year: "2017"
        },
        {
            title: "Секреты JavaScript ниндзя",
            author: "Джон Резиг",
            year: "2017"
        },
    ]

    return (
        <div>
            <div className={s.container}>
                <img className={s.img}
                     src="https://eloquentjavascript.net/img/cover.jpg"
                     alt="bookImage"/>
                <div>
                    <h2>{BooksData[0].title}</h2>
                    <p>{BooksData[0].author}</p>
                    <p>{BooksData[0].year}</p>
                </div>

                <div className={s.buttons}>
                    <button>Редактировать</button>
                    <button>Удалить</button>
                </div>
            </div>

            <div className={s.container}>
                <img className={s.img}
                     src="https://eloquentjavascript.net/img/cover.jpg"
                     alt="bookImage"/>
                <div>
                    <h2>{BooksData[1].title}</h2>
                    <p>{BooksData[1].author}</p>
                    <p>{BooksData[1].year}</p>>
                </div>

                <div className={s.buttons}>
                    <button>Редактировать</button>
                    <button>Удалить</button>
                </div>
            </div>

            <div className={s.container}>
                <img className={s.img}
                     src="https://eloquentjavascript.net/img/cover.jpg"
                     alt="bookImage"/>
                <div>
                    <h2>{BooksData[2].title}</h2>
                    <p>{BooksData[2].author}</p>
                    <p>{BooksData[2].year}</p>
                </div>

                <div className={s.buttons}>
                    <button>Редактировать</button>
                    <button>Удалить</button>
                </div>
            </div>
        </div>
    );
}

export default StoreBooks;