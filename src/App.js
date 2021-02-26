import React, {useState} from "react";

//Css
import './App.css';

//Components
import AddForm from "./components/AddForm/AddForm";
import EditForm from "./components/EditForm/EditForm";
import StoreBooks from "./components/StoreBooks/StoreBooks";


const App = () => {
    //Data
    const booksData = [
        {id: 1, title: "Java Script и Jquery", author: "Дэвид Сойер Макферланд", year: 2016, image: "https://cdn1.ozone.ru/multimedia/c500/1016412966.jpg"},
        {id: 2, title: "ES6 и не только", author: "Кайл Симпсон", year: 2017, image: "https://cv2.litres.ru/pub/c/pdf-kniga/cover/39123625-kayl-simpson-es6-i-ne-tolko-39123625.jpg_330.jpg"},
        {id: 3, title: "Секреты JavaScript ниндзя", author: "Джон Резиг", year: 2017, image: "https://cdn1.ozone.ru/multimedia/c500/1007123068.jpg"},
    ];

    const bookInputState = {id: null, title: '', author: '', year: '', image: ''}

    //State
    const [books, setBooks] = useState(booksData);
    const [currentBook, setCurrentBook] = useState(bookInputState)
    const [editing, setEditing] = useState(false)

    //Hooks changes
    const [isOpen, setIsOpen] = useState(false);

    //Events
    const addBook = book => {
        setBooks([...books, book])
    }

    const deleteBook = id => {
        setBooks(books.filter((book) => book.id !== id));
    };

    const editBook = (book) => {
        setEditing(true);
        setCurrentBook({id: book.id, title: book.title, author: book.author, year: book.year, image: book.image });
    };

    const updateBook = (id, updateBook) => {
        setEditing(false);
        setBooks(books.map(book => (book.id === id ? updateBook : book)));
    };

    return (
        <div className="App">
            <h1>Книжная полка</h1>
            <button className="btn" onClick={() => setIsOpen(true)}>
                Добавить книгу
            </button>
            {editing ? (
                <EditForm
                    onClose={() => setIsOpen(false)}
                    currentBook={currentBook}
                    editing={editing}
                    setEditing={setEditing}
                    updateBook={updateBook}
                />
            ) : (
                <AddForm
                    open={isOpen}
                    onClose={() => setIsOpen(false)}
                    addBook={addBook}
                    currentBook={currentBook}
                />
            )}
            <StoreBooks
                books={books}
                onRemove={deleteBook}
                editBook={editBook}
            />
        </div>
    );
}

export default App;