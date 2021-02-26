import React, {useState} from 'react';

const AddForm = (props) => {
    const bookInputState = {id: null, title: '', author: '', year: '', image: ''}
    const [book, setBook] = useState(bookInputState);

    if (!props.open) return null;

    //Events
    const handleInputChange = (event) => {
        const { name, value } = event.target
        setBook({...book, [name]: value});
    };

    const handleSubmit = event => {
        event.preventDefault();
        props.addBook(book);
        setBook(bookInputState)

    };

    return (
        <div>
            <form onSubmit={handleSubmit} >
                <div>
                    <h2>Редактирование книги</h2>
                    <p>Наименование</p>
                    <input type="text"
                           name="title"
                           value={book.title}
                           onChange={handleInputChange}/>
                    <p>Автор</p>
                    <input type="text"
                           name="author"
                           value={book.author}
                           onChange={handleInputChange}/>
                    <p>Год выпуска</p>
                    <input type="number"
                           name="year"
                           min="2000"
                           max="2017"
                           value={book.year}
                           onChange={handleInputChange}/>
                    <p>Изображение</p>
                    <input type="url"
                           name="image"
                           value={book.image}
                           onChange={handleInputChange}
                    />
                </div>
                <div>
                    <button type="submit">Сохранить</button>
                    <button onClick={props.onClose}>Отменить</button>
                </div>
            </form>
        </div>
    );
}

export default AddForm;