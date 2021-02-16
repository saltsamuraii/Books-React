import React from 'react';
import s from "./StoreBook.module.css";

function StoreBooks({}) {


    //Events
    const deleteHandler = () => {
        console.log(booksData)
        booksData.pop();
    };

    const booksData = [
        {
            id: 1,
            title: "Java Script и Jquery",
            author: "Дэвид Сойер Макферланд",
            year: 2016,
            image: "https://cdn1.ozone.ru/multimedia/c500/1016412966.jpg"
        },
        {
            title: "ES6 и не только",
            author: "Кайл Симпсон",
            year: 2017,
            image: "https://cv2.litres.ru/pub/c/pdf-kniga/cover/39123625-kayl-simpson-es6-i-ne-tolko-39123625.jpg_330.jpg"
        },
        {
            title: "Секреты JavaScript ниндзя",
            author: "Джон Резиг",
            year: 2017,
            image: "https://cdn1.ozone.ru/multimedia/c500/1007123068.jpg"
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
                        <button onClick={deleteHandler}>Удалить</button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default StoreBooks;