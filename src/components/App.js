import './App.css';
import BookForm from '../containers/Bookform';
import BookList from '../containers/Booklist';

function App() {
  return (
    <div className="App">
      <BookList />
      <BookForm />
    </div>
  );
}

export default App;
