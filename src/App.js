import React, {useState} from "react";

//Css
import './App.css';

//Components
import AddForm from "./components/AddForm/AddForm";
import EditForm from "./components/EditForm/EditForm";
import StoreBooks from "./components/StorebBooks/StoreBooks";


function App() {
    //Data
    const booksData = [
        {title: "Java Script и Jquery", author: "Дэвид Сойер Макферланд", year: 2016, image: "https://cdn1.ozone.ru/multimedia/c500/1016412966.jpg"},
        {title: "ES6 и не только", author: "Кайл Симпсон", year: 2017, image: "https://cv2.litres.ru/pub/c/pdf-kniga/cover/39123625-kayl-simpson-es6-i-ne-tolko-39123625.jpg_330.jpg"},
        {title: "Секреты JavaScript ниндзя", author: "Джон Резиг", year: 2017, image: "https://cdn1.ozone.ru/multimedia/c500/1007123068.jpg"},
    ];

    const bookInputState = {title: '', author: '', year: '', image: ''}

    //State
    const [books, setBooks] = useState(booksData);
    const [currentBook, setCurrentBook] = useState(bookInputState)
    const [editing, setEditing] = useState(false)

    //Hooks changes
    const [inputText, setInputText] = useState('');
    const [inputAuthor, setInputAuthor] = useState('');
    const [inputYear, setInputYear] = useState('');
    const [inputImage, setInputImage] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    //Events
    const addBook = (e) => {
        e.preventDefault();
        setBooks([
            ...books, {
                title: inputText,
                author: inputAuthor,
                year: inputYear,
                image: inputImage,
            }
        ]);
        setInputText('');
        setInputAuthor('');
        setInputYear('');
        setInputImage('');
    };
    const deleteBook = (title) => {
        setBooks(books.filter((book) => book.title !== title));
    };
    const editBook = (book) => {
        setEditing(true);
        setCurrentBook({title: book.title, author: book.author, year: book.year, image: book.image});
    };
    const updateBook = (updatedBook) => {
        setEditing(false);
        setBooks(books.map((book) => book.title === updatedBook.title ? updatedBook : book));
        console.log(updatedBook)
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
                    inputText={inputText}
                    setInputText={setInputText}
                    inputAuthor={inputAuthor}
                    setInputAuthor={setInputAuthor}
                    inputYear={inputYear}
                    setInputYear={setInputYear}
                    inputImage={inputImage}
                    setInputImage={setInputImage}
                    currentBook={currentBook}
                    setCurrentBook={setCurrentBook}
                    open={isOpen}
                    onClose={() => setIsOpen(false)}
                    onAdd={addBook}
                    updateBook={updateBook}
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
