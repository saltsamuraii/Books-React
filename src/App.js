import React, {useState} from 'react'
import './App.css';

//Components
import BookList from "./components/BookList/BookList";
import Modal from "./components/Modal";
import StoreBooks from "./components/StorebBooks/StoreBooks";




//Hooks
function App() {
    const [IsOpen, setIsOpen] = useState(false);
    const [inputText, setInputText] = useState('');
    const [books, setBooks] = useState([]);



    return (
        <div className="App">
            <h1>Книжная полка</h1>
            <button className="btn"
                    onClick={() => setIsOpen(true)}>
                Добавить книгу
            </button>
            <Modal
                books={books}
                setBooks={setBooks}
                inputText={inputText}
                setInputText={setInputText}
                open={IsOpen}
                onClose={() => setIsOpen(false)}
            />

<StoreBooks/>
            <BookList
                setBooks={setBooks}
                books={books}
            />
        </div>
    );
}

export default App;
