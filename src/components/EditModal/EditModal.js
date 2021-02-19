import React from 'react';

function EditModal({onClose, books, onEdit}) {


    const {bookEditHandler} = (books) => {
        onEdit(books);
    }

    return (
        <div>
            <div>
                <h2>Редактирование книги</h2>
                <p>Наименование</p>
                <input type="text"
                       name="title"
                       value={books}
                />
                <p>Автор</p>
                <input type="text"
                       name="author"
                />
                <p>Год выпуска</p>
                <input type="number"
                       min="2000"
                       max="2017"
                />
                <p>Изображение</p>
                <input type="url"/>
            </div>
            <div>
                <button type="submit" onClick={bookEditHandler}>Сохранить</button>
                <button onClick={onClose}>Отменить</button>
            </div>
        </div>
    );
}

export default EditModal;