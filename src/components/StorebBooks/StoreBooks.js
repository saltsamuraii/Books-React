import React from 'react';
import s from "./StoreBook.module.css";

function StoreBooks(props) {
    return (
        <div>
            <div className={s.container}>
                <img className={s.img}
                     src="https://eloquentjavascript.net/img/cover.jpg"
                     alt="bookImage"/>
                <div>
                    <h2>Java Script и Jquery</h2>
                    <p>'Дэвид Сойер Макферланд</p>
                    <p>2016</p>
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
                    <h2>ES6 и не только</h2>
                    <p>Кайл Симпсон</p>
                    <p>2017</p>
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
                    <h2>Секреты JavaScript ниндзя</h2>
                    <p>Джон Резиг</p>
                    <p>2017</p>
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