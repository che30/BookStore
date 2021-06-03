import React from 'react';
// import './App.css';
import BookForm from '../containers/Bookform';
import BookList from '../containers/Booklist';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <BookList />
      <BookForm />
    </div>
  );
}

export default App;
