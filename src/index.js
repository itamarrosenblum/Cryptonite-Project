import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore, combineReducers} from 'redux'; // Import redux functions
// Import redux reducers
import {arrReducer, favArrReducer, tempoArrReducer, searchValueReducer} from "./redux/reducers";
import {Provider} from 'react-redux'; // Importing the redux Provider component

const store = createStore(combineReducers({ // Creacting the store
  arr: arrReducer,
  favArr: favArrReducer, 
  tempoArr: tempoArrReducer,
  searchValue: searchValueReducer,
})) // Multi reducer nested in single reducer

// Wraps the Provider component around the React component
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
