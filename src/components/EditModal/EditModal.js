import React from 'react';

function EditModal({name, setName, open, onClose, books}) {
    if (open) return true;

    const BookTitle = books.title;


    return (
        <div>
            <form>
                <div>
                    <h2>Редактирование книги</h2>
                    <p>Наименование</p>
                    <input type="text"
                           name="title"
                           value={name}
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
                    <button type="submit">Update</button>
                    <button onClick={onClose}>Отменить</button>
                </div>
            </form>
        </div>
    );
}

export default EditModal;