import React from 'react';

function AddForm({
    open,
    onClose,
    onAdd,
    inputText,
    setInputText,
    inputAuthor,
    setInputAuthor,
    inputYear,
    setInputYear,
    inputImage,
    setInputImage
}) {
    if (!open) return null;

    //Events
    const addBook = (title, author, year, image) => {
        onAdd(title, author, year, image);
    };

    //Inputs text
    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    };
    const inputAuthorHandler = (e) => {
        setInputAuthor(e.target.value)
    };
    const inputYearHandler = (e) => {
        setInputYear(e.target.value)
    };
    const inputImageHandler = (e) => {
        setInputImage(e.target.value)
    };


    return (
        <div>
            <form>
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
                <input type="url"
                       value={inputImage}
                       onChange={inputImageHandler}
                />
            </div>
            <div>
                <button onClick={addBook} type="submit">Сохранить</button>
                <button onClick={onClose}>Отменить</button>
            </div>
            </form>
        </div>
    );
}

export default AddForm;