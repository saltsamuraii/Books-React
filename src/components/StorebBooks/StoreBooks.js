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
    ]

    return (
        <div>
            <div className={s.container}>
                {booksData.map(({title}) => (
                    <h1
                        key={`${title}`}
                        data-name={title}
                    >{title}</h1>
                ))}
            </div>
        </div>
    );
}

export default StoreBooks;