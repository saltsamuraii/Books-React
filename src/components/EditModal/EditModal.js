import React from 'react';

function EditModal({currentBook, updateBook, setCurrentBook, open, setEditing}) {
    if (!open) return null;


   const handleInputChange = event => {
        const { bookName, value } = event.target

        setCurrentBook({...currentBook, [bookName]: value})
    }

    const handleSubmit = event => {
        event.preventDefault()
        if (!currentBook.title || !currentBook.author || !currentBook.year || !currentBook.image) return

        updateBook(currentBook.title, currentBook)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
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
                <input type="url"
                       value={currentBook.image}
                       onChange={handleInputChange}
                />
            </div>
            <div>
                <button type="submit">Обновить</button>
                <button onClick={() => setEditing(false)}>Отменить</button>
            </div>
            </form>
        </div>
    );
}

export default EditModal;