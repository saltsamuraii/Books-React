import React from 'react';

function EditModal({currentBook, setCurrentBook, open, onEdit, setEditing}) {
    if (!open) return null;


   const handleInputChange = event => {
        const { bookName, value } = event.target

        setCurrentBook({...currentBook, [bookName]: value})
    }

    return (
        <div>
            <div>
                <h2>Редактирование книги</h2>
                <p>Наименование</p>
                <input type="text"
                       name="title"
                       value={currentBook.title}
                       onChange={handleInputChange}
                />
                <p>Автор</p>
                <input type="text"
                       name="author"
                       value={currentBook.author}
                       onChange={handleInputChange}
                />
                <p>Год выпуска</p>
                <input type="number"
                       min="2000"
                       max="2017"
                       value={currentBook.year}
                       onChange={handleInputChange}
                />
                <p>Изображение</p>
                <input type="url"/>
            </div>
            <div>
                <button type="submit">Обновить</button>
                <button onClick={() => setEditing(false)}>Отменить</button>
            </div>
        </div>
    );
}

export default EditModal;