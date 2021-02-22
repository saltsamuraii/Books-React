import React, {useState, useEffect} from 'react';

function EditForm({ currentBook, updateBook, setEditing }) {
    const [bookName, setBookName] = useState(currentBook);

    useEffect(() => {
            setBookName(currentBook)
        }, [currentBook]
    );

    //Events
    const handleInputChange = (event) => {
        const {value} = event.target
        setBookName(value);
    };

    const handleSubmit = event => {
        event.preventDefault()
        updateBook(currentBook);
    };
    console.log(currentBook);

    return (
        <div>
            <form>
                <div>
                    <h2>Редактирование книги</h2>
                    <p>Наименование</p>
                    <input type="text"
                           name="title"
                           value={bookName.title}
                           onChange={handleInputChange}
                    />
                    <p>Автор</p>
                    <input type="text"
                           name="author"
                           value={bookName.author}
                           onChange={handleInputChange}
                    />
                    <p>Год выпуска</p>
                    <input type="number"
                           min="2000"
                           max="2017"
                           value={bookName.year}
                           onChange={handleInputChange}
                    />
                    <p>Изображение</p>
                    <input type="url"
                           value={bookName.image}
                           onChange={handleInputChange}
                    />
                </div>
                <div>
                    <button type="submit" onClick={handleSubmit}>Обновить</button>
                    <button onClick={() => setEditing(false)}>Отменить</button>
                </div>
            </form>
        </div>
    );
}

export default EditForm;