import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux'

import garageReducer from './reducers/garageReducer'

const garageStore = createStore(garageReducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={garageStore}><App /></Provider>
  </React.StrictMode>
);

