import React, {useState} from "react";

//Css
import './App.css';

//Components
import BookList from "./components/BookList/BookList";
import Modal from "./components/Modal/Modal";
import StoreBooks from "./components/StorebBooks/StoreBooks";

//State
import state from "./redux/state";

//Hooks
function App() {
    const [IsOpen, setIsOpen] = useState(false);
    const [inputText, setInputText] = useState('');
    const [inputAuthor, setInputAuthor] = useState('');
    const [inputYear, setInputYear] = useState('');
    const [books, setBooks] = useState([]);



    //Events
    const removeBook = (id) => {
        console.log(id)
    };


    return (
        <div className="App">
            <h1>Книжная полка</h1>
            <button className="btn" onClick={() => setIsOpen(true)}>Добавить книгу</button>
            <Modal
                open={IsOpen}
                onClose={() => setIsOpen(false)}
                books={books}
                setBooks={setBooks}
                inputText={inputText}
                setInputText={setInputText}
                inputAuthor={inputAuthor}
                setInputAuthor={setInputAuthor}
                inputYear={inputYear}
                setInputYear={setInputYear}
            />
            <StoreBooks removeBook={removeBook}/>
            <BookList
                //removeBook={removeBook}
                setBooks={setBooks}
                books={books}
            />
        </div>
    );
}

export default App;
