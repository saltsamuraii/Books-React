import React, {useState, useEffect} from 'react';

const EditForm = (props) => {
    const [book, setBook] = useState(props.currentBook);

    useEffect(() => {
            setBook(props.currentBook)
        },
        [props]
    );

    //Events
    const handleInputChange = (event) => {
        const { name, value } = event.target
        setBook({...book, [name]: value});
    };

    const handleSubmit = event => {
        event.preventDefault();
        props.updateBook(book.id, book);
    };

    return (
        <div>
            <form >
                <div>
                    <h2>Редактирование книги</h2>
                    <p>Наименование</p>
                    <input type="text"
                           name="title"
                           value={book.title}
                           onChange={handleInputChange}
                    />
                    <p>Автор</p>
                    <input type="text"
                           name="author"
                           value={book.author}
                           onChange={handleInputChange}
                    />
                    <p>Год выпуска</p>
                    <input type="number"
                           name="year"
                           min="2000"
                           max="2017"
                           value={book.year}
                           onChange={handleInputChange}
                    />
                    <p>Изображение</p>
                    <input type="url"
                           name="image"
                           value={book.image}
                           onChange={handleInputChange}
                    />
                </div>
                <div>
                    <button type="submit" onClick={handleSubmit}>Обновить</button>
                    <button onClick={() => props.setEditing(false)}>Отменить</button>
                </div>
            </form>
        </div>
    );
}

export default EditForm;