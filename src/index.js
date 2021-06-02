/* eslint-disable no-underscore-dangle */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';
import BookReducer from './reducers/BookReducer';

const initialState = {
  books: [
    {
      id: Math.floor(Math.random() * 1000),
      title: 'Angels and Demons',
      category: 'Action',
    },
    {
      id: Math.floor(Math.random() * 1000),
      title: 'Angel',
      category: 'Horror',
    },
    {
      id: Math.floor(Math.random() * 1000),
      title: 'Buffy The Vampire Slayer',
      category: 'Sci-Fi',
    },
  ],
};
const store = createStore(BookReducer, initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>

  </React.StrictMode>,
  document.getElementById('root'),
);
/* eslint-enable */
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
