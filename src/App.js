import React, {useState} from "react";

//Css
import './App.css';

//Components
import BookList from "./components/BookList/BookList";
import AddForm from "./components/AddForm/AddForm";
import EditModal from "./components/EditModal/EditModal";
import StoreBooks from "./components/StorebBooks/StoreBooks";


function App() {
    //State
    const booksData = [
        {
            title: "Java Script и Jquery",
            author: "Дэвид Сойер Макферланд",
            year: 2016,
            image: "https://cdn1.ozone.ru/multimedia/c500/1016412966.jpg"
        },
        {
            title: "ES6 и не только",
            author: "Кайл Симпсон",
            year: 2017,
            image: "https://cv2.litres.ru/pub/c/pdf-kniga/cover/39123625-kayl-simpson-es6-i-ne-tolko-39123625.jpg_330.jpg"
        },
        {
            title: "Секреты JavaScript ниндзя",
            author: "Джон Резиг",
            year: 2017,
            image: "https://cdn1.ozone.ru/multimedia/c500/1007123068.jpg"
        },
    ];

    //Hooks
    const [books, setBooks] = useState(booksData);
    const [book, setBook] = useState([]);
    const [inputText, setInputText] = useState('');
    const [inputAuthor, setInputAuthor] = useState('');
    const [inputYear, setInputYear] = useState('');
    const [IsOpen, setIsOpen] = useState(false);


    const data = {title: ''}

    const [editing, setEditing] = useState(false)
    const [currentBook, setCurrentBook] = useState(data)

    //Events
    const bookAddHandler = (e) => {
        e.preventDefault();
        setBooks([
            ...books, {
                title: inputText,
                author: inputAuthor,
                year: inputYear,
            }
        ]);
        setInputText('');
        setInputAuthor('');
        setInputYear('');
    };

    const bookRemoveHandler = (title) => {
        setBooks(books.filter((book) => book.title !== title));
    };


    const updateBook = (title, updateTitle) => {
        setEditing(false);
        setBooks(books.map((book) => book.title === title ? updateTitle : book));
        console.log(title, updateTitle)
    };

    const editRow = item => {
        setEditing(true);
        setCurrentBook({title: item.title});
        console.log(item.title)
    };


    return (
        <div className="App">
            <h1>Книжная полка</h1>
            <button className="btn" onClick={() => setIsOpen(true)}>
                Добавить книгу
            </button>
            {editing ? (
                <EditModal
                    setBooks={setBooks}
                    book={book}
                    setBook={setBook}
                    books={books}


                    open={IsOpen}
                    onClose={() => setIsOpen(false)}


setCurrentBook={setCurrentBook}
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
                    open={IsOpen}
                    onClose={() => setIsOpen(false)}
                    onAdd={bookAddHandler}
                />
            )}
            <StoreBooks
                books={books}
                onRemove={bookRemoveHandler}
                editRow={editRow}
            />
            {/*<BookList
                book={book}
                setBook={setBook}
                onRemove={bookRemoveHandler}
            />*/}

        </div>
    );
}

export default App;
