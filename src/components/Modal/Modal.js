import React from 'react';

function Modal({open, onClose, inputText, setInputText, books, setBooks, inputAuthor, setInputAuthor, inputYear, setInputYear}) {
    if (!open) return null;

    //Inputs text
    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    };
    const inputAuthorHandler = (e) => {
        setInputAuthor(e.target.value)
    }
    const inputYearHandler = (e) => {
        setInputYear(e.target.value)
    }



    //Event
    const submitTodoHandler = (e) => {
        e.preventDefault();
        setBooks([
            ...books, {
                title: inputText,
                author: inputAuthor,
                year: inputYear,
            }
        ]);
        setInputText('');
        setInputAuthor('');
        setInputYear(Number);
    };

    return (
        <div>
            <form>
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
                           value={inputAuthor.author}
                           onChange={inputAuthorHandler}/>
                    <p>Год выпуска</p>
                    <input type="number"
                           min="2000"
                           max="2017"
                           value={inputYear.year}
                           onChange={inputYearHandler}/>
                    <p>Изображение</p>
                    <input type="url"/>
                </div>
                <div>
                    <button onClick={submitTodoHandler} type="submit">Сохранить</button>
                    <button onClick={onClose}>Отменить</button>
                </div>
            </form>
        </div>
    );
}

export default Modal;