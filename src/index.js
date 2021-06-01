import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';
import BookReducer from './reducers/BookReducer';

const initialState = [
  { id: Math.floor(Math.random() * 100) + 1, title: 'Book1', category: 'Horror' },
  { id: Math.floor(Math.random() * 100) + 1, title: 'Book2', category: 'Action' },
  { id: Math.floor(Math.random() * 100) + 1, title: 'Book3', category: 'Biography' },
  { id: Math.floor(Math.random() * 100) + 1, title: 'Book4', category: 'History' },
  { id: Math.floor(Math.random() * 100) + 1, title: 'Book5', category: 'Kids' },
  { id: Math.floor(Math.random() * 100) + 1, title: 'Book6', category: 'Learning' },
  { id: Math.floor(Math.random() * 100) + 1, title: 'Book7', category: 'Sci-Fi' },
];
const store = createStore(BookReducer, { books: initialState });

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>

  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
