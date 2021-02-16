import React from 'react';

function Modal({open, onClose, inputText, setInputText, books, setBooks}) {
    if (!open) return null;

    const inputTextHandler = (e) => {
       setInputText(e.target.value);
    };

    const submitTodoHandler = (e) => {
        e.preventDefault();
        setBooks([
            ...books, {
                title: inputText,
                author: inputText,
                year: inputText,
            }
        ]);
        setInputText('');
    };

    return (
        <div>
            <div>
                <h2>Редактирование книги</h2>
                <p>Наименование</p>
                <input type="text"
                       name="title"
                       value={inputText.title}
                       onChange={inputTextHandler}/>
                <p>Автор</p>
                <input type="text"
                       name="author"
                       value={inputText.author}
                       onChange={inputTextHandler}/>
                <p>Год выпуска</p>
                <input type="number"
                       value={inputText.year}
                       onChange={inputTextHandler}/>
                <p>Изображение</p>
                <input type="link"
                       />
            </div>
            <div>
                <button onClick={submitTodoHandler} type="submit">Сохранить</button>
                <button onClick={onClose}>Отменить</button>
            </div>
        </div>
    );
}

export default Modal;