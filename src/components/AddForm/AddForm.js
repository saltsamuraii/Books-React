import React from 'react';

function AddForm({open, onClose, onAdd, inputText, setInputText, inputAuthor, setInputAuthor, inputYear, setInputYear}) {
    if (!open) return null;

    //Events
    const bookAddHandler = (title, author, year) => {
        onAdd(title, author, year);
    }

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


    return (
        <div>
            <div>
                <h2>Редактирование книги</h2>
                <p>Наименование</p>
                <input type="text"
                       name="title"
                       value={inputText}
                       onChange={inputTextHandler}/>
                <p>Автор</p>
                <input type="text"
                       name="author"
                       value={inputAuthor}
                       onChange={inputAuthorHandler}/>
                <p>Год выпуска</p>
                <input type="number"
                       min="2000"
                       max="2017"
                       value={inputYear}
                       onChange={inputYearHandler}/>
                <p>Изображение</p>
                <input type="url"/>
            </div>
            <div>
                <button onClick={bookAddHandler} type="submit">Сохранить</button>
                <button onClick={onClose}>Отменить</button>
            </div>
        </div>
    );
}

export default AddForm;